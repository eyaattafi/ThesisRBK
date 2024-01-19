//http://localhost:3000/api/confirmedReservations

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
  import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

import {Pie} from 'react-chartjs-2';
import { ChartTypeRegistry } from 'chart.js';

declare module 'chart.js' {
    interface ChartTypeRegistry {
        derivedPie: ChartTypeRegistry['pie']
    }
}

interface Offer{
  offerTitle : string,
  offerDescription : string,
  offerPrice : number,
  offerType : string,
  offerStatus : boolean
}

const ChartFort = () => {


 
// ChartJS.register(
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend
//   )
  
 


  const data = {
    labels: ['Very satisfied','Satisfied','disatified'],
    datasets: [{
      label: 'Global Satisfaction',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
  const option = {
    type : 'pie',
    data : data
    }

  return (

      <div className='flex justify-center rounded gap-x-72  '>
    
      <div style={ {padding: '20px', width:'80%'}}>
        <Pie data={data}  options={option}  height={700} width={600}/>
        
      </div>
      </div>
      
  )
}

export default ChartFort;