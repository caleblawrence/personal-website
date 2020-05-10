import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

export default function SectionTitle({title}) {
  return (
    <h2 className="mb-0 text-6xl md:text-8xl font-bold tracking-tighter leading-tight">
    {title}
    </h2>
  )
}