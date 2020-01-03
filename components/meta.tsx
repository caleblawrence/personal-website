import * as React from 'react'

type Props = {
}

const Meta:  React.FunctionComponent<Props> = () => {
  return (
      <style jsx global>{`
        body {
          font-family: normal 16px/1.9em "Inter", "Source Sans Pro","Helvetica Neue", Arial, sans-serif;
        }
        a {
          text-decoration: none;
        }
        .sectionTitle {
          font-size: 7rem;
          font-family: Helvetca, Arial, sans-serif;
          font-weight: 800;
          margin: 0;
          margin-top: 50px;
        }
        .wrapper {
          margin-right: auto; /* 1 */
          margin-left:  auto; /* 1 */
          max-width: 1400px; /* 2 */
          padding-right: 10px; /* 3 */
          padding-left:  10px; /* 3 */
        }

        @media only screen and (max-width: 768px) {
          .sectionTitle {
            font-size: 3.5rem;
          }
      }

      code {
        color: white !important;
      }
      `}</style>
  )
}


export default Meta;
