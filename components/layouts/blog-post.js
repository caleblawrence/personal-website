import Link from 'next/link'
import { siteMeta } from '../../blog.config'
import SyntaxHighlightStyles from '../syntax-highlight'
import PublishedAt from '../utils/published-at'


function BlogPost({ path, meta, children }) {

  return (
    <div>
      <SyntaxHighlightStyles />
      <article className="h-entry">
        <header>
          <h1 className="p-name blogTitle">{meta.title}</h1>

          <div>
            <PublishedAt date={meta.publishedAt} link={path} />
          </div>
        </header>
        <div className="e-content">{children}</div>
      </article>
      <style jsx>{`
        article {
          margin-bottom: 2em;
          margin-left: auto;
          margin-right: auto;
          max-width: 42rem;
          padding: 2.625rem 1.3125rem;
        }
        code {
          color: white !important;
        }
        .blogTitle {
          font-family: Helvetca, Arial, sans-serif;
          font-size: 3rem;
        }
      `}</style>
    </div>
  )
}

export default BlogPost