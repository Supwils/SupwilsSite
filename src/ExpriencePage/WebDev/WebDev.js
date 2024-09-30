import React from 'react';
import './WebDev.css';
const WebDev = () => {
    return (
        <div>
            <h1 className='web-dev-title'>Web Development & Projects</h1>
            
            <div className='web-dev-container'>

            <div className='web-dev-box'>
                <div className='web-dev-box-content'>
                        <img src='images/Stream1.png' alt='project1' />
                        <div className='web-dev-box-text'>
                            <h3>Stream For Yall <a href='https://github.com/Supwils/StreamForYall' target='_blank'>Github Link</a></h3>
                            <h4>Next.js, Tailwind, MySQL, Prisma, Shadcn, LiveKit, Ingress, Socket.io, Redis, OBS</h4>
                            <p>
                                &#8226; Developed a full-stack web enabling users to live stream and build fans community.
                                <br />
                                &#8226; Implemented server-side logic with Next.js and RESTful API; built frontend with React and TailwindCSS
                                <br />
                                &#8226; Integrated Prisma ORM with MySQL for database managing to ensure effective data operations systems.
                                <br />
                                &#8226; Built a streaming service with LiveKit and Ingress, and incorporated live chat using Socket.io. Utilized Redis
                                caching to store live chat data, reducing database load and response time.
                                <br />
                                &#8226; Implemented versatile features to enhance platform engagement and user retention, including fan management, push
                                notifications, and personalized user experiences.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='web-dev-box'>
                    <div className='web-dev-box-content'>
                        <img src='images/webapp1.png' alt='project1' />
                        <div className='web-dev-box-text'>
                            <h3>Social Media APP <a href='https://github.com/Supwils/hs87_final_backend' target='_blank'>Github Link</a></h3>
                            <h4>React, Node.js, Express.js, MongoDB, Bootstrap, Jest, React Testing, GoogleOauth</h4>
                            <p>
                                &#8226; Developed a full-stack social media web app, designed dynamic frontend interface using React and Bootstrap.
                                <br />
                                &#8226; Built a resilient backend server with Node.js, Express.js, leveraging RESTful API with MongoDB
                                <br />
                                &#8226; Implemented CORS settings to achieve seamless Ajax requests between separated frontend and backend systems.
                                <br />
                                &#8226; Deployed the app on Surge (frontend) and Heroku (backend), conducted component testing with Jest and React
                                Testing, achieving 90% code convergence.
                                <br />
                                &#8226; Designed an intuitive UI, enabling CRUD operations for posts, image handling, following system, and integrated third-
                                party authentication using GoogleOauth
                            </p>
                        </div>
                    </div>
                </div>
               
                <div className='web-dev-box'>
                <div className='web-dev-box-content'>
                        <img src='images/WebBasketballGame.png' alt='project1' />
                        <div className='web-dev-box-text'>
                            <h3>U R Shooter!!!</h3>
                            <h4>HTML, CSS, JavaScript, Canvas</h4>
                            <p>
                                &#8226; A very simple shooting game built with HTML, CSS, and JavaScript.
                                <br />
                                &#8226; You can play it <a href='https://hs87-urshooter.surge.sh/' target='_blank'>Here</a>
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default WebDev;