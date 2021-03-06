import Image from 'next/image';
import { parseISO, format } from 'date-fns';

import Container from '../components/Container';

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Container
      title={`${frontMatter.title} – Caleb Lawrence`}
      description={frontMatter.summary}
      image={`https://caleblawrence.dev${frontMatter.image}`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8">
          <div className="flex items-center">
            <Image
              alt="Caleb Lawrence"
              height={24}
              width={24}
              src="/avatar.jpg"
              className="rounded-full"
              placeholder="blur"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              {frontMatter.by}
              {'Caleb Lawrence / '}
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
        </div>
        <div className="prose dark:prose-dark max-w-none w-full">
          {children}
        </div>
      </article>
    </Container>
  );
}
