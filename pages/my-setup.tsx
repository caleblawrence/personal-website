/* eslint-disable import/no-unresolved */
import HomeButton from 'components/HomeButton';
import Layout from 'components/layout';

export default function MySetup() {
  return (
    <>
      <Layout>
        <HomeButton />
        <img src="/assets/desk.jpg" className="me" alt="me" />
      </Layout>
    </>
  );
}
