import * as Cli from '@effect/cli'
import { Effect, Layer, Logger, Option } from 'effect'
import * as PlatformNode from '@effect/platform-node'
import { FileSystem } from '@effect/platform'
import packageJson from '../package.json' with { type: 'json' }
import { repos } from './repos.js'
import { fetchRepo } from './fetch-repo.js'
import path from 'node:path'

const targetDirOption = Cli.Options.directory('target-dir')

const fetchContentCommand = Cli.Command.make(
  'fetch-content',
  { targetDir: targetDirOption },
  ({ targetDir }) =>
    Effect.gen(function* () {
      const fs = yield* FileSystem.FileSystem

      if (
        yield* fs.readDirectory(targetDir).pipe(Effect.map((_) => _.length > 0))
      ) {
        const confirmed = yield* Cli.Prompt.confirm({
          message:
            'Target directory is not empty. Please confirm you want to overwrite it.',
        })

        if (confirmed) {
          yield* fs.remove(targetDir, { recursive: true })
        } else {
          yield* Effect.log('Aborting')
          return
        }
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
          yield* fs.writeFileString(path.join(dir, name), content)
        }
      }

      const modFileContent = `\
${repoResults
  .map(
    (repo) =>
      `import { data as ${repo.repoInfo.id} } from './${repo.repoInfo.id}/${repo.files.data.name}'`,
  )
  .join('\n')}

${repoResults
  .map(
    (
      repo,
    ) => `import ${repo.repoInfo.id}LogoLight from './${repo.repoInfo.id}/${repo.files.logoLight.name}'
import ${repo.repoInfo.id}LogoDark from './${repo.repoInfo.id}/${repo.files.logoDark.name}'`,
  )
  .join('\n')}

export const data = [
  ${repoResults
    .map(
      (repo) =>
        `{ ...${repo.repoInfo.id}, Logo: { Light: ${repo.repoInfo.id}LogoLight, Dark: ${repo.repoInfo.id}LogoDark } }`,
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
