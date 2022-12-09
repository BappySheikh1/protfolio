import React from 'react';
import {BsCodeSlash, BsPhone} from 'react-icons/bs';

const Service = () => {
    return (
        <div className='px-4'>
            <h2 className="text-3xl text-center my-10">My Service</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                <div style={{height:'160px'}} className="card   shadow-xl ">
                  <div className="card-body ">
                    <div className='mx-auto'>
                        <BsCodeSlash className='text-3xl'/>
                    </div>
                    <h2 className="text-2xl font-bold text-center text-white">Web Development</h2>
                    <p className=''>A MERN Stack web application I provide, every kind of website i can create</p>
                    
                  </div>
                </div>

            
             <div>
                <div style={{height:'160px'}} className="card  shadow-xl">
                  <div className="card-body">
                    <div className='mx-auto'>
                    <BsPhone className='text-3xl'/>
                    </div>
                    <h2 className=" font-bold text-xl text-white text-center">Responsive Development</h2>
                    <p className=''>Responsive web development is most important cause user visit site Mobile or Tab </p>
                    
                  </div>
                </div>

             </div>
             <div>
                <div style={{height:'160px'}} className="card shadow-xl">
                  <div className="card-body">
                  <div className='mx-auto'>
                        <BsCodeSlash className='text-3xl' />
                    </div>
                    <h2 className="text-xl font-bold text-center text-white">Web Design</h2>
                    <p className=''>Web Design is the main part for an website, it's satisfy user experience and attract user</p>
                    
                  </div>
                </div>

               </div>
             </div>
        </div>
    );
};

export default Service;