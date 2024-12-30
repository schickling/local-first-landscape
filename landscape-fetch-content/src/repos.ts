export type RepoInfo = {
  id: string
  owner: string
  repo: string
  /** @default 'main' */
  branch?: string
  /** @default '' */
  basePath?: string
}

export const repos: ReadonlyArray<RepoInfo> = [
  {
    id: 'automerge',
    owner: 'schickling',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/automerge',
  },
  {
    id: 'electricsql',
    owner: 'schickling',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/electricsql',
  },
  {
    id: 'jazz',
    owner: 'schickling',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/jazz',
  },
  {
    id: 'zero',
    owner: 'schickling',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/zero',
  },
  {
    id: 'livestore',
    owner: 'livestorejs',
    repo: 'local-first-landscape',
  },
  {
    id: 'basicdb',
    owner: 'schickling',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/basicdb',
  },
  {
    id: 'convex',
    owner: 'schickling',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/convex',
  },
  {
    id: 'ditto',
    owner: 'schickling',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/ditto',
  },
  {
    id: 'powersync',
    owner: 'schickling',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/powersync',
  },
  {
    id: 'triplit',
    owner: 'schickling',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/triplit',
  },
  {
    id: 'y-sweet',
    owner: 'schickling',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/y-sweet',
  },
]
