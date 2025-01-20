import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Id: 'jazz',
  Name: 'Jazz',
  License: 'MIT',
  Deployment: ['Self-hosted', 'Hosted'],
  AppTarget: {
    Platform: ['js:browser', 'js:server-side', 'js:server-side'],
    LanguageSDK: ['typescript'],
    FrameworkIntegrations: ['React', 'React Native', 'Vue', 'Svelte'],
  },
  Networking: {
    Protocol: ['WebSockets'],
  },
  ServerSideData: {
    PersistenceMechanism: ['SQLite', 'Custom'],
    DataModelParadigm: 'Document',
    SchemaManagement: ['Schema definition', 'Derived types', 'Schema migrations'],
    ExistingDatabaseSupport: 'manual sync to existing DBs',
    DataSize: 'Unlimited, granular load & sync',
  },
  ClientSideData: {
    QueryAPI: ['Sync', 'Signals-based Reactivity'],
    LocalRefreshLatency: '~1ms',
    PersistenceMechanism: ['IndexedDB', 'SQLite', 'Custom'],
    DataModel: 'Document',
    SchemaManagement: ['Schema definition', 'Derived types', 'Schema migrations'],
    OfflineReads: 'Full Support',
    OfflineWrites: 'Full local conflict resolution',
    DataSize: 'currently limited by RAM, soon only limited by disk',
  },
  SynchronizationStrategy: {
    FullOrPartialReplication: ['Partial Replication'],
    ConflictHandling: 'Automatic via CRDT',
    WhereResolutionOccurs: 'Client',
    WhatGetsSynced: {
      ClientToClient: 'CoValue headers, CoValue session diffs (transactions)'
    },
    Authority: 'Decentralized',
  },
  AuthIdentity: {
    Encryption: 'Built-in e2ee',
    AuthenticationMethod: ['Built-in'],
    AuthorizationPermissions: 'Built-in cryptographical hierarchical RBAC',
  },
  UIRelated: {
    RichTextEditing: 'coming soon (incl. ProseMirror/TipTap/Lexical integration)',
    Components: ['File upload', 'progressive image loading'],
  },
  DevelopmentWorkflowsDX: {
    DebuggingTools: ['Data Inspector'],
    CLI: 'CLI for running local sync & storage server, for creating worker account',
    TypeSupport: 'Full type support without extra config',
  },
})
