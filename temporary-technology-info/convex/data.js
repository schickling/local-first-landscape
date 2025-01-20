import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Id: 'convex',
  Name: 'Convex',
  Website: 'https://convex.dev',
  License: 'FSL-1.1-Apache-2.0',
  Deployment: ['Hosted', 'Self-hostable'],
  ServerSideData: {
    SchemaManagement: ['Schema definition', 'Schema Validation'],
  },
  ClientSideData: {
    OfflineReads: 'Query Cache',
    OfflineWrites: 'No Support',
    DataSize: 'local cache size up to ???mb',
  },
  SynchronizationStrategy: {
    FullOrPartialReplication: ['Partial Replication'],
    ConflictHandling: 'Optimistic concurrency control',
    WhereResolutionOccurs: 'Server',
    WhatGetsSynced: {
      ClientToServer: 'mutations',
      ServerToClient: 'query results'
    },
    Authority: 'Centralized',
  },
})
