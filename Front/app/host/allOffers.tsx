"use client"
import React from 'react'
import { Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'  
import Link from "next/link";

function  AllOffers() {
    const slideImages = [
        {
            url: 'https://www.interiordesignmagazines.eu/wp-content/uploads/2022/04/Aptm-Berlin-V-_THE-INNER-HOUSE-Living-room-decor-ideas.jpeg',
            caption: 'Slide 1'
          },
        {
          url: 'https://www.brabbu.com/en/inspiration-and-ideas/wp-content/uploads/2020/02/Inner-House-Interior-Design-Planning-Renovation-2.jpg',
          caption: 'Slide 2'
        },
     
        {
          url: 'https://brabbu.com/blog/wp-content/uploads/2019/06/The-Inner-House-Apartment-Berlin-I.jpg',
          caption: 'Slide 3'
        }
      
      ];
      
  return (
    <div>
                <h1 className='text-3xl font-bold ml-[50px]'>All offers</h1>

    <div className=" grid grid-cols-4 gap-7 p-12">
                

              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                  
                      <Slide>         
                          {slideImages.map((slideImage, index)=> (
                              <Link href="/details">
                              <img className="rounded" src={`${slideImage.url}`}/>
                              </Link>
                          ))} 
                      </Slide>
                  
                  <div className="p-2">

                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                          <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 </p>
                  </div>
              </div>
        </div>
        </div>
  )
}

export default AllOffers