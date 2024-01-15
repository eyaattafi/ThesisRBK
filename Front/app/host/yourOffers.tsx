"use client"
import React, { useState } from 'react'
import OneOfferCard from './oneOfferCard'

function YourOffers() {
    // const [maptest,setMap]=useState()
    const maptest=[1,2,3,4,5,6,7,8]
  return (
    <div>
        <h1 className='text-3xl font-bold ml-[50px]'>Your offers</h1>
        <div className="grid grid-cols-4 gap-7 p-12 ">{maptest.map((el,i)=><OneOfferCard/>)}</div>
    </div>
  )
}

export default YourOffers