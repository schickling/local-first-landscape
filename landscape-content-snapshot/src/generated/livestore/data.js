import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Id: 'livestore',
  Name: 'LiveStore',
  Description: 'Client-centric local-first data layer for high-performance apps',
  Website: 'https://livestore.dev',
  Deployment: 'Self-hosted',
  License: 'MIT',
  AppTarget: {
    LanguageSDK: ['typescript'],
  },
  Networking: {
    Topology: 'P2P',
  },
  ServerSideData: {
    PersistenceMechanism: 'N/A',
    DataModelParadigm: 'Document',
  },
  ClientSideData: {
    QueryAPI: 'Async',
    PersistenceMechanism: 'IndexedDB',
    PersistenceFeatures: 'Indexes',
    DataModel: 'Document',
    OfflineReads: 'Full Support',
    OfflineWrites: 'Local conflict resolution',
    DataSize: 'Up to 5-10 MB per document',
  },
  SynchronizationStrategy: {
    FullOrPartialReplication: ['Full Replication'],
    ConflictHandling: 'Automatic via CRDT',
    WhereResolutionOccurs: 'Client',
    WhatGetsSynced: {
      ClientToClient: 'Ops',
    },
  },
})
