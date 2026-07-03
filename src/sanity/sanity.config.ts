import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'

export const sanityConfig = defineConfig({
  name: 'default',
  title: 'ShopMate CMS',

  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '7ufnlpau',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  
  basePath: '/studio',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
