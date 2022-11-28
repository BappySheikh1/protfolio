import React from 'react';
import img from '../../../assets/73-removebg-preview.png'
import { BsGithub ,BsLinkedin} from 'react-icons/bs';

const Banner = () => {
    return (
        <div className='flex justify-between items-center flex-col md:flex-row'>
            <div>
               <h2 className='text-5xl font-bold font-serif'>Hello</h2>
               <h2 className='text-5xl font-bold font-serif my-2'>This Is Bappy Sheikh</h2>
               <p className='text-xl text-red-900 font-bold'>I Am A Front End Developer</p>
               <div className='flex items-center mt-3'>
                 <a href="https://github.com/BappySheikh1" target="_blank"><BsGithub className='text-3xl text-white' /></a>
                 <a href="https://www.linkedin.com/in/bappy-sheikh-8bb473244/" target="_blank"><BsLinkedin className='text-3xl text-white mx-3'/></a>
               </div>
            </div>
            <div className='mt-5'>
              <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;