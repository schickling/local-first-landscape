import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Id: 'electricsql',
  Name: 'ElectricSQL',
  Website: 'https://electric-sql.com',
  License: 'Apache 2',
  Deployment: ['Self-hosted'],
  AppTarget: {
    Platform: ['js:browser', 'js:server-side'],
  },
  ServerSideData: {
    PersistenceMechanism: ['Postgres'],
    DataModelParadigm: 'Relational',
  },
  ClientSideData: {
    PersistenceMechanism: ['IndexedDB', 'PGLite via OPFS'],
    DataModel: 'Relational',
    OfflineReads: 'Full Support',
    DataSize: '10-100mb depending on storage chosen',
  },
  SynchronizationStrategy: {
    FullOrPartialReplication: ['Partial Replication'],
    ConflictHandling: 'No Support',
    WhereResolutionOccurs: 'Server',
    WhatGetsSynced: {
      ServerToClient: 'shape updates'
    },
    Authority: 'Centralized',
  },
})
