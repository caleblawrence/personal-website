interface Props {
  title: string;
  url: string;
  img?: string;
  description: string;
  githubUrl: string;
  githubTitle: string;
}
export default function ProjectCard(props: Props) {
  const {
    title, url, img, description, githubUrl, githubTitle,
  } = props;
  return (
    <>
      <div className="max-w-full rounded overflow-hidden shadow-lg mt-3 mb-3">
        {img && (
          <a href={url}>
            <img className="w-full" src={img} alt="Screenshot" />
          </a>
        )}

        <div className="px-6 py-4">
          <a href={url}>
            <div className="font-bold text-xl mb-2 hover:underline">
              {title}
            </div>
          </a>

          <p className="text-gray-700 text-base">{description}</p>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <div style={{ marginTop: 10 }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 14 14"
                aria-label="github"
                style={{ display: 'inline-block' }}>
                <path
                  d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"
                  fill="var(--geist-foreground)"
                  fillRule="nonzero"
                />
              </svg>
              <span aria-hidden="true" className="geist-spacer inline" />
              <p
                style={{ display: 'inline-block', marginLeft: 5, marginTop: 4 }}
                className="hover:underline">
                {`caleblawrence/${githubTitle}`}
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
