import React from 'react';
import Lottie from "lottie-react";
import logo from '../../../assets/88558-about-us.json'

const Resume = () => {
    return (
        <div id='aboutMe' className='my-10'>
            <h1 className='text-3xl font-bold text-center'>About Me</h1>
            
            <div className='flex justify-between items-center'>

               <div className=''>
                 <Lottie animationData={logo} loop={true} />
               </div>
            <div className=''>
                <h3 className='text-2xl mb-2 text-orange-600 font-bold'>Web Developer</h3>
                <p className='text-xl my-2'>A passionate Front-End Developer</p>
                <p className=''>Hello! I'm a MERN stack developer who enjoys creating web applications with React JS.web development through my professional experience. I've been studying ReactJS, JavaScript, Tailwind CSS, Bootstrap, Express JS, GitHub, Node Js, and MongoDB simultaneously. I worked on full-stack projects that used React, Firebase, Express JS, and MongoDB. I am currently open to projects/jobs where I can learn/develop/progress in an exciting environment/industry I am passionate about.</p>
            </div>
            </div>
        </div>
    );
};

export default Resume;