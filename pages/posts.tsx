import * as React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'


const Posts: NextPage = () => {
  return (
    <>
      <Head>
        <title>Caleb Lawrence</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      

      <h1>Blog posts</h1>
      <style jsx global>{`
       
      `}</style>
    </>
  )
}

Posts.getInitialProps = async ({ query }) => {
  return query ? { page: query.page } : {}
}

export default Posts
