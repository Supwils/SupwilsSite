import React from 'react';
import '../WebDev/WebDev.css';
const SoftwareDev = () => {
    return (
        <div>
            <h1 className='web-dev-title'>Software Development & Projects</h1>
            
            <div className='web-dev-container'>

            <div className='web-dev-box'>
                <div className='web-dev-box-content'>
                        <img src='images/solarsys1.png' alt='project1' />
                        <div className='web-dev-box-text'>
                            <h3>Solar System Simulator <a href='https://github.com/Supwils/StreamForYall' target='_blank'>Github Link</a></h3>
                            <h4>C++, OpenGL, OOP, Particle System, Animation</h4>
                            <p>
                                &#8226; Developed a full-stack web enabling users to live stream and build fans community.
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='web-dev-box'>
                    <div className='web-dev-box-content'>
                        <img src='images/webapdp1.png' alt='project1' />
                        <div className='web-dev-box-text'>
                            <h3>Eat Yet APP(Food Recipe Share) <a href='https://github.com/Supwils/EatYetApp' target='_blank'>Github Link</a></h3>
                            <h4>Java, AzureSQL, Multithreading, XML, RecylerView</h4>
                            <p>
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
               
                <div className='web-dev-box'>
                <div className='web-dev-box-content'>
                        <img src='images/WebBaskdetballGame.png' alt='project1' />
                        <div className='web-dev-box-text'>
                            <h3>Wild Dice Game (Python GUI game)</h3>
                            <h4>Python, OOP</h4>
                           
                        
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default SoftwareDev;