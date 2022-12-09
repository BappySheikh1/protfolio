import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Project from './Project/Project';
import Skill from './Skill/Skill';
import Service from '../Service/Service'

const Home = () => {
    return (
        <div>
            <Banner />
            <Project />
            <Skill />
            <Service />
            <Contact />
        </div>
    );
};

export default Home;