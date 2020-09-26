import Date from './date';
import CoverImage from './coverImage';
import PostTitle from './postTitle';

interface Props {
  title: string,
  coverImage: string,
  date: string;
}

export default function PostHeader(props: Props) {
  const { title, coverImage, date } = props;
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </>
  );
}
