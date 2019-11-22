import Link from 'next/link'
import { siteMeta } from '../../blog.config'

function BlogPost({ path, meta, children }) {

  return (
    <div>
      <article className="h-entry">
        <header>
          <h1 className="p-name">{meta.title}</h1>

          <div>
            {/* <PublishedAt date={meta.publishedAt} link={path} /> */}

            <Link href="/about">
              <a
                color="#aaa"
                rel="author"
                className="p-author h-card"
                href="/about"
              >
                {siteMeta.author}
              </a>
            </Link>
          </div>
        </header>
        <div className="e-content">{children}</div>
      </article>
      <style jsx>{`
        header {
          margin-bottom: 2em;
        }
        [rel='author'] {
          margin-left: 1em;
        }
        article {
          margin-bottom: 2em;
        }
        footer {
          margin-top: 2em;
        }
        .post-pagination {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
      `}</style>
    </div>
  )
}

export default BlogPost