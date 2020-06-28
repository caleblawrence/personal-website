/* eslint-disable react/no-unescaped-entities */
import SectionTitle from 'components/sectionTitle';
import ProjectCard from 'components/Projects/ProjectCard';

export default function ProjectSummary() {
  return (
    <>
      <SectionTitle title="Projects." />
      <p style={{ fontSize: 18, fontWeight: 400, color: '#656565' }}>
        Some small apps I've made.
      </p>

      <ProjectCard
        title="Salary Calculator"
        url="http://salary-converter.vercel.app/"
        description="Simple app that converts hourly to annual salary and vice versa"
        githubUrl="https://github.com/caleblawrence/salary-converter"
        githubTitle="salary-converter"
      />
      <ProjectCard
        title="Office Random Episode"
        url="http://office-random-episode.now.sh/"
        description="Pick a random episode from The Office to watch. Because choosing is hard sometimes."
        githubUrl="https://github.com/caleblawrence/random-office-episode"
        githubTitle="random-office-episode"
      />
    </>
  );
}
