import * as React from 'react'
import { NextPage } from 'next'
// import { siteMeta } from '../blog.config'
import blogposts from '../posts/index'
import LastBlogPosts from '../components/LastBlogPosts'
import Work from '../components/Work'
import SayHello from '../components/SayHello'
import Head from 'next/head'


const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Caleb Lawrence</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="welcome">
        <div className="centered">
          <p>
            <span className="redBackground">
              Caleb Lawrence
            </span>
          </p>
          <h1 className="mainMessage">I’m a full stack web developer.</h1>
        </div>
      </div>

      <LastBlogPosts posts={blogposts} />
      <Work />
      <SayHello />


      <style jsx global>{`
        body {
          font-family: normal 16px/1.9em "Inter", "Source Sans Pro","Helvetica Neue", Arial, sans-serif;
        }
        .sectionTitle {
          font-size: 7rem;
          font-family: Helvetca, Arial, sans-serif;
          font-weight: 800;
          margin: 0;
        }
        .wrapper {
          margin-right: auto; /* 1 */
          margin-left:  auto; /* 1 */
          max-width: 1400px; /* 2 */
          padding-right: 10px; /* 3 */
          padding-left:  10px; /* 3 */
        }

        @media only screen and (max-width: 768px) {
          .sectionTitle {
            font-size: 3.5rem;
          }
      }
      `}</style>
          
      <style jsx>{`
        .welcome {
          height: 100vh;
        }
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
        .mainMessage {
          font-family: Georgia, serif;
          font-weight: 300;
        }

        @media only screen and (max-width: 768px) {
          .mainMessage {
            font-size: 1.5rem;
          }
      }
      `}</style>
    </>
  )
}

IndexPage.getInitialProps = async ({ query }) => {
  return query ? { page: query.page } : {}
}

export default IndexPage
