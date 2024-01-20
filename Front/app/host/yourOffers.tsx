"use client"
import React, { useState,useContext } from 'react'
import OneOfferCard from './oneOfferCard'
import { DataContext } from '../context'

function YourOffers() {
  const  context = useContext(DataContext);
   
  return (
    <div>
        <h1 className='text-3xl font-bold ml-[50px]'>Your offers</h1>
        <div className="grid grid-cols-4 gap-7 p-12 ">{context?.allOffers.filter((el,i)=>el.userIduser===context.loggedUser.iduser).map((el,i)=><OneOfferCard data={el}/>)}</div>
    </div>
  )
}

export default YourOffers