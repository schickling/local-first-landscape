import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Id: 'y-sweet',
  Name: 'Y-Sweet',
  Website: 'https://y-sweet.dev',
  License: 'MIT',
  Deployment: ['Self-hosted', 'Hosted'],
  AppTarget: {
    Platform: ['js:browser', 'js:server-side'],
    LanguageSDK: ['typescript', 'python'],
    FrameworkIntegrations: ['React'],
  },
  Networking: {
    Protocol: ['WebSocket', 'HTTP'],
    Topology: 'Client-Server',
  },
  ServerSideData: {
    PersistenceMechanism: ['S3-compatible object store'],
    DataModelParadigm: 'Document',
    ExistingDatabaseSupport: 'Yes, in the "Figma architecture" sense: ground-truth document data only lives on S3, but document metadata exists in your existing DB',
  },
  ClientSideData: {
    LocalRefreshLatency: '<1 ms',
    PersistenceMechanism: ['Yes'],
    DataModel: 'Document',
    OfflineReads: 'Yes',
    OptimisticUpdates: 'Yes',
    OfflineWrites: 'Yes',
  },
  SynchronizationStrategy: {
    ConflictHandling: 'CRDT (YATA)',
    WhereResolutionOccurs: 'Server',
    WhatGetsSynced: {
      ClientToServer: 'mutations'
    },
    Authority: 'Centralized',
  },
  AuthIdentity: {
    Encryption: 'Subject to the underlying object store used; most encrypt at rest by default; AES-GCM encryption on the client',
    AuthenticationMethod: ['Auth delegation from your application server based on temporary tokens'],
  },
  UIRelated: {
    Components: ['Yes\nAnything compatible with Yjs (Slate, BlockNote, Quill, Lexical, etc.)'],
  },
})