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

interface Satis{
  "satisfactionDegree": string,
  "userIduser": number
}

const ChartTwo = () => {

const [satisfactions,setSatisfactions]=useState<Satis[]>([])
const [degrees,setDegrees]= useState<number[]>([])

console.log("Satisfactions",satisfactions)
console.log("degrees",degrees)

//Get All satisfactions from database // 
  const fetchSatisfactions = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/getsat");
      const s = await res.json();
      setSatisfactions(s)
      makeTheChart(s)

  
    } catch (error) {
      console.error(error);
    }
}

useEffect(()=>{
  fetchSatisfactions()
},[])

// Make a representative numbers (degree ) of satisfactions to make the chart //
const makeTheChart = (data:Satis[]) => {
  let arr = []
  let very= 0
  let sat=0
  let notSat=0
  for(let i=0; i<data.length; i++){
    if (data[i].satisfactionDegree ==="Very satisfied"){
      very=very+10
    }
    else if(data[i].satisfactionDegree ==="Satisfied"){
      sat=sat+10
    }
    else if(data[i].satisfactionDegree ==="dissatified"){
      notSat= notSat+10
    }
  }
  arr.push(very)
  arr.push(sat)
  arr.push(notSat)
  console.log("test")

  console.log("arr" ,arr)
 setDegrees(arr)
}  
 
//Function to Define the chart //
  const data = {
    labels: ['Very satisfied','Satisfied','dissatified'],
    datasets: [{
      label: 'Global Satisfaction',
      data: degrees,
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

export default ChartTwo;