"use client"

import { useContext } from "react"
import { FaSwimmingPool, FaWifi } from "react-icons/fa"
import { PiTelevisionFill } from "react-icons/pi"
import { TbAirConditioning } from "react-icons/tb"
import { DataContext } from "../context"

export default function AddingFeatures(){

    const feature=[<FaSwimmingPool color="white" size={50} />,<TbAirConditioning color="white" size={50} />,<PiTelevisionFill color="white" size={50}/>,<FaWifi color="white" size={50}/>]
    const context=useContext(DataContext)
  
    return (

        <div>
                        <h3 className="m-20 text-3xl font-bold mb-30 flex flex-center justify-center ">Select Features</h3>

                        <div className="grid  gap-3 md:grid-cols-3 ml-20 mb-24">

                            {context?.categories.map((el,i)=>{

                                return (
                                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 mt-30">
                                    
                                    <div className="flex flex-center  gap-20">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.categorieName}</h5>
                                        {feature[i]}
                                        </div>
                                    <input id="vue-checkbox-list" type="checkbox" value="" className="w-8 h-8  bg-gray-100 border-gray-300 rounded focus:ring-orange- dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>                                              
                                    </div>
                                )
                            })}

                                       


                        </div> 

                        <div className="flex justify-center items-center mb-10">
                            <button className=" hover:bg-orange-950 text-orange-950 font-semibold hover:text-white py-2 px-4 border border-orange-950 hover:border-transparent rounded">
                                Confirm Chooses
                            </button>
                        </div>
                        
        </div>
        
        
    )
}