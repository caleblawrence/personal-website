import * as React from 'react'

type Props = {
}

const Work: React.FunctionComponent<Props> = () => (
    <div className="wrapper">
        <h1 className="sectionTitle">Work.</h1>
        <div className="muvWork">
            <div className="muvColorOverlay">
                <div className="workContent">
                    <h1 className="companyTitle">muv</h1>
                    <img src="/images/muv-logo.png" className="companyLogo" alt="muv logo" />
                    <p className="workDescription">As a software developer at muv I worked on software design, backend, and frontend development.</p>
                </div>  
            </div>
            
        </div>
        <div className="twoColumn">
            <div className="atosWork">
                <div className="atosColorOverlay">
                    <div className="workContent">
                        <h1 className="companyTitle">Atos</h1>
                        <img src="/images/atos-logo.png" className="companyLogo" alt="muv logo" />
                        <p className="workDescription">I worked with Atos for my senior design project in college. My team built a custom survey application that Atos uses to determine the needs of potential clients.</p>
                    </div>  
                </div>
            </div>
            <div className="developingSolutionsWork">
                <div className="developingSolutionsColorOverlay">
                    <div className="workContent">
                        <h1 className="companyTitle">Developing Solutions</h1>
                        <img src="/images/developing-solutions-logo.png" className="companyLogo" alt="muv logo" />
                        <p className="workDescription">I interned at Developing Solutions for a couple years while in school and worked on multiple in-house web applications.</p>
                    </div>  
                </div>
            </div>
        </div>  

        <style jsx>{`
            .twoColumn {
                display: flex;
                justify-content: space-between; 
                flex-direction: row;
            }
            .atosWork {
                color: white;
                background-image: url(/images/atos-banner.png?lqip);
                background-size:cover;
                background-repeat:no-repeat;
                flex: 1;
            }
            .atosColorOverlay {
                background-color: rgba(0,101,158, 0.925);
            }
            .developingSolutionsColorOverlay {
                background-color: rgba(42,44,46, 0.925);
                height: 100%;
            }
            .developingSolutionsWork {
                color: white;
                background-image: url(/images/developing-solutions-banner.png?lqip);
                background-size:cover;
                background-repeat:no-repeat;                
                flex: 1;
            }
            .muvColorOverlay {
                background-color: rgba(42,44,46, 0.8);
            }
            .muvWork {
                color: white;
                background-image: url(/images/muv-banner.png?lqip);
                background-size:cover;
                background-repeat:no-repeat;
            }
            .companyTitle {
                text-align: center;
                font-size: 3rem;
                font-family: Helvetca, Arial, sans-serif;
                margin-bottom: 15px;
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
                margin: 0 auto 60px;
                font-family: Helvetca, Arial, sans-serif;
                font-size: 1.3em;
                margin-top: 25px;
                max-width: 500px;
                line-height: 30px;
            }
            .workContent {
                padding: 40px;
            }

            @media only screen and (max-width: 768px) {
                /* For mobile phones: */
                .twoColumn {
                    flex-direction: column;
                }
                .workContent {
                    padding: 10px;
                }

                .companyTitle {
                    margin-top: 5px;
                }
            }
        `}</style>
    </div>
)

export default Work;