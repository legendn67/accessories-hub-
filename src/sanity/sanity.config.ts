import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'

export const sanityConfig = defineConfig({
  name: 'default',
  title: 'Accessories Hub CMS',

  projectId: '7ufnlpau',
  dataset: 'production',
  
  basePath: '/studio',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
