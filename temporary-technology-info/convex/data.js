import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Id: 'convex',
  Name: 'Convex',
  Website: 'https://convex.dev',
  Deployment: ['Hosted'],
  AppTarget: {
    Platform: ['js:browser'],
  },
})
