import { Schema } from 'effect'

const orString = <A>(_stringLitSchema: Schema.Schema<A>) =>
  Schema.String as Schema.Schema<A | (string & Record<never, never>)>

export const AppTarget = Schema.Struct({
  Platform: Schema.Literal(
    'js:browser',
    'js:server-side',
    'ios',
    'android',
    'macos',
    'wasm',
  )
    .pipe(orString, Schema.Array, Schema.optional)
    .annotations({ description: 'The platform the app is targeting' }),
  LanguageSDK: Schema.Literal(
    'typescript',
    'javascript',
    'swift',
    'kotlin',
    'c#',
    'rust',
    'java',
  )
    .pipe(orString, Schema.Array, Schema.optional)
    .annotations({
      description: 'The language(s) the app is written in',
    }),
  FrameworkIntegrations: Schema.Literal(
    'React',
    'Vue',
    'Svelte',
    'React Native',
    'Flutter',
    'SwiftUI',
  ).pipe(orString, Schema.Array, Schema.optional),
})

export const Networking = Schema.Struct({
  Protocol: Schema.Literal(
    'WebSockets',
    'HTTP',
    'SSE',
    'WiFi LAN',
    'Bluetooth',
    'P2P WiFi',
    'TCP',
    'Quic',
  )
    .pipe(orString, Schema.Array, Schema.optional)
    .annotations({
      description:
        'Supported networking protocols for synchronizing changes between clients.',
    }),
  Topology: Schema.Literal('P2P', 'P2P via Relay Servers', 'Client-Server')
    .pipe(orString, Schema.optional)
    .annotations({
      description:
        'Whether clients synchronize with each other directly or through a server.',
    }),
})

export const ServerSideData = Schema.Struct({
  PersistenceMechanism: Schema.Literal(
    'S3 (or compatible)',
    'Postgres',
    'Custom',
    'N/A',
  )
    .pipe(orString, Schema.optional)
    .annotations({
      description: '',
    }),
  DataSize: Schema.Literal(
    '100MB',
    '1GB',
    '10GB',
    '100GB',
    '1TB',
    '10TB',
    '100TB',
    '1PB',
    '10PB',
    '100PB',
  )
    .pipe(orString, Schema.optional)
    .annotations({
      description: 'The size of the data the server supports.',
    }),
  DataModelParadigm: Schema.Literal('Relational', 'Document')
    .pipe(orString, Schema.optional)
    .annotations({
      description: 'The paradigm used to interact with persisted data.',
    }),
  SchemaManagement: Schema.Literal(
    'Schema definitions',
    'Validate schemas on write',
    'Schema migrations',
  )
    .pipe(orString, Schema.optional)
    .annotations({
      description: 'Supported features for working with schemas on the server.',
    }),
  ExistingDatabaseSupport: Schema.String.pipe(Schema.optional).annotations({
    description: 'How the server integrates with existing databases.',
  }),
})

export const ClientSideData = Schema.Struct({
  QueryAPI: Schema.Literal('Async', 'Sync', 'Signals-based Reactivity')
    .pipe(orString, Schema.optional)
    .annotations({
      description: 'How the client queries the server for data.',
    }),
  LocalRefreshLatency: Schema.Literal('~1ms', '~10-100ms', '~1s', '>10s')
    .pipe(orString, Schema.optional)
    .annotations({
      description:
        'The refresh rate for local changes, ignoring network latency.',
    }),
  PersistenceMechanism: Schema.Literal(
    'Custom',
    'IndexedDB',
    'SQLite',
    'PGLite via OPFS',
    'Yjs',
    'LevelDB',
    'RocksDB',
  )
    .pipe(orString, Schema.optional)
    .annotations({
      description: 'How the client persists data.',
    }),
  PersistenceFeatures: Schema.Literal(
    'Full-text search',
    'Indexes',
    'Transactions',
  )
    .pipe(orString, Schema.optional)
    .annotations({
      description:
        'Additional features supported by the persistence mechanism.',
    }),
  DataModel: Schema.Literal('Document', 'Relational')
    .pipe(orString, Schema.optional)
    .annotations({
      description: 'The data model used by the client.',
    }),
  SchemaManagement: Schema.Literal(
    'Schema definitions',
    'Schema validation on write',
    'Schema migrations',
  )
    .pipe(orString, Schema.optional)
    .annotations({
      description: 'Supported features for working with schemas on the client.',
    }),
  OfflineReads: Schema.Literal('Full Support', 'Query Cache', 'No Support')
    .pipe(orString, Schema.optional)
    .annotations({
      description: 'Whether client can read and query data when offline.',
    }),
  OptimisticUpdates: Schema.Literal('Yes', 'No')
    .pipe(orString, Schema.optional)
    .annotations({
      description: 'Whether client optimistically updates on write.',
    }),
  OfflineWrites: Schema.Literal(
    'Local conflict resolution',
    'Cached offline writes',
    'No support',
  )
    .pipe(orString, Schema.optional)
    .annotations({
      description: 'How client handles writes when offline.',
    }),
  DataSize: Schema.String.pipe(Schema.optional).annotations({
    description: 'The size of the data the client supports.',
  }),
})

