import React, { useEffect } from 'react';
import './HomePage.css';
import Typed from 'typed.js';
import { useTranslation } from 'react-i18next';
import './PersonalCard.css';
const PersonalCard = () => {
    const { t } = useTranslation();
    useEffect(() => {
        const typed = new Typed('.multiple-text', {
            strings: ['Software Developer', 'Web Developer', 'Student', 'Athletic Trainer'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });

        // Cleanup function to destroy the Typed instance when the component unmounts
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div>
            <section className="home" id="home">
                <div className="home-content">
                    <h3>{t('helloMe')}</h3>
                    <h1>{t('name')}</h1>
                    <h3>And I'm a <span className="multiple-text"></span></h3>
                    <p>{t('Intro')}</p>
                    <div className="social-media">
                        <a href="https://www.linkedin.com/in/huahao-shang-7b59b2224/" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="https://github.com/Supwils/" target="_blank"><i class='bx bxl-github'></i></a>
                        <a href='https://space.bilibili.com/479803243' target="_blank"><i class="fa-brands fa-bilibili"></i></a>
                    </div>
                    <a href="#" className="btn">Download CV</a>
                </div>

                {/* <div className="home-img">
                    <img src="/images/Huahao.png" style={{ borderRadius: '80%' }} alt="Huahao Shang" />
                    <img src="/images/HuahaoSeattle.png" className="back-img" alt="Huahao Shang Back" />
                </div> */}
               <div className="image-flip-container">
                <div className="image-float">
                    <div className="image-flip">
                        <img src="/images/Huahao.png" className="front-img" alt="Huahao Shang Front" />
                        <img src="/images/HuahaoSea.png" className="back-img" alt="Huahao Shang Back" />
                     </div>
                </div>
                </div>
            </section>
        </div>
    );
}

export default PersonalCard;