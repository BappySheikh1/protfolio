import React from 'react';
import img1 from '../../../assets/wizy.jpg'
import img2 from '../../../assets/bike.png'
import img3 from '../../../assets/pexels-hasan-albari-1229861.jpg'
import { Link } from 'react-router-dom';

const Project = () => {
    return (
        <div id='project' className='my-20 px-4'>
             <h3 className='text-4xl font-bold text-center my-5'>My Project</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

              <div className="card  bg-base-100 shadow-xl image-full">
                     <figure><img src={img1} alt="logo" /></figure>
                <div className="card-body">
                   <h2 className="card-title">Widzy</h2>
                   <p>MERN Stack special wild photograph on our website!
                     This Site Is photography Platfrom!
                     <br />
                    <span className='font-bold text-white'>Technology</span>: ReactJS , React Router , Firebase, JavaScript Tailwind CSS, HTML,
                      CSS Node js, Express js Mongodb, daisy
                        </p>
            
                     <div className="card-actions justify-end">
                      <a href="https://assignment11-client-3d043.firebaseapp.com/" target='_blank' className='btn rounded-xl border-none hover:bg-blue-700 bg-blue-700'>Visit Website</a>

                      
              </div>
                </div>
              </div>

              <div className="card  bg-base-100 shadow-xl image-full">
                   <figure><img src={img2} alt="logo" /></figure>
                <div className="card-body">
                 <h2 className="card-title">
                    Bikefair
                  </h2>
                  <p>MERN Stack special resell website!! This Site Is Bike resell website!
                   <br />
                  <span className='font-bold text-white'>Technology</span>: ReactJS , React Router , Firebase, JavaScript Tailwind CSS, HTML,
                    CSS Node js, Express js Mongodb, daisy
                   </p>
                   <div className="card-actions justify-end">
                  <a href="https://assingment12-client.firebaseapp.com/" target='_blank' className='btn rounded-xl border-none hover:bg-blue-700 bg-blue-700'>Visit website</a>

                  
                  </div>
              </div>
              </div>

              <div className="card  bg-base-100 shadow-xl image-full">
            <figure><img src={img3} alt="logo" /></figure>
              <div className="card-body">
             <h2 className="card-title">MaxCoach!</h2>
             <p>Full Stack website This Site Is Educational Platform!
             <br />
              <span className='font-bold text-white'>Technology</span>: ReactJS , React Router , Firebase, JavaScript
                  React Bootstrap, HTML, CSS, Node js, Express js, React Icon
              </p>
             <div className="card-actions justify-end">
             <a href="https://learning-website-client-f3d12.firebaseapp.com/" target='_blank' className='btn rounded-xl border-none hover:bg-blue-700 bg-blue-700'>Visit Website</a>
             
              </div>
           </div>
              </div>


            </div>
        </div>
    );
};

export default Project;