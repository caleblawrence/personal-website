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
        <div className="atosWork">
            <div className="workContent">
                <h1 className="companyTitle">Atos</h1>
                <img src="/atos-logo.png" className="companyLogo" alt="muv logo" />
                <p className="workDescription">I worked with Atos for my senior design project. My team built a custom survey application that Atos uses to survey the needs of potential clients.</p>
            </div>  
        </div>
        <div className="developingSolutionsWork">
            <div className="workContent">
                <h1 className="companyTitle">Developing Solutions</h1>
                <img src="/developing-solutions-logo.png" className="companyLogo" alt="muv logo" />
                <p className="workDescription">I interned at Developing solutions for a couple years while in school and worked on multiple in house web applications.</p>
            </div>  
        </div>
        <style jsx>{`
            .atosWork {
                color: white;
                background-color: #00659E;
                height: 28em;
                width: 50%;
                float: left;
            }
            .developingSolutionsWork {
                color: white;
                background-color: #2A2C2E;
                height: 28em;
                width: 50%;
                float: left;
            }
            .muvWork {
                color: white;
                background-color: #E58A4B;
                height: 28em;
            }
            .companyTitle {
                text-align: center;
                font-size: 3rem;
                font-family: Helvetca, Arial, sans-serif;
                margin-bottom: 15px;
            }
            .companyLogo {
                height: 100px;
                width: 100px;
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
        `}</style>
    </div>
)

export default Work;