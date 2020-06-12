import markdownStyles from '../markdown-styles.module.css';

interface Props {
  content: any
}
export default function PostBody(props: Props) {
  const { content } = props;

  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles.markdown}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <style jsx>
        {`
            pre {
              white-space: pre-wrap !important;       /* Since CSS 2.1 */
              white-space: -moz-pre-wrap !important;  /* Mozilla, since 1999 */
              white-space: -pre-wrap !important;      /* Opera 4-6 */
              white-space: -o-pre-wrap !important;    /* Opera 7 */
              word-wrap: break-word !important;       /* Internet Explorer 5.5+ */
            }

      `}
      </style>
    </div>
  );
}
