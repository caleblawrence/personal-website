import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';


const DIR = join(process.cwd(), '/pages/posts/')
const META = /export\s+const\s+meta\s+=\s+({[\s\S]*?\n})/
const files = readdirSync(DIR)
  .filter((file: string) => file.endsWith('.md') || file.endsWith('.mdx'))

module.exports = files
  .map((file, index) => {
    const name = join(DIR, file)
    const contents = readFileSync(name, 'utf-8')
    const match = META.exec(contents)

    if (!match || typeof match[1] !== 'string') {
      throw new Error(`${name} needs to export const meta = {}`)
    }

    // eslint-disable-next-line no-eval
    const meta = eval('(' + match[1] + ')')

    console.log('/posts/' + file.replace(/\.mdx?$/, ''))

    return {
      ...meta,
      path: '/posts/' + file.replace(/\.mdx?$/, ''),
      index,
    }
  })
  .filter(meta => meta.published)
  .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))