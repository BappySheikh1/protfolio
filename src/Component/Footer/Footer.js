import React from 'react';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <div>
           <footer className="footer footer-center p-10 bg-black text-primary-content">
  <div>
  
    <h3 className="font-bold text-5xl font-mono text-sky-700">
      Bappy Sheikh
    </h3> 
    <p className='font-bold text-gray-300 text-xl font-mono'>Thanks for visits my website</p>
  </div> 
  <div>
    <div className="grid grid-flow-col gap-4">
      <a href='https://web.facebook.com/bappy.sheikh.1804/' target='_blank'><BsFacebook className='text-3xl text-blue-600' /> </a> 
      <a href="https://github.com/BappySheikh1" target="_blank"><BsGithub className='text-3xl text-white' /></a>
      <a href="https://www.linkedin.com/in/bappy-sheikh-8bb473244/" target="_blank"><BsLinkedin className='text-3xl text-white text-blue-700'/></a>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;