import React from 'react'

const Admin = () => {
  return (
    <div className='bg-slate-100'>
        <div className='flex justify-center rounded w-60 bg-orange-950 h-12 text-white text-center font-bold pt-2 shadow-2xl ml-[500px] mt-6 text-2xl'> DASHBOARD </div>
      
       
      <div className='flex flex-wrap gap-10 mt-8 ml-16 mb-16'>
        {/*************First Chart *********************/}
       <div>
       <div className=" bg-white text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
  <div className="col-span-2 text-lg font-bold capitalize rounded-md text-center">
    RENTS PER REGION
  </div>

  <div className="col-span-1">
   <img className=' w-[450px] h-[250px] rounded ml-6' src='https://screenshots.codesandbox.io/l6qs1/31.png'/>
  </div>
  

  </div>
       </div>
            {/*************second Chart *********************/}
      
            <div>
       <div className="ml-8 bg-white text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
  <div className="col-span-2 text-lg font-bold capitalize rounded-md text-center">
    RENTS PER CATEGORIE
  </div>

  <div className="col-span-1">
   <img className=' w-[450px] h-[250px] rounded ml-6' src='https://datavizproject.com/wp-content/uploads/types/Bar-Chart-Vertical.png'/>
  </div>
  

  </div>
       </div>
          {/*************third Chart *********************/}
          <div>
       <div className=" bg-white text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
  <div className="col-span-2 text-lg font-bold capitalize rounded-md text-center">
    RENTS PER MONTH
  </div>

  <div className="col-span-1 ">
   <img className=' w-[450px] h-[250px] rounded ml-6' src='https://www.tableau.com/sites/default/files/2021-06/DataGlossary_Icons_Pie%20Chart.jpg'/>
  </div>
  

  </div>
       </div>
       {/*************Forth Chart *********************/}
       <div>
       <div className=" ml-8 bg-white text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
  <div className="col-span-2 text-lg font-bold capitalize rounded-md text-center">
    GAIN PER MONTH
  </div>

  <div className="col-span-1">
   <img className=' w-[450px] h-[250px] rounded ml-6' src='https://datavizproject.com/wp-content/uploads/types/Bar-Chart-Vertical.png'/>
  </div>
  

  </div>
       </div>
       {/* <div
  className="relative h-24 ml-[500px] pt-10 font-bold group rounded-lg w-64 bg-pink-200 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#F9B0B9] text-center"
> Global Satisfaction : n %
</div> */}
       </div>

       
    </div>
  )
}

export default Admin
