import React from 'react'

function RegionCard({data}) {
  
  return (
    <div className='flex flex-col w-[300px] border rounded shadow'>
        <img className='w-full' src={data.categorieImage} alt="" />
        <div className='bg-slate-800 p-2'><h1 className='text-white'>{data.categorieName}</h1>
        <span className='text-slate-300'>disntance in km</span></div>
    </div>
  )
}

export default RegionCard