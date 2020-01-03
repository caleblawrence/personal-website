import * as React from 'react'
import { NextPage } from 'next'
import blogposts from '../posts/index'
import LastBlogPosts from '../components/LastBlogPosts'
import Work from '../components/Work'
import SayHello from '../components/SayHello'
import Meta from '../components/meta'
import Head from 'next/head'
import Link from 'next/link'




const IndexPage: NextPage = () => {
  return (
    <div className="wrapper">
      <Meta />
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

      <LastBlogPosts posts={blogposts} maxPostsToShow={4}/>

      <Link href="/posts">
          <a href="" className="btn">
              View all posts
          </a>
      </Link>
      <Work />
      <SayHello />
          
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
          text-align: center;
        }

        @media only screen and (max-width: 768px) {
          .mainMessage {
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

export default IndexPage
