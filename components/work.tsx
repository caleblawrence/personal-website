import * as React from 'react';
import SectionTitle from './sectionTitle';

const Work = () => (
  <div className="mt-10 mb-10">
    <SectionTitle title="Work." />

    <div className="twoColumn">
      <div className="signifyWork">
        <div className="signifyColorOverlay">
          <div className="workContent">
            <h1 className="companyTitle">Signify Health</h1>
            <img
              src="/assets/images/signify-health-logo.png"
              className="companyLogo"
              alt="signify logo"
            />
            <p className="workDescription">
              At Signify I'm learning how to build microservices using .NET
              Core and Kafka.
            </p>
          </div>
        </div>
      </div>
      <div className="muvWork">
        <div className="muvColorOverlay">
          <div className="workContent">
            <h1 className="companyTitle">muv</h1>
            <img
              src="/assets/images/muv-logo.png"
              className="companyLogo"
              alt="muv logo"
            />
            <p className="workDescription">
              As a software developer at muv I worked on software design,
              backend, and frontend development using Laravel and React.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="twoColumn">
      <div className="atosWork">
        <div className="atosColorOverlay">
          <div className="workContent">
            <h1 className="companyTitle">Atos</h1>
            <img
              src="/assets/images/atos-logo.png"
              className="companyLogo"
              alt="muv logo"
            />
            <p className="workDescription">
              I worked with Atos for my senior design project in college. My
              team built a custom survey application that Atos uses to determine
              the needs of potential clients.
            </p>
          </div>
        </div>
      </div>
      <div className="developingSolutionsWork">
        <div className="developingSolutionsColorOverlay">
          <div className="workContent">
            <h1 className="companyTitle">Developing Solutions</h1>
            <img
              src="/assets/images/developing-solutions-logo.png"
              className="companyLogo"
              alt="muv logo"
            />
            <p className="workDescription">
              I interned at Developing Solutions for a couple years while in
              school and built multiple in-house web applications using Django, Node.js, and React.
            </p>
          </div>
        </div>
      </div>
    </div>

    <style jsx>
      {`
            .twoColumn {
                display: flex;
                justify-content: space-between; 
                flex-direction: row;
            }
            .atosWork {
                color: white;
                background-image: url(/assets/images/atos-banner.jpg);
                background-size:cover;
                background-repeat:no-repeat;
                flex: 1;
            }
            .atosColorOverlay {
                background-color: rgba(0,101,158, 0.925);
                height: 100%;
            }
            .developingSolutionsColorOverlay {
                background-color: rgba(42,44,46, 0.925);
                height: 100%;
            }
            .developingSolutionsWork {
                color: white;
                background-image: url(/assets/images/developing-solutions-banner.jpg);
                background-size:cover;
                background-repeat:no-repeat;                
                flex: 1;
            }
            .muvColorOverlay {
                background-color: rgba(42,44,46, 0.8);
                height: 100%;
            }
            .muvWork {
                color: white;
                background-image: url(/assets/images/muv-banner.jpg);
                background-size:cover;
                background-repeat:no-repeat;
                flex: 1;
            }

            .signifyColorOverlay {
                background-color: rgba(71,129,137, 0.8);
                height: 100%;
            }

             .signifyWork {
                color: white;
                background-image: url(/assets/images/signify-banner.jpg);
                background-size:cover;
                background-repeat:no-repeat;
                flex: 1;
            }
            .companyTitle {
                text-align: center;
                font-size: 3rem;
                font-family: Helvetca, Arial, sans-serif;
                margin-bottom: 10px;
                margin-top: 10px;
            }
            .companyLogo {
                height: 90px;
                width: 90px;
                display: block;
                margin-left: auto;
                margin-right: auto;
            }
            .workDescription {
                color: white;
                text-align: center;
                margin: 0 auto 15px;
                font-family: Helvetca, Arial, sans-serif;
                font-size: 1.2em;
                margin-top: 15px;
                max-width: 500px;
                line-height: 25px;
            }
            .workContent {
                padding: 20px;
            }

            @media only screen and (max-width: 768px) {
                /* For mobile phones: */

                .workDescription {
                   1.2em;
                }
                .twoColumn {
                    flex-direction: column;
                }
                .workContent {
                    padding: 10px;
                }

                .companyTitle {
                    margin-top: 5px;
                    font-size: 2rem;
                }

                .companyLogo {
                    height: 60px;
                    width: 60px;
                    display: block;
                }
            }
        `}
    </style>
  </div>
);

export default Work;
