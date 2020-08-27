/* eslint-disable react/jsx-one-expression-per-line */
import Container from 'components/container';
import Layout from 'components/layout';
import Head from 'next/head';
import HomeButton from '../components/HomeButton';
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
          <h2
            className="mb-0 text-6xl md:text-7xl font-bold tracking-tighter leading-tight"
            style={{ fontFamily: 'Helvetca, Arial, sans-serif' }}>
            Uses
          </h2>

          <h2
            className="mb-0 text-6xl md:text-4xl font-bold tracking-tighter leading-tight"
            style={{ fontFamily: 'Helvetca, Arial, sans-serif' }}>
            Editor + Terminal
          </h2>
          <ul>
            <li>
              <a href="https://code.visualstudio.com/">Visual Studio Code</a> is
              mostly what I use for most things.
            </li>
            <li>
              <a href="https://www.jetbrains.com/rider/">Jetbrains Rider</a> is
              great if you're doing .NET Core projects.
            </li>
            <li>
              I'm currently using{' '}
              <a href="https://github.com/tonsky/FiraCode">Fira Code</a> for my
              font. It's pretty nice (and free).
            </li>
            <li>
              I use <a href="https://www.iterm2.com/">iTerm2</a> For my terminal. The "Minimal" theme makes it look great.
            </li>
          </ul>
        </Container>
      </Layout>
    </>
  );
}
