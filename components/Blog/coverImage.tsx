/* eslint-disable jsx-a11y/anchor-is-valid */
import cn from 'classnames';
import Link from 'next/link';

interface Props {
  title: string,
  src: string,
  slug?: string
}

const CoverImage = (props: Props) => {
  const { title, src, slug } = props;
  const image = (
    <img
      src={src}
      alt={`${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  );
  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
