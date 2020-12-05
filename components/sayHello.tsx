import SectionTitle from './sectionTitle';
import Image from 'next/image';

const SayHello = () => (
  <div className="mt-10">
    <SectionTitle title="Say Hello." />
    <div className="content">
      <div className="helloBox">
        <a
          className="email"
          href="mailto:lawrence.calebc@gmail.com"
          target="_blank"
          rel="noreferrer">
          lawrence.calebc@gmail.com
        </a>
        <div className="divider" />
        <p className="summary">
          I love to write code at coffee shops, train with firearms, write on my
          blog (sometimes), spend time with my wife Kai, and study the Bible.
          Please feel free to reach out to me via{' '}
          <a
            className="emailParagraph"
            href="mailto:lawrence.calebc@gmail.com"
            target="_blank"
            rel="noreferrer">
            email
          </a>
          .
        </p>
        <p className="name">Caleb Lawrence</p>
        <p className="location">Dallas, Texas</p>
      </div>

      <div
        className="profilePicture"
        style={{ display: 'block', overflow: 'hidden' }}>
        <img src="/assets/images/me.jpg" className="me" alt="me" />
      </div>
    </div>

    <style jsx>
      {`
        .emailParagraph {
          text-decoration: underline;
          color: black;
        }
        .name {
          font-size: 18px;
          margin-top: 30px;
          margin-bottom: 0;
          font-family: Helvetca, Arial, sans-serif;
        }
        .location {
          font-size: 18px;
          padding: 0;
          margin: 0;
          margin-top: 5px;
          font-family: Helvetca, Arial, sans-serif;
        }
        .summary {
          font-size: 18px;
          max-width: 70%;
          line-height: 1.5;
          margin-top: 50px;
          font-family: Helvetca, Arial, sans-serif;
        }
        .divider {
          margin-left: 0;
          transform: scaleX(1);
          display: block;
          height: 3px;
          background-color: currentColor;
          width: 60px;
          margin: 60px 0 30px;
        }

        .email {
          margin: 0;
          padding: 0;
          font-size: 2rem;
          font-family: normal 16px/1.9em 'Inter', 'Source Sans Pro',
            'Helvetica Neue', Arial, sans-serif;
          text-decoration: none;
          color: black;
          /* These are technically the same, but use both */
          overflow-wrap: break-word;
          word-wrap: break-word;
          word-break: break-word;
        }

        .email:hover {
          text-decoration: underline;
        }
        .content {
          display: flex;
          justify-content: space-between;
          margin-bottom: 40px;
        }

        .helloBox {
          flex: 1;
          background-color: #ffeeee;
          padding: 70px;
        }

        .profilePicture {
          flex: 1;
        }

        .me {
          max-width: 100%;
        }

        @media only screen and (max-width: 768px) {
          .helloBox {
            padding: 30px;
          }

          .email {
            font-size: 2rem;
          }

          .profilePicture {
            flex: 1;
          }

          .content {
            flex-direction: column;
          }
        }
      `}
    </style>
  </div>
);

export default SayHello;
