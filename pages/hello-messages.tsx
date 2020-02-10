import * as React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Meta from '../components/meta'
import fetch from 'isomorphic-unfetch';
import { server } from '../config';
import { Message } from '../interfaces/Message';

type Props = {
  messages: Message[]
}

const HelloMessages: NextPage<Props> = ({messages}) => {
  return (
    <div className="wrapper">
      <Meta />
      <Head>
        <title>Hello Messages</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <h1>Hello Messages</h1>
      {messages.map(message => (
        <div key={message._id}>
          <p>{message.name}</p>
          <p>{message.email}</p>
          <p>{message.message}</p>
        </div>
      ))}
    </div>
  )
}

HelloMessages.getInitialProps = async function() {
    const res = await fetch(`${server}/api/hello`);
    const data = await res.json();
    
    return {
        messages: data
      };
  };

export default HelloMessages
