"use client"
import React from 'react'
import { Slide} from 'react-slideshow-image';
import Link from "next/link";
import 'react-slideshow-image/dist/styles.css'
function OneOfferCard() {
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
  
         <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                  
                                  <Slide>         
                                      {slideImages.map((slideImage, index)=> {
                                        // console.log(index);
                                        
                                       return <div>
                                           <Link href="/details" key={index}>
                                          <img className="rounded-t-lg" src={`${slideImage.url}`}/>
                                          </Link>
                                        </div>
                                })} 
                                  </Slide>
                              
                              <div className="p-2">
                              
                                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                      <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 </p>
                              </div>
                              </div>
   
   
  )
}

export default OneOfferCard