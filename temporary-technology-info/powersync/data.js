import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Id: 'powersync',
  Name: 'PowerSync',
  Website: 'https://powersync.co',
  License: 'FSL-1.1-Apache-2.0',
  Deployment: ['Self-hosted', 'Hosted'],
  AppTarget: {
    Platform: ['js:browser', 'ios', 'android', 'macos', 'wasm'],
    LanguageSDK: ['typescript', 'swift', 'kotlin', 'rust', 'dart'],
    FrameworkIntegrations: ['React', 'React Native', 'Vue', 'Svelte', 'SolidJS', 'Flutter'],
  },
  Networking: {
    Protocol: ['Client: Rust, TypeScript, Dart, Kotlin, Swift'],
    Topology: 'Client-Server',
  },
  ServerSideData: {
    PersistenceMechanism: ['Postgres', 'MongoDB', 'MySQL'],
    DataModelParadigm: 'Relational',
    ExistingDatabaseSupport: 'Works with backend source databases: Postgres, MongoDB, MySQL',
    DataSize: 'No theoretical limit',
  },
  ClientSideData: {
    QueryAPI: ['Async', 'Signals-based Reactivity'],
    PersistenceMechanism: ['SQLite', 'IndexedDB', 'OPFS'],
    PersistenceFeatures: 'FTS, Indexes, Transactions',
    DataModel: 'Relational',
    OfflineReads: 'Full Support',
    OptimisticUpdates: 'Yes',
    OfflineWrites: 'Yes',
  },
  SynchronizationStrategy: {
    FullOrPartialReplication: ['Full Replication', 'Partial Replication'],
    ConflictHandling: 'Custom business logic',
    WhereResolutionOccurs: 'Server',
    WhatGetsSynced: {
      ServerToClient: 'ops',
      ClientToServer: 'mutations'
    },
    Authority: 'Centralized',
  },
  AuthIdentity: {
    Encryption: 'transport-level and storage-level locally on the device using SQLCipher; E2EE can also be accomplished by syncing encrypted data and decrypting on client',
    AuthenticationMethod: ['JWT Tokens'],
    AuthorizationPermissions: 'Reads: Access to data is controlled by authenticated parameters in JWT used in Sync Rules\n\nWrites: Access controlled using developer\'s own backend (through which writes go to)',
  },
  DevelopmentWorkflowsDX: {
    DebuggingTools: ['Dashboard', 'Data Inspector'],
    CLI: 'CLI for managing cloud instances of PowerSync Service',
  },
})
