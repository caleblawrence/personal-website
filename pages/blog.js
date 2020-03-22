import Container from "../components/container";
import FirstTwoPosts from "../components/Blog/blogPosts";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import BlogPosts from '../components/Blog/blogPosts';

export default function Index({ allPosts }) {

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
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt"
  ]);

  return {
    props: { allPosts }
  };
}
