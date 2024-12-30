import { data as automerge } from './automerge/data.js'
import { data as electricsql } from './electricsql/data.js'
import { data as jazz } from './jazz/data.js'
import { data as zero } from './zero/data.js'
import { data as livestore } from './livestore/data.js'
import { data as basicdb } from './basicdb/data.js'
import { data as convex } from './convex/data.js'
import { data as ditto } from './ditto/data.js'
import { data as powersync } from './powersync/data.js'
import { data as triplit } from './triplit/data.js'
import { data as y_sweet } from './y-sweet/data.js'

import automergeLogoLight from './automerge/logo.light.png'
import automergeLogoDark from './automerge/logo.dark.png'
import electricsqlLogoLight from './electricsql/logo.light.png'
import electricsqlLogoDark from './electricsql/logo.dark.png'
import jazzLogoLight from './jazz/logo.light.png'
import jazzLogoDark from './jazz/logo.dark.png'
import zeroLogoLight from './zero/logo.light.svg'
import zeroLogoDark from './zero/logo.dark.svg'
import livestoreLogoLight from './livestore/logo.light.svg'
import livestoreLogoDark from './livestore/logo.dark.svg'
import basicdbLogoLight from './basicdb/logo.light.svg'
import basicdbLogoDark from './basicdb/logo.dark.svg'
import convexLogoLight from './convex/logo.light.png'
import convexLogoDark from './convex/logo.dark.png'
import dittoLogoLight from './ditto/logo.light.png'
import dittoLogoDark from './ditto/logo.dark.png'
import powersyncLogoLight from './powersync/logo.light.png'
import powersyncLogoDark from './powersync/logo.dark.png'
import triplitLogoLight from './triplit/logo.light.png'
import triplitLogoDark from './triplit/logo.dark.png'
import y_sweetLogoLight from './y-sweet/logo.light.png'
import y_sweetLogoDark from './y-sweet/logo.dark.png'

export const data = [
  { ...automerge, Logo: { Light: automergeLogoLight, Dark: automergeLogoDark } },
  { ...electricsql, Logo: { Light: electricsqlLogoLight, Dark: electricsqlLogoDark } },
  { ...jazz, Logo: { Light: jazzLogoLight, Dark: jazzLogoDark } },
  { ...zero, Logo: { Light: zeroLogoLight, Dark: zeroLogoDark } },
  { ...livestore, Logo: { Light: livestoreLogoLight, Dark: livestoreLogoDark } },
  { ...basicdb, Logo: { Light: basicdbLogoLight, Dark: basicdbLogoDark } },
  { ...convex, Logo: { Light: convexLogoLight, Dark: convexLogoDark } },
  { ...ditto, Logo: { Light: dittoLogoLight, Dark: dittoLogoDark } },
  { ...powersync, Logo: { Light: powersyncLogoLight, Dark: powersyncLogoDark } },
  { ...triplit, Logo: { Light: triplitLogoLight, Dark: triplitLogoDark } },
  { ...y_sweet, Logo: { Light: y_sweetLogoLight, Dark: y_sweetLogoDark } }
]
