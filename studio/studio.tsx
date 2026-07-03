import React from 'react'
import ReactDOM from 'react-dom/client'
import { Studio } from 'sanity'
import { sanityConfig } from '../src/sanity/sanity.config'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Studio config={sanityConfig} />
  </React.StrictMode>,
)
