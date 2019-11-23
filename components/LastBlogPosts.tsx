import * as React from 'react'
import { BlogPost } from '../interfaces/BlogPost'
import Link from 'next/link'

type Props = {
  posts: BlogPost[]
}

const LastBlogPosts: React.FunctionComponent<Props> = ({ posts }) => 
{
    return (
        <div className="wrapper blog">
            <h1 className="sectionTitle">Blog.</h1>
            {posts.map(item => (
                <div key={item.title}>
                    <Link href={item.path}>
                      <a className="title">{item.title}</a>
                    </Link>
                    <p className="publishedAt">{item.publishedAt}</p>
                    <p className="summary">{item.summary}</p>

                </div>
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

                .blog {
                    height: 100vh;
                }
                a {
                  text-decoration: none;
                }
            `}</style>
        </div>
    )
}

export default LastBlogPosts