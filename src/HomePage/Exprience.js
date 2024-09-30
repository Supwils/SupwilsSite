import React from 'react';
import ExperienceTimeline from '../ExpriencePage/TimeLine';
import { Icon } from '@iconify/react';
const Exprience = () => {
    return (
        <div>
            <section class="exprience" id = "exprience">

                <h2>My <span>Experiences/Skills</span></h2>
                <div className='expeience-layout'>
                    
                <ExperienceTimeline />
                <div class="exprience-container">
                    
                    <div className="exprience-box exprience-card">
                        {/* <i class='bx bx-code-alt'></i>
                        <i class='bx bxl-react'></i> */}
                            <div className='exprience-icon'>
                            <Icon icon="game-icons:spider-web" style={{fontSize: "100px"}}/>
                            </div>
                            
                            <div className='exprience-content'>
                            <h3>Web Development</h3>
                                <p> Main use: &nbsp;
                                    <Icon icon="skill-icons:javascript" /> JavaScript/TypeScript &nbsp;
                                    <Icon icon="skill-icons:react-dark" /> React &nbsp;
                                    <Icon icon="skill-icons:html" /> HTML &nbsp;
                                    <Icon icon="skill-icons:css" /> CSS &nbsp;
                                    <Icon icon="logos:nodejs" /> Node.js &nbsp;
                                    <Icon icon="skill-icons:expressjs-dark" /> Express.js &nbsp;
                                    <Icon icon="dashicons:rest-api" style={{ color: "#9366e5" }} /> REST API &nbsp;
                                    <Icon icon="skill-icons:mongodb" /> MongoDB &nbsp;
                                    <Icon icon="skill-icons:mysql-dark" /> MySQL &nbsp;
                                    <Icon icon="logos:redis" /> Redis &nbsp;

                                    <br></br>
                                    Also know: &nbsp;
                                    <Icon icon="logos:nextjs-icon" /> Next.js &nbsp;
                                    <Icon icon="skill-icons:prisma" /> Prisma &nbsp; 
                                    <Icon icon="skill-icons:graphql-dark" /> GraphQL &nbsp;
                                    <Icon icon="skill-icons:tailwindcss-dark" /> Tailwind... &nbsp;
                                </p>
                                <a href="/web-development" class="btn">Read More</a>
                            </div>
                    </div>

                    <div className="exprience-box exprience-card">
                            <div className='exprience-icon'>
                                <Icon icon="emojione:soft-ice-cream" style={{fontSize: "100px"}}/>
                            </div>
                            
                            <div className='exprience-content'>
                                <h3>Software Development</h3>
                                <p> Main use: &nbsp;
                                    <Icon icon="logos:python" /> Python &nbsp;
                                    <Icon icon="skill-icons:cpp" /> C++/C &nbsp;
                                    <Icon icon="fontisto:aws" style={{ color: "#c38e32" }} /> AWS &nbsp;
                                    <Icon icon="skill-icons:gcp-dark" /> GCP &nbsp;
                                    <Icon icon="skill-icons:azure-light" /> AzureSQL &nbsp;
                                    
                                    
                                    <br></br>
                                    Also know: &nbsp;
                                    <Icon icon="skill-icons:java-dark" /> Java &nbsp;+ &nbsp;
                                    <Icon icon="logos:c-sharp" /> C# &nbsp;
                                    
                            </p>
                                <a href="/software-development" class="btn">Read More</a>
                            </div>
                        </div>
                        
                        <div className="exprience-box exprience-card">
                            <div className='exprience-icon'>
                                <Icon icon="vscode-icons:folder-type-tools" style={{fontSize: "100px"}}/>
                            </div>
                            
                            <div className='exprience-content'>
                                <h3>Software Tools& Concepts</h3>
                                <p > Main use: &nbsp;
                                    <Icon icon="skill-icons:vscode-dark" /> VSCode &nbsp;
                                    <Icon icon="mdi:git" /> Git &nbsp;+ &nbsp;
                                    <Icon icon="skill-icons:docker" /> Docker &nbsp;
                                    <Icon icon="skill-icons:linux-light" /> Linux &nbsp;
                                    <Icon icon="iconoir:agile"  style={{ color: "#fbe4e4" }} /> Agile &nbsp;
                            </p>
                                <a href="/software-development" class="btn">Read More</a>
                            </div>
                    </div>

                    <div class="exprience-box exprience-card">
                            <div className='exprience-icon'>
                            <Icon icon="game-icons:artificial-intelligence" style={{fontSize: "100px"}}/>
                            </div>
                            <div className='exprience-content'>
                                <h3>Some AI/ML/DS</h3>
                                <p>
                                    <Icon icon="gravity-ui:abbr-ml" /> Modal Training &nbsp;
                                    <Icon icon="skill-icons:pytorch-dark" /> Pytorch &nbsp;
                                    <Icon icon="logos:numpy" /> NumPy &nbsp;
                                    <Icon icon="logos:pandas-icon" /> Pandas &nbsp;
                                    <Icon icon="skill-icons:scikitlearn-dark" /> SKLearn &nbsp;

                                </p>
                                <a href="/data-science" class="btn">Read More</a>
                            </div>
                    </div>

                    <div class="exprience-box exprience-card">
                            <div className='exprience-icon'>
                            <Icon icon="flat-color-icons:sports-mode" style={{fontSize: "100px"}}/>
                            </div>
                            <div className='exprience-content'>
                                <h3>Life Vibe</h3>
                                <p> <Icon icon="noto:man-lifting-weights" width={40} height={40} /> 
                                    <Icon icon="emojione:basketball" width={40} height={40}/> <br></br>
                                    2+ years exprienced in athletic training, weightlifting, olympic weightlifting.
                                    Basketball player for the school club team. I train regularly for my interests and stress relief also.
                                    Looking forwad to chat with you about sports and recovery!
                                </p>
                                <a href="/athletic-training" class="btn">Read More</a>
                            </div>
                    </div>

                </div>
            </div>
            </section>
        </div>
    );
};

export default Exprience;
