import * as React from 'react'
import { NextPage } from 'next'
// import { siteMeta } from '../blog.config'
import blogposts from '../posts/index'



const IndexPage: NextPage = () => {
  return (
    <div className="centered">
      <p>
        <span className="redBackground">
          Caleb Lawrence
        </span>
      </p>
      <h1>I’m a full stack web developer.</h1>
      {blogposts
        .map((post: any) => (
          <p>{post.title}</p>
        ))}
      <style jsx>{`
        h1 {
          font-family: Georgia, serif;
          font-size: 2.3em;
          font-weight: 400;
          margin-top: 10px;
        },
        p {
          font-family: Helvetca, Arial, sans-serif;
          text-align: center;
          margin-bottom: 0;
          font-size: 16px;
          letter-spacing: 1px;
        }
        .redBackground {
          background-color: #FEE1E1;
          padding: 3px;
        }
        .centered {
            position: fixed;
            top: 50%;
            left: 50%;
            /* bring your own prefixes */
            transform: translate(-50%, -50%);
        }
      `}</style>
    </div>
  )
}

IndexPage.getInitialProps = async ({ query }) => {
  return query ? { page: query.page } : {}
}

export default IndexPage
