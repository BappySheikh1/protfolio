import React from 'react';

const Skill = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-center'>My Skill</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 my-5'>
           <div className=''>
            <span className='font-bold'>HTML5</span>
           <progress className="progress progress-success " value="90" max="100"></progress>
           </div>
           <div>
            <span className='font-bold'>CSS</span>
           <progress className="progress progress-success " value="80" max="100"></progress>
           </div>
           <div>
            <span className='font-bold '>JavaScript</span>
           <progress className="progress progress-success " value="75" max="100"></progress>
           </div>
           <div>
            <span className='font-bold'>Bootstrap</span>
           <progress className="progress progress-success " value="80" max="100"></progress>
           </div>
           <div>
            <span className='font-bold'>Tailwind css</span>
           <progress className="progress progress-success " value="85" max="100"></progress>
           </div>
           <div>
            <span className='font-bold'>daisy ui</span>
           <progress className="progress progress-success " value="80" max="100"></progress>
           </div>
           <div>
            <span className='font-bold text-blue-600'>React Js</span>
           <progress className="progress progress-success " value="70" max="100"></progress>
           </div>
           <div>
            <span className='font-bold text-blue-600'>ES-6</span>
           <progress className="progress progress-success " value="70" max="100"></progress>
           </div>
           <div>
            <span className='font-bold'>Node js</span>
           <progress className="progress progress-success " value="70" max="100"></progress>
           </div>
             
           <div>
            <span className='font-bold'>Express js</span>
           <progress className="progress progress-success " value="70" max="100"></progress>
           </div>
           <div>
            <span className='font-bold'>Mongodb</span>
           <progress className="progress progress-success " value="70" max="100"></progress>
           </div>
             
            </div>
            
        </div>
    );
};

export default Skill;