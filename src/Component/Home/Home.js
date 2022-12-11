import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Project from './Project/Project';
import Skill from './Skill/Skill';
import Service from '../Service/Service';
import About from './About/About'
import Blogs from '../Blogs/Blogs';

const Home = () => {
    return (
        <div>
            <Banner />
            <Project />
            <Skill />
            <About />
            <Service />
            <Contact />
            <Blogs />
        </div>
    );
};

export default Home;