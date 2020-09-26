import Container from 'components/container';
import Layout from 'components/layout';
import Head from 'next/head';
import HomeButton from 'components/homeButton';
import SectionTitle from 'components/sectionTitle';
import ProjectCard from 'components/Projects/projectCard';

export default function Projects() {
  return (
    <>
      <Layout>
        <Head>
          <title>Projects</title>
        </Head>
        <Container>
          <HomeButton />
          <SectionTitle title="Projects." />
          <ProjectCard
            title="Salary Calculator"
            url="http://salary-converter.vercel.app/"
            img="/assets/projects/salary-converter.jpg"
            description="Simple app that converts hourly to annual salary and vice versa"
            githubUrl="https://github.com/caleblawrence/salary-converter"
            githubTitle="salary-converter"
          />
          <ProjectCard
            title="Office Random Episode"
            url="http://office-random-episode.now.sh/"
            img="/assets/projects/random-office-episode.jpg"
            description="Pick a random episode from The Office to watch. Because choosing is hard sometimes."
            githubUrl="https://github.com/caleblawrence/random-office-episode"
            githubTitle="random-office-episode"
          />
        </Container>
      </Layout>
    </>
  );
}
