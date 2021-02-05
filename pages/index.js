import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import ProjectCard from '../components/ProjectCard';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import { useState } from 'react';

export default function Home({ posts }) {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  const lastBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .slice(0, 3);
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I’m Caleb Lawrence
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I’m a husband, Christian, software developer, and coffee addict. I
          work at Signify Health as a Software Engineer.
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Recent Blog Posts
        </h3>
        {lastBlogPosts.map((post) => (
          <BlogPost
            title={post.title}
            summary={post.summary}
            slug={post.slug}
          />
        ))}
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projects
        </h3>
        <ProjectCard
          title="Quit League"
          description="A tool helps you take a break from League of Legends (a video game). It automatically checks to see if you're playing the game allows you to compete with your friends for the longest streak (days without playing)."
          href="https://quit-league-helper.vercel.app/"
          githubTitle="quit-league-helper"
        />
        <ProjectCard
          title="Oblivious"
          description="Follow a few cool people without actually being on Twitter. This tool allows you to have a custom list of people added to a feed that is free of comments, likes, trending, etc. Just the posts."
          href="https://oblivious.vercel.app/"
          githubTitle="oblivious"
        />
        {isShowingFullTimeline ? (
          <>
            <ProjectCard
              title="Salary Calculator"
              description="Simple app that converts hourly to annual salary and vice versa"
              href="http://salary-converter.vercel.app/"
              githubTitle="salary-converter"
            />
            <ProjectCard
              title="Office Random Episode"
              description="Pick a random episode from The Office to watch. Because choosing is hard sometimes."
              href="http://office-random-episode.now.sh/"
              githubTitle="random-office-episode"
            />
          </>
        ) : (
          <button
            type="button"
            className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
            onClick={() => showFullTimeline(true)}
          >
            See More
            <svg
              className="h-4 w-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        )}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}
