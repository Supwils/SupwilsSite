import React from 'react';

const DataScience = () => {
    return (
        <div>
            <h1 className='web-dev-title'>Some ML/AI & Data Science</h1>
            
            <div className='web-dev-container'>

            <div className='web-dev-box'>
                <div className='web-dev-box-content'>
                        <img src='images/NasaSimilarImage.png' alt='project1' />
                        <div className='web-dev-box-text'>
                            <h3>Similar Image Search <a href='https://github.com/Supwils/Similar-Image-Retrival' target='_blank'>Github Link</a></h3>
                            <h4>Python, Deep Learning, Pytorch, CNN, VGG16, Solar</h4>
                            <p>
                                &#8226; Developed a image search engine using deep learning models and iteractive GUI for searching
                                <br />
                                
                            </p>
                        </div>
                    </div>
                </div>
                
               
            </div>



        </div>
    );
};

export default DataScience;