/* eslint-disable react/no-unescaped-entities */
import SectionTitle from 'components/sectionTitle';
import ProjectCard from 'components/Projects/projectCard';

export default function ProjectSummary() {
  return (
    <>
      <SectionTitle title="Projects." />
      <p style={{ fontSize: 18, fontWeight: 400, color: '#656565' }}>
        Some small apps I've made.
      </p>
       <ProjectCard
        title="Quit League Helper"
        url="https://quit-league-helper.vercel.app/"
        description="A tool helps you take a break from League of Legends (a video game). It automatically checks to see if you're playing the game allows you to compete with your friends for the longest streak (days without playing)."
        githubUrl="https://github.com/caleblawrence/quit-league-helper"
        githubTitle="quit-league-helper"
      />
      <ProjectCard
        title="Oblivious"
        url="https://oblivious.vercel.app/"
        description="Follow a few cool people without actually being on Twitter."
        githubUrl="https://github.com/caleblawrence/oblivious"
        githubTitle="oblivious"
      />
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