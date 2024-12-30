import { Array as ReadonlyArray, Effect, Option, Schema } from 'effect'
import type { RepoInfo } from './repos.js'
import { Script } from 'node:vm'

const FileResponseSuccessSchema = Schema.Struct({
  name: Schema.String,
  path: Schema.String,
  sha: Schema.String,
  size: Schema.Number,
  url: Schema.String,
  html_url: Schema.String,
  git_url: Schema.String,
  download_url: Schema.String,
  type: Schema.String,
  content: Schema.StringFromBase64,
  encoding: Schema.String,
  _links: Schema.Struct({
    self: Schema.String,
    git: Schema.String,
    html: Schema.String,
  }),
})

const FileResponseErrorSchema = Schema.Struct({
  message: Schema.String,
  documentation_url: Schema.String,
  status: Schema.String,
})

const FileResponseSchema = Schema.Union(
  FileResponseSuccessSchema,
  FileResponseErrorSchema,
)

export const fetchRepo = (repoInfo: RepoInfo) =>
  Effect.gen(function* () {
    const { owner, repo } = repoInfo
    const filesToFetch = [
      'data.js',
      'logo.light.svg',
      'logo.dark.svg',
      'logo.light.png',
      'logo.dark.png',
    ]

    const results = yield* Effect.forEach(filesToFetch, (file) =>
      Effect.gen(function* () {
        const url = `https://api.github.com/repos/${owner}/${repo}/contents/${file}`
        const response = yield* Effect.tryPromise(() =>
          fetch(url).then((response) => response.json()),
        )

        const decoded = yield* Schema.decodeUnknown(FileResponseSuccessSchema)(
          response,
        )

        return {
          name: file,
          content: decoded.content,
        }
      }).pipe(Effect.option),
    ).pipe(Effect.map((_) => ReadonlyArray.filterMap(_, (_) => _)))

    const data = results.find((_) => _.name === 'data.js')
    const logoLight = results.find((_) => _.name.includes('logo.light'))
    const logoDark = results.find((_) => _.name.includes('logo.dark'))

    if (!data || !logoLight || !logoDark) {
      return Option.none()
    }

    if ((yield* isCodeValid(data.content)) === false) {
      return Option.none()
    }

    return Option.some({ files: { data, logoLight, logoDark }, repoInfo })
  })

const isCodeValid = (code: string) =>
  Effect.gen(function* () {
    const evaluated = yield* Effect.tryPromise(() => {
      const blob = new Blob([code], { type: 'text/javascript' })
      const url = URL.createObjectURL(blob)
      return import(url).finally(() => URL.revokeObjectURL(url))
    }).pipe(Effect.either)

    if (evaluated._tag === 'Left') {
      yield* Effect.logError(
        'Failed to evaluate repository code:',
        evaluated.left,
        code,
      )

      return false
    }

    return true
  })
