import * as React from 'react'

type Props = {
}

const Work: React.FunctionComponent<Props> = () => (
    <div className="wrapper">
        <h1 className="sectionTitle">Work.</h1>
        <div className="muvWork">
            <div className="workContent">
                <h1 className="companyTitle">muv</h1>
                <img src="/muv-logo.png" className="companyLogo" alt="muv logo" />
                <p className="workDescription">As a software developer at muv I worked on software design, backend, and frontend development.</p>
            </div>  
        </div>
        <div className="twoColumn">
            <div className="atosWork">
                <div className="workContent">
                    <h1 className="companyTitle">Atos</h1>
                    <img src="/atos-logo.png" className="companyLogo" alt="muv logo" />
                    <p className="workDescription">I worked with Atos for my senior design project in college. My team built a custom survey application that Atos uses to determine the needs of potential clients.</p>
                </div>  
            </div>
            <div className="developingSolutionsWork">
                <div className="workContent">
                    <h1 className="companyTitle">Developing Solutions</h1>
                    <img src="/developing-solutions-logo.png" className="companyLogo" alt="muv logo" />
                    <p className="workDescription">I interned at Developing Solutions for a couple years while in school and worked on multiple in-house web applications.</p>
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
                background-color: #00659E;
                height: 450px;
                flex: 1;
            }
            .developingSolutionsWork {
                color: white;
                background-color: #2A2C2E;
                height: 450px;
                flex: 1;
            }
            .muvWork {
                color: white;
                background-color: #E58A4B;
                height: 400px;
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