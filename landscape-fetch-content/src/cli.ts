import * as Cli from '@effect/cli'
import { Effect, Layer, Logger, Option } from 'effect'
import * as PlatformNode from '@effect/platform-node'
import { FileSystem } from '@effect/platform'
import packageJson from '../package.json' with { type: 'json' }
import { repos } from './repos.js'
import { fetchRepo } from './fetch-repo.js'
import path from 'node:path'

const targetDirOption = Cli.Options.directory('target-dir')
const overrideTargetDirOption = Cli.Options.boolean('override-target-dir').pipe(
  Cli.Options.withDefault(false),
)

const fetchContentCommand = Cli.Command.make(
  'fetch-content',
  { targetDir: targetDirOption, overrideTargetDir: overrideTargetDirOption },
  ({ targetDir, overrideTargetDir }) =>
    Effect.gen(function* () {
      const fs = yield* FileSystem.FileSystem

      if (!process.env.GITHUB_TOKEN) {
        throw new Error('GITHUB_TOKEN is not set')
      }

      console.log('targetDir', targetDir)

      if (
        (yield* fs.exists(targetDir)) &&
        (yield* fs
          .readDirectory(targetDir)
          .pipe(Effect.map((_) => _.length > 0)))
      ) {
        const confirmed =
          overrideTargetDir ||
          (yield* Cli.Prompt.confirm({
            message:
              'Target directory is not empty. Please confirm you want to overwrite it.',
          }))

        if (confirmed) {
          yield* fs.remove(targetDir, { recursive: true })
        } else {
          yield* Effect.log('Aborting')
          return
        }

        yield* fs.makeDirectory(targetDir, { recursive: true })
      }

      const repoResults = yield* Effect.forEach(repos, fetchRepo, {
        concurrency: 10,
      }).pipe(
        Effect.map((results) =>
          results.filter(Option.isSome).map((result) => result.value),
        ),
      )

      for (const repoResult of repoResults) {
        const dir = path.join(targetDir, repoResult.repoInfo.id)

        yield* fs.makeDirectory(dir, { recursive: true })
        for (const { name, content } of Object.values(repoResult.files)) {
          yield* fs.writeFile(path.join(dir, name), content)
        }
      }

      // console.log('repoResults', repoResults)

      const ambientDtsContent = `\
declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.png' {
  const content: any
  export default content
}
`

      yield* fs.writeFileString(
        path.join(targetDir, 'ambient.d.ts'),
        ambientDtsContent,
      )

      // Replace all invalid characters with underscores
      const idToVarName = (id: string) => id.replace(/[^a-zA-Z0-9]/g, '_')

      const modFileContent = `\
${repoResults
  .map(
    (repo) =>
      `import { data as ${idToVarName(repo.repoInfo.id)} } from './${repo.repoInfo.id}/${repo.files.data.name}'`,
  )
  .join('\n')}

${repoResults
  .map(
    (repo) =>
      `import ${idToVarName(repo.repoInfo.id)}LogoLight from './${repo.repoInfo.id}/${repo.files.logoLight.name}'
import ${idToVarName(repo.repoInfo.id)}LogoDark from './${repo.repoInfo.id}/${repo.files.logoDark.name}'`,
  )
  .join('\n')}

export const data = [
  ${repoResults
    .map(
      (repo) =>
        `{ ...${idToVarName(repo.repoInfo.id)}, Logo: { Light: ${idToVarName(
          repo.repoInfo.id,
        )}LogoLight, Dark: ${idToVarName(repo.repoInfo.id)}LogoDark } }`,
    )
    .join(',\n  ')}
]
`

      yield* fs.writeFileString(path.join(targetDir, 'mod.ts'), modFileContent)
    }),
)

const cli = Cli.Command.run(fetchContentCommand, {
  name: 'Localfirst.fm Landscape CLI',
  version: packageJson.version,
})

const layer = Layer.mergeAll(PlatformNode.NodeContext.layer, Logger.pretty)

cli(process.argv).pipe(
  Effect.annotateLogs({ thread: 'cli-main' }),
  Effect.provide(layer),
  PlatformNode.NodeRuntime.runMain,
)
