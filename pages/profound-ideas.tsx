import BlogPosts from 'components/Blog/blogPosts';
import Container from 'components/container';
import Layout from 'components/layout';
import { getAllPosts } from 'lib/api';
import Head from 'next/head';

interface Props {
  allPosts: any[];
}
export default function ProfoundIdeas(props: Props) {
  const { allPosts } = props;
  return (
    <>
      <Layout>
        <Head>
          <title>Profound Ideas</title>
        </Head>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
}
