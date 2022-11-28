import React from 'react';

const Project = () => {
    return (
        <div className='my-20'>
             <h3 className='text-4xl font-bold text-center my-5'>My Project</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

              <div className="card  bg-base-100 shadow-xl image-full">
            <figure><img src="https://placeimg.com/400/225/arch" alt="logo" /></figure>
              <div className="card-body">
             <h2 className="card-title">Shoes!</h2>
             <p>If a dog chews shoes whose shoes does he choose?</p>
             <div className="card-actions justify-end">
             <button className="btn btn-primary">Buy Now</button>
              </div>
           </div>
              </div>
              <div className="card  bg-base-100 shadow-xl image-full">
            <figure><img src="https://placeimg.com/400/225/arch" alt="logo" /></figure>
              <div className="card-body">
             <h2 className="card-title">Shoes!</h2>
             <p>If a dog chews shoes whose shoes does he choose?</p>
             <div className="card-actions justify-end">
             <button className="btn btn-primary">Buy Now</button>
              </div>
           </div>
              </div>
              <div className="card  bg-base-100 shadow-xl image-full">
            <figure><img src="https://placeimg.com/400/225/arch" alt="logo" /></figure>
              <div className="card-body">
             <h2 className="card-title">Shoes!</h2>
             <p>If a dog chews shoes whose shoes does he choose?</p>
             <div className="card-actions justify-end">
             <button className="btn btn-primary">Buy Now</button>
              </div>
           </div>
              </div>


            </div>
        </div>
    );
};

export default Project;