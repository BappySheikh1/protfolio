import React from 'react';
import img1 from '../../../assets/wizy.jpg'
import img2 from '../../../assets/3.jpg'
import img3 from '../../../assets/pexels-hasan-albari-1229861.jpg'

const Project = () => {
    return (
        <div className='my-20 px-4'>
             <h3 className='text-4xl font-bold text-center my-5'>My Project</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

              <div className="card  bg-base-100 shadow-xl image-full">
            <figure><img src={img1} alt="logo" /></figure>
              <div className="card-body">
             <h2 className="card-title">Widzy</h2>
             <p>wild life photography</p>
             <div className="card-actions justify-end">
             <a href="https://assignment11-client-3d043.firebaseapp.com/" target='_blank' className='btn rounded-xl border-none hover:bg-blue-700 bg-blue-700'>Visit Website</a>
              </div>
           </div>
              </div>

              <div className="card  bg-base-100 shadow-xl image-full">
            <figure><img src={img2} alt="logo" /></figure>
              <div className="card-body">
             <h2 className="card-title">
              Car Service
             </h2>
             <p>Car service website</p>
             <div className="card-actions justify-end">
             <a href="https://genius-car-31ddf.firebaseapp.com/" target='_blank' className='btn rounded-xl border-none hover:bg-blue-700 bg-blue-700'>Visit website</a>
              </div>
           </div>
              </div>
              <div className="card  bg-base-100 shadow-xl image-full">
            <figure><img src={img3} alt="logo" /></figure>
              <div className="card-body">
             <h2 className="card-title">MaxCoach!</h2>
             <p>This is learning website for programming language quiz?</p>
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