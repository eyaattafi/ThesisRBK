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

interface Offer{
  offerTitle : string,
  offerDescription : string,
  offerPrice : number,
  offerType : string,
  offerStatus : boolean
}

const ChartOne = () => {
  const [offers,setOffers] =useState<Offer[]|[]>([])
  const [ offerTitle,setOfferTitle] = useState<string[]>([])
  const [offerType,setOfferType] = useState<string[]>([])
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
  
  const fetchOffer = async () => {
        try {
          const response = await fetch("http://localhost:3000/api/getAllOffers");
          const tempData = await response.json();
          setOffers(tempData)
          makeMyChart(tempData)
        } catch (error) {
          console.error(error);
        }
      };
   console.log("offers",offers)
   console.log("offertype",offerType);
   
// function to select only the names and prices of products //
  const makeMyChart =(offers :any) :void => { 
    let type : string[] = []
    for(let i=0; i<offers.length; i++) {
      if(!type.includes(offers[i])){
    type.push(offers[i].offerType)
    
      }
  }
setOfferType(type)
}
   
  
useEffect(() => {
  fetchOffer()
},[])

// Chart offers by type //
const data = {
  labels: offerType,
  datasets: [{
    label: 'offers Type',
    axis: 'x',
    data: offerType,
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
    
      <div style={ {padding: '20px', width:'80%'}}>
        <h1 className='text-lg mb-8 font-extrabold'> Offers per Type </h1>
        <Bar data={data} options={options}/>
        <div style={ {padding: '20px', width:'80%'}}>

{/*         
        <Bar  data={otherChart} options={options}/> */}
        </div>
      </div>
      </div>
      
  )
}

export default ChartOne;