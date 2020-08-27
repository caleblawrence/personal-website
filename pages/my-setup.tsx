import HomeButton from 'components/HomeButton';
import Layout from 'components/layout';
import Head from 'next/head';
import Container from 'components/container';

export default function MySetup() {
  return (
    <>
      <Layout>
        <Head>
          <title>Uses</title>
        </Head>
        <Container>
          <HomeButton />
          <img src="/assets/desk.jpg" className="me" alt="me" style={{maxHeight: 1000}} />
        </Container>
      </Layout>
    </>
  );
}
