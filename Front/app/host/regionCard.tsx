import React from 'react'

function RegionCard() {
  return (
    <div className='flex flex-col w-[300px] border rounded'>
        <img className='w-full' src="https://th.bing.com/th/id/R.286779697d995df80fdff58664959632?rik=c2AS1I2g31qTCw&pid=ImgRaw&r=0" alt="" />
        <div className='bg-slate-800 p-2'><h1 className='text-white'>region</h1>
        <span className='text-slate-300'>disntance in km</span></div>
    </div>
  )
}

export default RegionCard