import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Project from './Project/Project';
import Skill from './Skill/Skill';

const Home = () => {
    return (
        <div>
            <Banner />
            <Project />
            <Skill />
            <Contact />
        </div>
    );
};

export default Home;