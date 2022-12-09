import React from 'react';

const ContactForm = () => {
    const handleEmailSend =(event)=>{
         event.preventDefault();
     }

    return (
        <div>
             <div className="card  w-full  shadow-2xl ">
               <form onSubmit={handleEmailSend} className="card-body">
                
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text text-xl font-semibold">Your Name</span>
                   </label>
                   <input type="text" placeholder="Your Name" className="input input-bordered" />
                 </div>

                 <div className="form-control">
                   <label className="label">
                     <span className="label-text text-xl font-semibold">Your Email</span>
                   </label>
                   <input type="Email" placeholder="Your Email" className="input input-bordered" />
                 </div>
               
                 </div>

                 <div className="form-control">
                   <label className="label">
                     <span className="label-text font-semibold text-xl">Your Message</span>
                   </label>
                   <textarea className="textarea textarea-bordered" placeholder="Your Message"></textarea>
                 </div>

                 <div className="form-control mt-6">
                   <button className="btn btn-primary font-bold bg-blue-700 hover:bg-blue-700 border-none text-white">Submit</button>
                 </div>
               </form>
            </div>
        </div>
    );
};

export default ContactForm;