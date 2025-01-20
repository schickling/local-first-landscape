import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Id: 'liveblocks-yjs',
  Name: 'Liveblocks Yjs',
  Website: 'https://liveblocks.io',
  License: 'Proprietary',
  Deployment: ['Hosted'],
  AppTarget: {
    Platform: ['js:browser', 'js:server-side'],
    LanguageSDK: ['typescript'],
    FrameworkIntegrations: ['React'],
  },
  Networking: {
    Protocol: ['WebSockets', 'HTTP'],
    Topology: 'Client-Server',
  },
  ServerSideData: {
    PersistenceMechanism: ['Cloudflare Durable Object Storage', 'IndexedDB'],
    DataModelParadigm: 'Document',
  },
  ClientSideData: {
    LocalRefreshLatency: '<1ms',
    PersistenceMechanism: ['Liveblocks Yjs'],
    DataModel: 'Document',
    OfflineReads: 'In beta',
    OfflineWrites: 'In beta',
    DataSize: 'it depends on the in memory size of the yjs store and the history of the document',
  },
  SynchronizationStrategy: {
    ConflictHandling: 'Automatic via CRDT',
    WhereResolutionOccurs: 'Server',
    WhatGetsSynced: {
      ClientToServer: 'yjs encoded updates'
    },
    Authority: 'Centralized',
  },
  AuthIdentity: {
    AuthenticationMethod: ['Built-in', 'Full Custom'],
    AuthorizationPermissions: 'ID tokens and Access tokens',
  },
  UIRelated: {
    RichTextEditing: 'Liveblocks Text Editor (wrapper around Yjs with Lexical and TipTap plugins)',
    Components: ['Comments/Threads', 'Notifications', 'Y.js plugins'],
  },
  DevelopmentWorkflowsDX: {
    DebuggingTools: ['DevTools', 'Dashboard', 'Data Inspector'],
    CLI: 'CLI for installing examples, updating packages, creating your typescript config',
  },
})
