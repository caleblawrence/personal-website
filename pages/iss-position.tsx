import * as React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Meta from '../components/meta'
import fetch from 'unfetch'
import useSWR from 'swr'


const API_URL: string = 'http://api.open-notify.org'

async function fetcher(path: string) {
  const res = await fetch(API_URL + path)
  const json = await res.json()
  return json
}

const ISSPosition: NextPage = () => {
  const { data, error } = useSWR('/iss-now.json', fetcher, {refreshInterval: 60000 })

  return (
    <div className="wrapper">
      <Meta />
      <Head>
        <title>ISS Position</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <h1 style={{fontFamily: 'sans-serif'}}>Position of ISS</h1>

      {error && <div>failed to load</div>}

      {!data && <div>loading...</div>}

      {data && data.iss_position &&
        (
          <div>
             <p style={{fontSize: 20}}>Latitude: {data.iss_position.latitude}</p>
             <p style={{fontSize: 20}}>Longitude: {data.iss_position.longitude}</p>
          </div>
        )
      }

    </div>
  )
}

export default ISSPosition;