export const SynchronizationStrategy = Schema.Struct({
  FullOrPartialReplication: Schema.Literal(
    'Full Replication',
    'Partial Replication',
  )
    .pipe(orString, Schema.Array, Schema.optional)
    .annotations({
      description:
        'Whether the synchronization strategy supports full or partial replication.',
    }),
  ConflictHandling: Schema.Literal(
    'Automatic via CRDT', // TODO: Capture data types that support CRDTs
    'Rebase via mutations',
    'Server reconciliation',
    'No Support (Implicit LWW)',
    'Custom conflict resolution supported',
  )
    .pipe(orString, Schema.optional)
    .annotations({
      description: 'How the synchronization strategy handles conflicts.',
    }),
  WhereResolutionOccurs: Schema.Literal('Server', 'Client')
    .pipe(orString, Schema.optional)
    .annotations({
      description: 'Where the resolution of conflicts occurs.',
    }),
  WhatGetsSynced: Schema.Struct({
    ClientToServer: Schema.String.pipe(Schema.optional),
    ServerToClient: Schema.String.pipe(Schema.optional),
    ClientToClient: Schema.String.pipe(Schema.optional),
  })
    .pipe(Schema.optional)
    .annotations({
      description: 'What gets synced between clients and servers.',
    }),
  Authority: Schema.Literal('Decentralized', 'Centralized')
    .pipe(orString, Schema.optional)
    .annotations({
      description:
        'Whether the synchronization strategy is decentralized or centralized.',
    }),
  Latency: Schema.Literal('~1ms', '~10-100ms', '~1s', '>10s').pipe(
    orString,
    Schema.optional,
  ),
  Throughput: Schema.String.pipe(Schema.optional),
  Concurrency: Schema.String.pipe(Schema.optional),
})

export const AuthIdentity = Schema.Struct({
  Encryption: Schema.Literal('Yes', 'No')
    .pipe(orString, Schema.optional)
    .annotations({
      description: 'Is encryption performed with user keys or server keys.',
    }),
  AuthenticationMethod: Schema.Literal(
    'Tokens',
    'Built-in',
    'Full Custom',
    'JWT Tokens',
    'Public keys',
  )
    .pipe(orString, Schema.optional)
    .annotations({
      description: 'The method of authentication.',
    }),
  AuthorizationPermissions: Schema.Literal('ACLs', 'RBAC', 'Custom')
    .pipe(orString, Schema.optional)
    .annotations({
      description: 'How authorization permissions are managed.',
    }),
})

export const UIRelated = Schema.Struct({
  RichTextEditing: Schema.Literal('Yes', 'No')
    .pipe(orString, Schema.optional)
    .annotations({
      description: 'Whether the technology integrates with a rich text editor.',
    }),
  Components: Schema.String.pipe(Schema.Array, Schema.optional).annotations({
    description: 'Native components provided by the technology.',
  }),
})

export const DevelopmentWorkflowsDX = Schema.Struct({
  DebuggingTools: Schema.String.pipe(Schema.optional).annotations({
    description: 'Debugging tools for developers.',
  }),
  CLI: Schema.String.pipe(Schema.optional).annotations({
    description: 'Command line interface for developers.',
  }),
  TypeSupport: Schema.String.pipe(Schema.optional).annotations({
    description: 'Type support for developers.',
  }),
})

export const Logo = Schema.Struct({
  Light: Schema.String.pipe(Schema.optional),
  Dark: Schema.String.pipe(Schema.optional),
})

const schemaVersion = '0.0.1'

export const LandscapeSchema = Schema.Struct({
  Version: Schema.Literal(schemaVersion)
    .pipe(Schema.optionalWith({ default: () => schemaVersion }))
    .annotations({
      description: 'The version of the schema.',
    }),
  Id: Schema.String.annotations({
    description: 'The unique identifier of the technology or product.',
  }),
  Name: Schema.String.annotations({
    description: 'The name of the technology or product.',
  }),
  Description: Schema.String.pipe(Schema.optional).annotations({
    description: 'A brief description of the technology or product.',
  }),
  Logo: Logo.pipe(Schema.optional),
  Website: Schema.String.pipe(Schema.optional).annotations({
    description: 'The website of the technology or product.',
  }),
  Deployment: Schema.Literal('Self-hosted', 'Hosted')
    .pipe(orString)
    .annotations({}),
  License: Schema.Literal(
    'Proprietary',
    'MIT',
    'GPL',
    'Apache',
    'FSL-Apach 2.0',
  )
    .pipe(orString, Schema.optional)
    .annotations({}),
  AppTarget: AppTarget.pipe(Schema.optional),
  Networking: Networking.pipe(Schema.optional),
  ServerSideData: ServerSideData.pipe(Schema.optional),
  ClientSideData: ClientSideData.pipe(Schema.optional),
  SynchronizationStrategy: SynchronizationStrategy.pipe(Schema.optional),
  AuthIdentity: AuthIdentity.pipe(Schema.optional),
  UIRelated: UIRelated.pipe(Schema.optional),
  DevelopmentWorkflowsDX: DevelopmentWorkflowsDX.pipe(Schema.optional),

  UserControlDataOwnership: Schema.String.pipe(Schema.optional),
})

export type Landscape = typeof LandscapeSchema.Type
