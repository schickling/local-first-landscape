import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Id: 'automerge',
  Name: 'Automerge',
  Website: 'https://automerge.org',
  License: 'MIT',
  Deployment: ['Self-hosted'],
  Networking: {
    Topology: 'P2P via Relay Servers',
  },
  ServerSideData: {
    PersistenceMechanism: ['N/A'],
    DataModelParadigm: 'Document',
  },
  ClientSideData: {
    QueryAPI: ['Async'],
    PersistenceMechanism: ['IndexedDB'],
    DataModel: 'Document',
    OfflineReads: 'Full Support',
    OfflineWrites: 'Full local conflict resolution',
    DataSize: 'up to 5-10mb per doc',
  },
  SynchronizationStrategy: {
    FullOrPartialReplication: ['Full Replication'],
    ConflictHandling: 'Automatic via CRDT',
    WhereResolutionOccurs: 'Client',
    WhatGetsSynced: {
      ClientToClient: 'ops',
      ServerToClient: 'future: snapshots via relays'
    },
    Authority: 'Decentralized',
  },
})
