import React from 'react';
import './HomePage.css'; // Assuming you will add some styles
import MainNav from '../MainNav/MainNav';
import PersonalCard from './PersonalCard';
import AboutMe from './AboutMe';
import Exprience from './Exprience';
import Projects from './Projects';
import Contact from './Contact';
const HomePage = () => {
    return (
        <div className="homepage">
            
            <header className="homepage-header">
            <MainNav />
            </header>
            
            <PersonalCard />
            <AboutMe />
            <Exprience />
            {/* <Projects /> */}
            <Contact />
        </div>
    );
};

export default HomePage;