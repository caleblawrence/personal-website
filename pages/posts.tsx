import * as React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import blogposts from '../posts/index'
import LastBlogPosts from '../components/LastBlogPosts'


const Posts: NextPage = () => {
  return (
    <div className="wrapper center">

      <Head>
        <title>Caleb Lawrence</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      

      <LastBlogPosts posts={blogposts} maxPostsToShow={100}/>

      <style jsx global>{`
         .wrapper {
          margin-right: auto; /* 1 */
          margin-left:  auto; /* 1 */
          max-width: 1400px; /* 2 */
          padding-right: 10px; /* 3 */
          padding-left:  10px; /* 3 */
        }

        .center {
        }
      `}</style>
    </div>
  )
}

Posts.getInitialProps = async ({ query }) => {
  return query ? { page: query.page } : {}
}

export default Posts
