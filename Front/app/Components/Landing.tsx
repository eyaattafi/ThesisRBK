import React from 'react';
import Link from 'next/link'



const Landing  = () => {



  return (
    <div className="absolute top-40 left-40 right-0 bottom-0 flex items-center justify-start bg-transparent ">
    <div className="bg-white p-11 h-96 w-96 rounded shadow-2xl">
        <h1 className='text-left font-bold mb-2 text-xl'>Find Accomodations On RentaVilla </h1>
        <h3 className=" text-sm text-slate-500 mb-4">Discover entire accommodations and rooms for any type of trip.</h3>
       <input className='ml-0 w-full h-10 bg-slate-100 hover:bg-slate-200 rounded shadow-xl' 
       placeholder='AnyWhere you want'/> 
       <div className='grid grid-cols-2 gap-3'>
       <input  className='ml-0 mr-0 w-36 h-10 bg-slate-100 hover:bg-slate-200 rounded shadow-xl mt-3' 
       placeholder='Start Date'/>
       

     
       <input className='ml-0 mr-0 w-36 h-10 bg-slate-100 hover:bg-slate-200 rounded shadow-xl mt-3' 
       placeholder='End Date'/> 
       </div>
      <button className="bg-orange-950 text-white px-4 py-2 rounded hover:bg-red-500 mt-12">Find Reservation 
        </button>
     
       </div>
    </div>
  );
};

export default Landing;