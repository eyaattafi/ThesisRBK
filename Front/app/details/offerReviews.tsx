"use client"
import React,{useContext, useEffect, useState} from 'react';
import { DataContext } from '../context'
import axios from 'axios';
import user from '../../types/user'
import { log } from 'console';
const OfferReviews = () => {
    const  context = useContext(DataContext);
    const [users,setUsers]=useState<user[]>([])
    useEffect(()=>{
        const userPromises = context?.reviews.map((el) =>
            axios.get(`http://localhost:3000/api/oneUser/${el?.userIduser}`)
          );
        
          Promise.all(userPromises)
            .then((userResponses) => {
                
              const userData = userResponses.map((res) => res.data);
              
              setUsers(userData);
            })
            .catch((err) => console.log(err));
    },[])
    console.log("rev",context?.reviews);
    
    return ( 
    <div className="flex flex-col gap-10">
        <h1 className="font-bold text-xl">{context?.reviews.length} reviews</h1>
        <div className="flex flex-row flex-wrap gap-[100px]">
            {context?.reviews.map((el,i:number)=>
              <div key={i} className="w-[480px] h-[200px]">
              <div className="flex flex-row items-center gap-5">
                  <img className="w-16 h-16 border rounded-[200px]" src={users[i]?.userImage} alt="" />
                  <div>
                      <h1>{users[i]?.userName}</h1>
                      <span className="text-gray-500">date</span>
                  </div>
              </div>
              <div><p className="mt-[10px] overflow-hidden">{el.reviewsBody}</p></div>
          </div>
            )}
        </div>
        <hr className="w-[1160px] border-t border-gray-300 my-4 mt-10" />
    </div> 
    );
}
 
export default OfferReviews;