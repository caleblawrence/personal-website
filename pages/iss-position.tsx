/* eslint-disable import/no-unresolved */
import HomeButton from 'components/HomeButton';
import Layout from 'components/layout';
import Meta from 'components/meta';
import Head from 'next/head';
import * as React from 'react';
import useSWR from 'swr';

const API_URL = 'https://api.wheretheiss.at';

async function fetcher(path) {
  const res = await fetch(API_URL + path);
  const json = await res.json();
  return json;
}

const ISSPosition = () => {
  const { data, error } = useSWR('/v1/satellites/25544', fetcher, { refreshInterval: 60000 });

  return (
    <Layout>
      <Meta />
      <Head>
        <title>ISS Position</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <HomeButton />

      <h1 style={{ fontFamily: 'sans-serif' }}>Position of ISS</h1>

      {error && <div>failed to load</div>}

      {!data && <div>loading...</div>}

      {data
        && (
          <div>
            <p style={{ fontSize: 20 }}>
              Latitude:
              {data.latitude}
            </p>
            <p style={{ fontSize: 20 }}>
              Longitude:
              {data.longitude}
            </p>
            <p style={{ fontSize: 20 }}>
              Altitude:
              {data.altitude}
            </p>
            <p style={{ fontSize: 20 }}>
              velocity:
              {data.velocity}
            </p>
          </div>
        )}
    </Layout>
  );
};

export default ISSPosition;
