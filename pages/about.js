import Image from 'next/image';
import Container from '../components/Container';
import me from '../public/me.jpeg';

export default function About() {
  return (
    <Container title="About – Caleb Lawrence">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400 centerImage">
          <div className="centerImage">
            <Image
              alt={`Me`}
              src={me}
              width={550}
              height={500}
              placeholder="blur"
            />
          </div>
          <p>
            I’m a husband, Christian, software developer, and coffee addict. I
            work at Signify Health as a Software Engineer.
          </p>
          <p>
            I think it would be cool to be a solutions architect someday - as
            long as I could continue writing code.
          </p>
          <p>
            I grew up in Dallas, Texas, and went to school at the Univerity of
            Texas at Dallas, graduating with a degree in Computer Science. I
            spend my free time with my wife, studying the Bible, writing code,
            shooting guns, and sometimes writing.
          </p>
        </div>
      </div>
    </Container>
  );
}
