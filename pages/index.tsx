import BlogPosts from 'components/Blog/blogPosts';
import Container from 'components/container';
import Layout from 'components/layout';
import SayHello from 'components/sayHello';
import Work from 'components/work';
import { getAllPosts } from 'lib/api';
import Head from 'next/head';
import ProjectsSummary from '../components/Projects/projectsSummary';
import Nav from 'components/nav'; 

interface Props {
  allPosts: any[];
}
export default function Index(props: Props) {
  const { allPosts } = props;

  let firstTwoPosts: any[];
  if (allPosts.length >= 2) {
    firstTwoPosts = [allPosts[0], allPosts[1]];
  } else {
    firstTwoPosts = allPosts;
  }
  return (
    <>
      <Layout>
        <Head>
          <title>Caleb Lawrence</title>
        </Head>
        <Container>
          <div className="welcome">
            <div className="centered">
              <p>
                <span className="redBackground">Caleb Lawrence</span>
              </p>
              <h1 className="mainMessage">I’m a full stack web developer.</h1>
            </div>
          </div>
          {allPosts.length > 0 && <BlogPosts posts={firstTwoPosts} />}
          <Work />
          <ProjectsSummary />
          <SayHello />
          <Nav />
        </Container>
      </Layout>
      <style jsx>
        {`
        .welcome {
          height: 100vh;
        }
        p {
          font-family: Helvetca, Arial, sans-serif;
          text-align: center;
          margin-bottom: 0;
          font-size: 16px;
          letter-spacing: 1px;
        }
        .redBackground {
          background-color: #fee1e1;
          padding: 3px;
        }
        .centered {
          position: absolute;
          top: 50%;
          left: 50%;
          margin-right: -50%;
          transform: translate(-50%, -50%);
        }
        .mainMessage {
          font-family: Georgia, serif;
          font-weight: 300;
          text-align: center;
          font-size: 2em;
          margin-top: 10px;
        }

        @media only screen and (max-width: 768px) {
          .mainMessage {
            font-size: 1.5rem;
          }
        }
        .btn {
          border: 1px solid black;
          padding: 7px;
          color: black;
          border-radius: 3px;
          font-family: Helvetca, Arial, sans-serif;
          margin-top: 5px;
          display: inline-block;
        }
      `}
      </style>
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
