import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className='my-20 px-4'>
            <h3 className="text-4xl font-bold my-5 text-center">Contact Me</h3>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                <div style={{height:'160px'}} className="card  bg-gray-500 shadow-xl text-center">
                  <div className="card-body text-center">
                    <h2 className="text-2xl font-bold text-white">Phone</h2>
                    <p className='text-black font-bold'>+8801637718322</p>
                    
                  </div>
                </div>

            
             <div>
                <div style={{height:'160px'}} className="card text-center bg-gray-500  shadow-xl">
                  <div className="card-body">
                    <h2 className=" font-bold text-2xl text-white">Email</h2>
                    <p className='text-blue-700 font-bold'>sheikhbappy91@gmail.com</p>
                    
                  </div>
                </div>

             </div>
             <div>
                <div style={{height:'160px'}} className="card text-center bg-gray-500 shadow-xl">
                  <div className="card-body">
                    <h2 className="text-2xl font-bold text-white">LinkedIn</h2>
                    <p className='text-blue-700 font-bold'>https://www.linkedin.com/in/bappy-sheikh123/</p>
                    
                  </div>
                </div>

               </div>
             </div>
             <div>
              <ContactForm />
             </div>
        </div>
    );
};

export default Contact;