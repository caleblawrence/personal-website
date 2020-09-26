/* eslint-disable react/jsx-one-expression-per-line */
import Container from 'components/container';
import Layout from 'components/layout';
import Head from 'next/head';
import HomeButton from '../components/homeButton';
import SectionTitle from '../components/sectionTitle';

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Uses</title>
        </Head>
        <Container>
          <HomeButton />
          <h1
            className="mb-0 text-6xl md:text-7xl font-bold tracking-tighter leading-tight"
            style={{ fontFamily: 'Helvetca, Arial, sans-serif' }}>
            Uses
          </h1>
          <img
            src="/assets/desk.webp"
            className="me"
            alt="me"
            style={{ maxHeight: 600 }}
          />

          <br/>
          
          <p>
            All tools below are free to use unless I mention otherwise (at least
            the basic tier is - which is all I have needed).
          </p>
          <h2
            className="mb-0 mt-4 text-4xl md:text-3xl font-bold tracking-tighter leading-tight"
            style={{ fontFamily: 'Helvetca, Arial, sans-serif' }}>
            Editor + Terminal
          </h2>
          <ul style={{ marginLeft: 30 }}>
            <li>
              <a href="https://code.visualstudio.com/insiders/">
                Visual Studio Code Insiders
              </a>{' '}
              is what I use basic text editing and UI development.
            </li>
            <li>
              <a href="https://www.jetbrains.com/rider/">Jetbrains Rider</a> is
              great if you're doing .NET Core projects.
            </li>
            <li>
              I'm currently using{' '}
              <a href="https://github.com/tonsky/FiraCode">Fira Code</a> for my
              font. It's pretty nice.
            </li>
            <li>
              I use <a href="https://www.iterm2.com/">iTerm2</a> for my
              terminal. The "Minimal" theme makes it look great. I've used Hyper
              before too but it seems to use a lot of memory.
            </li>
          </ul>

          <h2
            className="mb-0 mt-4 text-4xl md:text-3xl font-bold tracking-tighter leading-tight"
            style={{ fontFamily: 'Helvetca, Arial, sans-serif' }}>
            Other Desktop Apps
          </h2>
          <ul style={{ marginLeft: 30 }}>
            <li>
              <a href="https://www.google.com/chrome/canary/">
                Google Chrome Canary
              </a>{' '}
              is my browser of choice. It's just the nighly build of Google
              Chrome.
            </li>
            <li>
              <a href="https://www.notion.so">Notion</a> is is great for
              notetaking, task management, wikis, etc. It's basically a "second
              brain". Previously I used Evernote but Notion is way better and
              they crank out new features like crazy. One of my favorite things
              about it is the code block support (with syntax highlighting).
            </li>
            <li>
              <a href="https://www.spotify.com/us/">Spotify</a> is what I use
              for music.
            </li>
            <li>
              <a href="https://www.gitkraken.com/">GitKraken</a> is a fantastic
              tool for Git. It lets you easily see what you've changed and do
              anything Git related. It also looks great.
            </li>
            <li>
              <a href="https://todoist.com/">Todoist</a> is awesome for tracking
              to-dos.
            </li>
            <li>
              <a href="https://www.postman.com/">Postman</a> is what I use for
              making requests to local API's when doing backend work. I've heard
              there are other (maybe better) tools for this but I haven't gotten
              around to switching yet.
            </li>
            <li>
              <a href="https://tableplus.com/">TablePlus</a> is one of my
              favorite applications ever (it's NOT free). Basically it lets you
              add databases and quickly view and query against them. It works
              with everything so you don't need to use/learn multiple tools for
              different databases. Please check out the trial they offer because
              you'll be impressed.
            </li>
          </ul>
        </Container>
      </Layout>

      <style jsx>
        {`
          a {
            color: black;
            text-decoration: underline;
          }
          @media only screen and (max-width: 768px) {
            /* For mobile phones: */
          }
        `}
      </style>
    </>
  );
}
