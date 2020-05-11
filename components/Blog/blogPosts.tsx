import HomeButton from "../HomeButton";
import SectionTitle from "../sectionTitle";
import PostPreview from "./postPreview";

export default function BlogPosts({ posts }) {
  return (
    <section>
      {posts.length !== 2 &&
        <HomeButton />
      }

      <SectionTitle title={"Blog."} />
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-8">
        {posts.map(post => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
      {posts.length === 2 && (
        <a
          href="/blog"
          className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
        >
          View all posts
        </a>
      )}
    </section>
  );
}
