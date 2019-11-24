import SyntaxHighlightStyles from '../syntax-highlight'
import { parse, format } from 'date-fns'
import { BlogPost } from '../../interfaces/BlogPost'


type Props = {
  meta: BlogPost;
  children: string;
}

const Post: React.FunctionComponent<Props> = ({ meta, children }) => {
  return (
    <div>
      <SyntaxHighlightStyles />
      <article className="h-entry">
        <header>
          <h1 className="p-name blogTitle">{meta.title}</h1>

          <div>
            <time className="dt-published">
                {format(parse(meta.publishedAt), 'MMMM DD, YYYY')}
            </time>
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
        .e-content {
          font-family: "Inter", "Source Sans Pro","Helvetica Neue", Arial, sans-serif;
          font-size: 1.2em;
        }
      `}</style>
    </div>
  )
}

export default Post