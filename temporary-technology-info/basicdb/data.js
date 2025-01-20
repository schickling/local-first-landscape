import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Id: 'basicdb',
  Name: 'BasicDB',
  Website: 'https://basic.tech',
  Deployment: ['Self-hosted'],
  AppTarget: {
    Platform: ['js:browser'],
  },
})
