import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Id: 'dxos',
  Name: 'DXOS',
  Website: 'https://dxos.org',
  License: 'MIT',
  Deployment: ['Self-hosted'],
  AppTarget: {
    Platform: ['js:browser', 'js:server-side'],
    LanguageSDK: ['typescript'],
  },
  Networking: {
    Protocol: ['WebSockets'],
    Topology: 'P2P',
  },
  ServerSideData: {
    PersistenceMechanism: ['N/A'],
    DataModelParadigm: 'Document',
  },
  ClientSideData: {
    QueryAPI: ['Async', 'Signals-based Reactivity'],
    LocalRefreshLatency: '10-50ms',
    PersistenceMechanism: ['IndexedDB'],
    DataModel: 'Document',
    OfflineReads: 'Full Support',
    OfflineWrites: 'Full local conflict resolution',
    DataSize: 'up to 100mb per space',
  },
  SynchronizationStrategy: {
    FullOrPartialReplication: ['Full Replication'],
    ConflictHandling: 'Automatic via CRDT',
    WhereResolutionOccurs: 'Client',
    WhatGetsSynced: {
      ClientToClient: 'see automerge'
    },
    Authority: 'Decentralized',
  },
})
