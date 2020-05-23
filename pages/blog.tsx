/* eslint-disable import/no-unresolved */
import BlogPosts from 'components/Blog/blogPosts';
import Container from 'components/container';
import Layout from 'components/layout';
import { getAllPosts } from 'lib/api';
import Head from 'next/head';

interface Props {
  allPosts: any[];
}
export default function Index(props: Props) {
  const { allPosts } = props;
  return (
    <>
      <Layout>
        <Head>
          <title>Blog</title>
        </Head>
        <Container>
          {allPosts.length > 0 && <BlogPosts posts={allPosts} />}
        </Container>
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
