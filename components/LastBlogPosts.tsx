import * as React from 'react'
import { BlogPost } from '../interfaces/BlogPost'


type Props = {
  posts: BlogPost[]
}

const LastBlogPosts: React.FunctionComponent<Props> = ({ posts }) => (
    <div>
        <h1>Blog.</h1>
        {posts.map(item => (
            <>
                <p>{item.title}</p>
            </>
        ))}
        <style jsx>{`
            h1 {
                font-size: 7em;
                font-family: Helvetca, Arial, sans-serif;
                font-weight: 800;
            }
        `}</style>
    </div>
)

export default LastBlogPosts