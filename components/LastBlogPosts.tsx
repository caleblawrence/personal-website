import * as React from 'react'
import { BlogPost } from '../interfaces/BlogPost'


type Props = {
  posts: BlogPost[]
}

const LastBlogPosts: React.FunctionComponent<Props> = ({ posts }) => (
    <div className="wrapper">
        <h1 className="sectionTitle">Blog.</h1>
        {posts.map(item => (
            <>
                <p className="title">{item.title}</p>
                <p className="publishedAt">{item.publishedAt}</p>
                <p className="summary">{item.summary}</p>

            </>
        ))}
        <style jsx>{`
            h1 {
                margin-top: -80px;
            }
            .title {
                color: #DB7575;
                font-size: 2rem;
                font-weight: 800;
                font-family: Helvetca, Arial, sans-serif;
                margin-bottom: 0;
                margin-top: 30px;
            }
            .publishedAt {
                font-size: 1rem;
                margin-top: 0;
                margin-bottom: 5px;
            }
            .summary {
                margin-top: 5px;
                font-size: 1.2rem;
            }
        `}</style>
    </div>
)

export default LastBlogPosts