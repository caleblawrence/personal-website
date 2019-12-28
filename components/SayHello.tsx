import * as React from 'react'

type Props = {
}

const SayHello: React.FunctionComponent<Props> = () => (
    <div className="wrapper">
        <h1 className="sectionTitle">Say Hello.</h1>
        <div className="content">
            <div className="helloBox">
                <a className="email" href="mailto:lawrence.calebc@gmail.com" target="_blank">lawrence.calebc@gmail.com</a>
                <div className="divider"></div>
                <p className="summary">I love to write code at coffee shops, train with firearms, write on my blog (sometimes), spend time with my wife Kai, and study the Bible. Please feel free to reach out to me via <a className="emailParagraph" href="mailto:lawrence.calebc@gmail.com" target="_blank">email</a>.</p>
                <p className="name">Caleb Lawrence</p>
                <p className="location">Dallas, Texas</p>

            </div>

            <div className="profilePicture">
                <img src="/me.png" className="me" alt="me" />
            </div>
        </div>
       
        <style jsx>{`
            .emailParagraph {
                text-decoration: underline;
                color: black;
            }
            .name {
                font-size: 18px;
                margin-top: 30px;
                margin-bottom: 0;
            }
            .location {
                font-size: 18px;
                padding: 0;
                margin: 0;
                margin-top: 5px;
            }
            .summary {
                font-size: 18px;
                max-width: 70%;
                line-height: 1.5;
                margin-top: 50px
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
                font-size: 3rem;
                font-family: normal 16px/1.9em "Inter", "Source Sans Pro","Helvetica Neue", Arial, sans-serif;
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
            }

            .sectionTitle {
                margin-top: 100px;
            }
            .helloBox {
                flex: 1;
                background-color: #FFEEEE;
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
                    flex: 0;
                }
            }
          
        `}</style>
    </div>
)

export default SayHello;