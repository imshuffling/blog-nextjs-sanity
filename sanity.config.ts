/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'
import Logo from 'components/Logo'
import StudioNavbar from 'components/StudioNavbar'
import { dataset, projectId } from 'lib/sanity.api'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import author from 'schemas/author'
import blockContent from 'schemas/blockContent'
import category from 'schemas/category'
import post from 'schemas/post'
import { myTheme } from 'theme'

export default defineConfig({
  basePath: '/studio',
  title: 'next13-sanity-blog',
  projectId,
  dataset,
  schema: {
    // If you want more content types, you can add them to this array
    types: [author, post, blockContent, category],
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    }
  },
  theme: myTheme,
  plugins: [deskTool(), visionTool()],
})
