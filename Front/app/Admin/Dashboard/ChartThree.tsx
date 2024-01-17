'use client'
import React, {useState,useEffect} from 'react'
import { IoSearchOutline } from "react-icons/io5";
import Link from 'next/link';
import { Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend} from 'chart.js'

import {Bar} from 'react-chartjs-2';
import { ChartTypeRegistry } from 'chart.js';

declare module 'chart.js' {
    interface ChartTypeRegistry {
        derivedBubble: ChartTypeRegistry['bubble']
    }
}

interface Reservation {
    reservationStatus: string,
    reservationStartDate: Date,
    reservationEndDate: Date,
    userIduser: number,
    offerIdoffer: number
}
interface Offer{
  offerTitle : string,
  offerDescription : string,
  offerPrice : number,
  offerType : string,
  offerStatus : boolean
}

const ChartThree = () => {
  const [confirmedOffers,setConfirmedOffers] =useState<Reservation[]|[]>([])
  const [offerName,setOfferName] = useState<string[]>([])
  const [offerPrice,setOfferPrice] = useState<number[]>([])
  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }}
 
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
  )
  
  const fetchConfirmed = async () => {
        try {
          const response = await fetch("http://localhost:3000/api/confirmedReservations");
          const tempData = await response.json();
          setConfirmedOffers(tempData)
          makeMyChart(tempData)
        } catch (error) {
          console.error(error);
        }
      };

   console.log("Confirmed",confirmedOffers);
   
// function to select only the names and prices of products //
  const makeMyChart =(offers :any) :void => { 
    let offerName: string[] = []
    let ofPrice : number[] = []
    for(let i=0; i<offers.length; i++) {
      if(!offerName.includes(offers[i].offerTitle )){
    offerName.push(offers[i].offerTitle)
    ofPrice.push(offers[i].offerType)
      }
  }
setOfferName(offerName)
setOfferPrice(ofPrice)
}
   
  
useEffect(() => {
  fetchConfirmed()
},[])

// Chart offers by type //
const data = {
  labels: ['Jan','feb','Mars','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  datasets: [{
    label: 'offers Per Region',
    data: [10,50,40,50,60,4,78,5,6,2,50,0],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

  
  return (

      <div className='flex justify-center rounded gap-x-72  '>
    
      <div style={ {padding: '20px', width:'100%', height:'100%'}}>
        <Bar data={data} options={options}/>
        
      </div>
      </div>
      
  )
}

export default ChartThree;