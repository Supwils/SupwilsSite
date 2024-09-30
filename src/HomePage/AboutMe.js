import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutMe = () =>
{
    const { t } = useTranslation();
    return (
        <div>

             <section class="about" id="about">
                <div class="about-img">
                    <img src="images/HuahaoSeattle.png" style={{ borderRadius: '10%' }}alt=""/>
                </div>

                <div class="about-content">
                    <h2 class="heading">{t('about')} <span>{t('me')}</span></h2>
                <h3>Software Developer!</h3>
                    <p>{t('aboutMeIntro')} 
                    </p>
                    <a href="/#exprience" class="btn">Read More</a>
                </div>

            </section>
        </div>
    )
}

export default AboutMe;
