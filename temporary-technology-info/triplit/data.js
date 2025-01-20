import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Id: 'triplit',
  Name: 'Triplit',
  Website: 'https://www.triplit.dev',
  License: 'GPL3',
  Deployment: ['Self-hosted', 'Hosted'],
  AppTarget: {
    Platform: ['js:browser', 'js:server-side', 'js:server-side'],
    LanguageSDK: ['typescript'],
    FrameworkIntegrations: ['React', 'Vue', 'Svelte', 'Angular', 'React Native'],
  },
  Networking: {
    Protocol: ['WebSockets', 'HTTP'],
    Topology: 'Client-Server',
  },
  ServerSideData: {
    PersistenceMechanism: ['IndexedDB', 'SQLite', 'LevelDB', 'RocksDB'],
    DataModelParadigm: 'Document',
  },
  ClientSideData: {
    QueryAPI: ['Async', 'Signals-based Reactivity'],
    LocalRefreshLatency: '<1 ms',
    PersistenceMechanism: ['IndexedDB', 'SQLite', 'LevelDB', 'RocksDB'],
    DataModel: 'Relational',
    SchemaManagement: ['Derived TypeScript types from the Schema'],
    OfflineReads: 'Subscribed queries have full db support: novel queries, counts, sums, averages, etc',
    OfflineWrites: 'Full cached writes',
    DataSize: 'limited by device capabilities',
  },
  SynchronizationStrategy: {
    FullOrPartialReplication: ['Partial Replication'],
    ConflictHandling: 'LWW at the attribute level',
    WhereResolutionOccurs: 'Server',
    WhatGetsSynced: {
      ClientToServer: 'triple writes'
    },
    Authority: 'Centralized',
  },
  AuthIdentity: {
    AuthenticationMethod: ['JWT Tokens'],
    AuthorizationPermissions: 'Custom mapping from Schema to ACL roles',
  },
})
