import * as React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import blogposts from '../posts/index'
import LastBlogPosts from '../components/LastBlogPosts'
import Meta from '../components/meta'

const Posts: NextPage = () => {
  return (
    <div className="wrapper">
      <Meta />
      <Head>
        <title>Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <LastBlogPosts posts={blogposts} maxPostsToShow={100}/>
    </div>
  )
}

export default Posts
