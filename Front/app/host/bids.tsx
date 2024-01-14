import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

function Bids() {
  return (
    <div>
    <h2 className="flex justify-center text-2xl font-bold mb-4 border bg-white shadow mt-[30px] w-[1020px] ml-[30px]">Current Stays</h2>

    <div className="max-w-screen-lg mx-auto mt-4 flex">
    {/* Houses List Section */}
    <div className=" w-1/2 pr-4 border rounded-l-lg p-2 bg-white">
      <h2 className="flex justify-center text-2xl font-bold mb-4">Posted Houses</h2>
      <ul>
        {/* Your mapping logic goes here */}
        <li key={1} className="flex items-center justify-around w-full bg-white border rounded p-2 ml-1 shadow mb-1"><img className="w-[80px] h-[60px] rounded" src="https://a0.muscache.com/im/pictures/miso/Hosting-671515411169755702/original/fa6374a2-b16a-4509-b3dc-4b068adbb6a0.jpeg?im_w=1200" alt="" /><span>house1</span><span>50$</span></li>
        <li key={1} className="flex items-center justify-around w-full bg-white border rounded p-2 ml-1 shadow mb-1"><img className="w-[80px] h-[60px] rounded" src="https://a0.muscache.com/im/pictures/miso/Hosting-671515411169755702/original/fa6374a2-b16a-4509-b3dc-4b068adbb6a0.jpeg?im_w=1200" alt="" /><span>house1</span><span>50$</span></li>
        <li key={1} className="flex items-center justify-around w-full bg-white border rounded p-2 ml-1 shadow mb-1"><img className="w-[80px] h-[60px] rounded" src="https://a0.muscache.com/im/pictures/miso/Hosting-671515411169755702/original/fa6374a2-b16a-4509-b3dc-4b068adbb6a0.jpeg?im_w=1200" alt="" /><span>house1</span><span>50$</span></li>
        <li key={1} className="flex items-center justify-around w-full bg-white border rounded p-2 ml-1 shadow mb-1"><img className="w-[80px] h-[60px] rounded" src="https://a0.muscache.com/im/pictures/miso/Hosting-671515411169755702/original/fa6374a2-b16a-4509-b3dc-4b068adbb6a0.jpeg?im_w=1200" alt="" /><span>house1</span><span>50$</span></li>
        <li key={1} className="flex items-center justify-around w-full bg-white border rounded p-2 ml-1 shadow mb-1"><img className="w-[80px] h-[60px] rounded" src="https://a0.muscache.com/im/pictures/miso/Hosting-671515411169755702/original/fa6374a2-b16a-4509-b3dc-4b068adbb6a0.jpeg?im_w=1200" alt="" /><span>house1</span><span>50$</span></li>
        <li key={1} className="flex items-center justify-around w-full bg-white border rounded p-2 ml-1 shadow mb-1"><img className="w-[80px] h-[60px] rounded" src="https://a0.muscache.com/im/pictures/miso/Hosting-671515411169755702/original/fa6374a2-b16a-4509-b3dc-4b068adbb6a0.jpeg?im_w=1200" alt="" /><span>house1</span><span>50$</span></li>
        <li key={1} className="flex items-center justify-around w-full bg-white border rounded p-2 ml-1 shadow mb-1"><img className="w-[80px] h-[60px] rounded" src="https://a0.muscache.com/im/pictures/miso/Hosting-671515411169755702/original/fa6374a2-b16a-4509-b3dc-4b068adbb6a0.jpeg?im_w=1200" alt="" /><span>house1</span><span>50$</span></li>
      </ul>
    </div>

    {/* Rented User Info Section */}
    <div className="w-1/2 pl-4 border rounded-r-lg bg-white p-2">
      <h2 className="flex justify-center text-2xl font-bold mb-4">Bids on HouseName</h2>
      <hr className="mt-[20px] w-full border-t border-gray-300 my-4" />
      <div>
        {/* Display user information here */}
            <div className='flex justify-around'>
                <button className='flex flex-row items-center justify-center gap-2 bg-white border border-black rounded w-32'>Price <FaRegArrowAltCircleUp className="text-slate-500" /></button>
                <button className='flex flex-row items-center justify-center gap-2 bg-white border border-black rounded w-32'>Price <FaRegArrowAltCircleDown  className="text-slate-500"/>
</button>
            </div>
            <div className='flex flex-col w-full h-full mt-4'>
                <div className='flex justify-between border rounded h-[60px] mb-2 shadow'><div className='flex flex-row items-center gap-6 p-2'><img className='w-[50px] h-[50px] rounded-[100px]' src="https://i.pinimg.com/564x/aa/06/d7/aa06d77cd048b867f5d0b40362e62a76.jpg" alt="" /><h1>user</h1></div><span className='flex items-center p-2'>600$</span>
                <div className='flex flex-row justify-around items-center gap-2 p-2'><FaRegCheckCircle className='text-green-500 hover:cursor-pointer' size={28}/><MdOutlineCancel className='text-red-500 hover:cursor-pointer' size={32}/></div></div>
                <div className='flex justify-between border rounded h-[60px]'><div className='flex flex-row items-center gap-6 p-2'><img className='w-[50px] h-[50px] rounded-[100px]' src="https://i.pinimg.com/564x/aa/06/d7/aa06d77cd048b867f5d0b40362e62a76.jpg" alt="" /><h1>user</h1></div><span className='flex items-center p-2'>600$</span>
                <div className='flex flex-row justify-around items-center gap-2 p-2'><FaRegCheckCircle className='text-green-500' size={28}/><MdOutlineCancel className='text-red-500' size={32}/></div></div>
                <div className='flex justify-between border rounded h-[60px]'><div className='flex flex-row items-center gap-6 p-2'><img className='w-[50px] h-[50px] rounded-[100px]' src="https://i.pinimg.com/564x/aa/06/d7/aa06d77cd048b867f5d0b40362e62a76.jpg" alt="" /><h1>user</h1></div><span className='flex items-center p-2'>600$</span>
                <div className='flex flex-row justify-around items-center gap-2 p-2'><FaRegCheckCircle className='text-green-500' size={28}/><MdOutlineCancel className='text-red-500' size={32}/></div></div>
                <div className='flex justify-between border rounded h-[60px]'><div className='flex flex-row items-center gap-6 p-2'><img className='w-[50px] h-[50px] rounded-[100px]' src="https://i.pinimg.com/564x/aa/06/d7/aa06d77cd048b867f5d0b40362e62a76.jpg" alt="" /><h1>user</h1></div><span className='flex items-center p-2'>600$</span>
                <div className='flex flex-row justify-around items-center gap-2 p-2'><FaRegCheckCircle className='text-green-500' size={28}/><MdOutlineCancel className='text-red-500' size={32}/></div></div>

            </div>
            <hr className="mt-[20px] w-full border-t border-gray-300 my-4" />
            <div className='flex justify-between px-8'><h1>Highest</h1><span>700$</span></div>
      </div>
    </div>
  </div> 
  </div>
  )
}

export default Bids