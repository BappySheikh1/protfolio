import React from 'react';

const Contact = () => {
    return (
        <div className='my-20'>
            <h3 className="text-4xl font-bold my-5 text-center">Contact Me</h3>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className="card bg-base-100 shadow-xl text-center">
                  <div className="card-body text-center">
                    <h2 className="text-2xl font-bold">Phone</h2>
                    <p>+8801637718322</p>
                    
                  </div>
                </div>

            
             <div>
                <div className="card text-center bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className=" font-bold text-2xl">Email</h2>
                    <p>sheikhbappy91@gmail.com</p>
                    
                  </div>
                </div>

             </div>
             <div>
                <div className="card text-center bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="text-2xl font-bold">LinkedIn</h2>
                    <p>https://www.linkedin.com/in/bappy-sheikh-8bb473244/</p>
                    
                  </div>
                </div>

               </div>
             </div>
        </div>
    );
};

export default Contact;