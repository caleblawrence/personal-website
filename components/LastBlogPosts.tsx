import * as React from 'react'
import { BlogPost } from '../interfaces/BlogPost'
import Link from 'next/link'

type Props = {
    posts: BlogPost[]
}

const LastBlogPosts: React.FunctionComponent<Props> = ({ posts }) => {
    return (
        <div className="wrapper blog">
            <h1 className="sectionTitle">Blog.</h1>
            {posts.map(item => (
                <div key={item.title}>
                    <Link href={item.path}>
                        <a className="title">{item.title}</a>
                    </Link>
                    <div>
                        <time className="dt-published">
                            {item.publishedAt}
                        </time>
                    </div>
                    <p className="summary">{item.summary}</p>

                </div>
            ))}
            <Link href="/posts">
                <a href="" className="btn">
                    View all posts
                </a>
            </Link>
            
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
                    margin-bottom: 100px;
                }
                a {
                  text-decoration: none;
                }

                @media only screen and (max-width: 768px) {
                    .title {
                        font-size: 1.5rem;
                    }
                }

                .btn {
                    border: 1px solid black;
                    padding: 7px;
                    color: black;
                    border-radius: 3px;
                    font-family: Helvetca, Arial, sans-serif;
                    margin-top: 5px;
                    display: inline-block;
                }
            `}</style>
        </div>
    )
}

export default LastBlogPosts