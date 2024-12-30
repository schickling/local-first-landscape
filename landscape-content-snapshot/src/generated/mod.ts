import { data as livestore } from './livestore/data.js'
import { data as jazz } from './jazz/data.js'

import livestoreLogoLight from './livestore/logo.light.svg'
import livestoreLogoDark from './livestore/logo.dark.svg'
import jazzLogoLight from './jazz/logo.light.svg'
import jazzLogoDark from './jazz/logo.dark.svg'

export const data = [
  { ...livestore, Logo: { Light: livestoreLogoLight, Dark: livestoreLogoDark } },
  { ...jazz, Logo: { Light: jazzLogoLight, Dark: jazzLogoDark } }
]
