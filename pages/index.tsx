import * as React from 'react'
import { NextPage } from 'next'
// import { siteMeta } from '../blog.config'
import blogposts from '../posts/index'
import LastBlogPosts from '../components/LastBlogPosts'

const IndexPage: NextPage = () => {
  return (
    <>
    <div className="welcome">
      <div className="centered">
        <p>
          <span className="redBackground">
            Caleb Lawrence
          </span>
        </p>
        <h1>I’m a full stack web developer.</h1>
      </div>
    </div>

    <LastBlogPosts posts={blogposts} />
        
      <style jsx>{`
        .welcome {
          height: 100vh;
        }
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
          position: absolute;
          top: 50%;
          left: 50%;
          margin-right: -50%;
          transform: translate(-50%, -50%) 
        }
      `}</style>
    </>
  )
}

IndexPage.getInitialProps = async ({ query }) => {
  return query ? { page: query.page } : {}
}

export default IndexPage
