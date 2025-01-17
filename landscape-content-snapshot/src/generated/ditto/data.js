import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Id: 'ditto',
  Name: 'Ditto',
  Description:
    'Real-time, peer-to-peer data synchronization across devices and platforms without relying on the cloud, even in offline or unreliable network conditions.',
  Website: 'https://ditto.live',
  Deployment: 'Self-hosted',
  License: 'MIT',
  AppTarget: {
    LanguageSDK: [
      'javascript',
      'swift',
      'kotlin',
      'c#',
      'c++',
      'java',
    ],
    Platform: ['js:browser', 'js:server-side', 'ios', 'android', 'macos', 'wasm'],
    FrameworkIntegrations: ['React Native', 'Jetpack Compose', 'SwiftUI', 'Flutter'],
  },
  Networking: {
    Protocol: ['WebSockets', 'HTTP', 'WiFi LAN', 'Bluetooth', 'P2P WiFi', 'TCP'],
    Topology: 'P2P',
  },
  ServerSideData: {
    PersistenceMechanism: 'Custom',
    DataModelParadigm: 'Document',
    ExistingDatabaseSupport: 'HTTP/Webhooks and real-time via CDC Connectors (Kafka-based)',
  },
  ClientSideData: {
    QueryAPI: 'Async',
    LocalRefreshLatency: '~10-100ms',
    PersistenceMechanism: 'SQLite',
    DataModel: 'Relational',
    OfflineReads: 'Full Support',
    OfflineWrites: 'Local conflict resolution',
    DataSize: 'up to the size of the hard drive',
  },
  SynchronizationStrategy: {
    FullOrPartialReplication: ['Full Replication', 'Partial Replication'],
    ConflictHandling: 'Automatic via CRDT',
    WhereResolutionOccurs: 'Client',
    WhatGetsSynced: {
      ClientToClient: 'Deltas',
    },
    Authority: 'Decentralized',
  },
  AuthIdentity: {
    Encryption: 'Yes',
    AuthenticationMethod: 'Tokens',
    AuthorizationPermissions: 'ACLs',
  },
  UIRelated: {
    RichTextEditing: 'No',
    Components: ['Presence'],
  },
  DevelopmentWorkflowsDX: {
    DebuggingTools: 'Yes',
    CLI: 'No',
    TypeSupport: 'No',
  },
})
