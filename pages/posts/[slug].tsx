import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import PostBody from '../../components/Blog/postBody'
import PostHeader from '../../components/Blog/postHeader'
import PostTitle from '../../components/Blog/postTitle'
import Container from '../../components/container'
import Layout from '../../components/layout'
import { getAllPosts, getPostBySlug } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
            <>
              <article className="mb-32">
                <Head>
                  <title>
                    {post.title}
                  </title>
                  <meta property="og:image" content={post.ogImage.url} />
                </Head>
                <h3 style={{ color: "#f99292", marginTop: 25, fontSize: 20, fontWeight: 900 }}
                >
                  <a
                    href="/"
                    style={{boxShadow: "none", textDecoration: "none"}}
                  >
                    Caleb Lawrence
              </a>
                </h3>

                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                />
                <PostBody content={post.content} />
              </article>
            </>
          )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map(posts => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}
