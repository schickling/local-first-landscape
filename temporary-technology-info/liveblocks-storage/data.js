import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Id: 'liveblocks-storage',
  Name: 'Liveblocks Storage',
  Website: 'https://liveblocks.io',
  License: 'Proprietary',
  Deployment: ['Hosted'],
  AppTarget: {
    Platform: ['js:browser', 'js:server-side'],
    LanguageSDK: ['typescript'],
    FrameworkIntegrations: ['React', 'Zustand', 'Redux'],
  },
  Networking: {
    Protocol: ['WebSockets', 'HTTP'],
    Topology: 'Client-Server',
  },
  ServerSideData: {
    PersistenceMechanism: ['Cloudflare Durable Object Storage', 'SQLite'],
    DataModelParadigm: 'Document',
    SchemaManagement: ['Schema definition', 'Schema validation'],
    ExistingDatabaseSupport: 'Does not require a datastore, but you can migrate or automatically sync to your database with webhooks/REST API',
  },
  ClientSideData: {
    LocalRefreshLatency: '16ms',
    PersistenceMechanism: ['Liveblocks Storage'],
    DataModel: 'Document',
    SchemaManagement: ['Schema definition'],
    OfflineReads: 'Previously accessed data is stored in-memory',
    OfflineWrites: 'Full cached writes, stored in-memory, server will resolve conflict',
    DataSize: 'limited by device capabilities',
  },
  SynchronizationStrategy: {
    ConflictHandling: 'Custom: values: LWW, LiveObject: LWW at attribute level, LiveMap: LWW at entry level, LiveList: fractional indexing (for insertions) or LWW (for replacements)',
    WhereResolutionOccurs: 'Server',
    WhatGetsSynced: {
      ClientToServer: 'ops',
      ServerToClient: 'ops, acks, and fix-ops (when conflict was resolved)'
    },
    Authority: 'Centralized',
  },
  AuthIdentity: {
    Encryption: 'transport-level (wss:// or https://)',
    AuthenticationMethod: ['JWT tokens', 'Public key'],
    AuthorizationPermissions: 'ID tokens and Access tokens',
  },
  UIRelated: {
    Components: ['Comments/Threads', 'Notifications'],
  },
  DevelopmentWorkflowsDX: {
    DebuggingTools: ['DevTools', 'Dashboard', 'Data Inspector'],
    CLI: 'CLI for installing examples, updating packages, creating your typescript config',
    TypeSupport: 'Full type support (via liveblocks.config.ts)',
  },
})
