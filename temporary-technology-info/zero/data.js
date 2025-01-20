import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Id: 'zero',
  Name: 'Zero',
  Website: 'https://getzero.dev',
  License: 'TBD',
  Deployment: ['Self-hosted'],
  AppTarget: {
    Platform: ['js:browser', 'js:server-side'],
    FrameworkIntegrations: ['React Native'],
  },
  Networking: {
    Protocol: ['WebSocket', 'HTTP'],
    Topology: 'Client-Server',
  },
  ServerSideData: {
    PersistenceMechanism: ['Postgres'],
    DataModelParadigm: 'Relational',
    SchemaManagement: ['Zero has built-in support for migrating schemas seamlessly across client and server'],
    ExistingDatabaseSupport: 'Yes',
  },
  ClientSideData: {
    QueryAPI: ['Reactive relational queries'],
    LocalRefreshLatency: '<1ms',
    PersistenceMechanism: ['IndexedDB'],
    DataModel: 'Relational',
    OfflineReads: 'Developers choose data to be cached via query. Data is available to be queried while offline (even with novel queries)',
    OptimisticUpdates: 'Optimistic updates',
    OfflineWrites: 'No offline writes',
    DataSize: '25MB',
  },
  SynchronizationStrategy: {
    FullOrPartialReplication: ['Partial Replication'],
    ConflictHandling: 'Automatic via either keywise lww or server reconciliation',
    WhereResolutionOccurs: 'Server',
    WhatGetsSynced: {
      ClientToServer: 'mutations',
      ServerToClient: 'query results'
    },
    Authority: 'Centralized',
  },
})
