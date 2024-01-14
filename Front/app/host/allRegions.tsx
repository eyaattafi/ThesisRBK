import React from 'react'
import RegionCard from './regionCard'

function AllRegions() {
    const regions=[1,2,3,4,5,6,7,8,9,10,11,12]
  return (
    <div>
        <h1 className='text-3xl font-bold ml-[10px]'>All Regions</h1>
        <div className='flex flex-row flex-wrap gap-7 p-2'>{regions.map((el,i)=><RegionCard/>)}</div>
    </div>
    
  )
}

export default AllRegions
