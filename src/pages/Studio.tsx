import { Studio } from 'sanity'
import { sanityConfig } from '../sanity/sanity.config'

export default function StudioPage() {
  return (
    <div className="fixed inset-0 h-screen w-screen z-[9999] bg-white">
      <Studio config={sanityConfig} />
    </div>
  )
}
