import React from 'react';
import './AthleticTraning.css';

const AthleticTraining = () => {
    return (
        <div className="athletic-training">
            <h2>Life Vibe</h2>
            <div className="media-container">
                <div className="image-container">
                <iframe src="https://drive.google.com/file/d/157DIay1KyXVaCo76bi6BVHVRkWh4E9Uk/preview" width="640" height="480" allow="autoplay"></iframe>
                </div>
                <div className="video-container">
                <iframe src="https://drive.google.com/file/d/1WlQDLMGFayZONunLO1OOVx9GSdyeLn5Z/preview" width="640" height="480" allow="autoplay"></iframe>
                </div>
            </div>
        </div>
    );
};

export default AthleticTraining;