"use client"
import React, { useState } from 'react';
import { GrHelpBook } from 'react-icons/gr';
import { BsHeadset } from 'react-icons/bs';
import Help from './help';
import Link from 'next/link';
import axios from 'axios';
interface WeofferhelpProps {}

const Weofferhelp: React.FC<WeofferhelpProps> = () => {
  const [isHelpModalOpen, setHelpModalOpen] = useState(false);
  const [isContactSupportOpen, setContactSupportOpen] = useState(false);
  const [selectedObject, setSelectedObject] = useState('complaint');
  const [messageBody, setMessageBody] = useState('');
  const userId = localStorage.getItem('userId');
  const openHelpModal = () => {
    setHelpModalOpen(true);
  };

  const closeHelpModal = () => {
    setHelpModalOpen(false);
  };

  const openContactSupport = () => {
    setContactSupportOpen(true);
  };

  const closeContactSupport = () => {
    setContactSupportOpen(false);
  };

  const handleSendMessage = () => {
    // Handle sending the message logic here
    // You can access the values using selectedObject and messageBody states
    // Perform the necessary actions (e.g., send an API request)
    // Close the popup after sending the message
    var currentDate = new Date().toLocaleDateString();
    
    var date=currentDate.split('/').reverse()

    var fixedDate=date.join('-')
    
    axios.post('http://localhost:3000/api/addinbox',{
      inBoxObject:selectedObject,
      inBoxBody:messageBody,
      inBoxDate: fixedDate,
      inBoxStatus:"not seen",
      adminIdadmin:1,
      userIduser:userId
    }).then((res)=>console.log(res)).catch((err)=>console.log(err))
    console.log('Selected Object:', selectedObject);
    console.log('Message Body:', messageBody);
    closeContactSupport();
  };

  return (
    <div className='flex flex-col gap-12'>
      <h1 className='text-3xl font-bold'>We are here to help you</h1>
      <div className='flex flex-row justify-around'>
        <div
          className='w-[450px] flex flex-row border rounded-[8px] bg-white gap-2 p-4 shadow hover:scale-[110%] cursor-pointer'
          onClick={openHelpModal}
        >
          <GrHelpBook size={48} />
          <span>How to help your listing stand out from the crowd</span>
        </div>
        <div
          className='w-[450px] flex flex-row border rounded-[8px] bg-white gap-2 p-4 shadow hover:scale-[110%] cursor-pointer'
          onClick={openContactSupport}
        >
          <BsHeadset size={48} />
          <span className='flex items-center'>Contact Specialist Support</span>
        </div>
      </div>

      {isHelpModalOpen && (
        <div
          className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50'
          style={{ zIndex: 50 }}
        >
          <div
            className='bg-white p-8 rounded shadow-md max-w-screen-md w-full'
            style={{ zIndex: 51 }}
          >
            <Help />
            <button
              className='cursor-pointer border-none bg-none text-gray-700 text-base mt-4'
              onClick={closeHelpModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {isContactSupportOpen && (
        <div
          className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50'
          style={{ zIndex: 50 }}
        >
          <div
            className='bg-white p-8 rounded shadow-md max-w-screen-md w-full'
            style={{ zIndex: 51 }}
          >
            <h2 className='text-xl font-bold mb-4'>Contact Specialist Support</h2>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>Select Object:</label>
              <select
                className='border p-2 w-full'
                value={selectedObject}
                onChange={(e) => setSelectedObject(e.target.value)}
              >
                <option value='complaint'>Complaint</option>
                <option value='request'>Request</option>
              </select>
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>Message:</label>
              <textarea
                className='border p-2 w-full'
                rows={4}
                value={messageBody}
                onChange={(e) => setMessageBody(e.target.value)}
              ></textarea>
            </div>
            <div className='flex justify-between'>
              <button
                className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'
                onClick={handleSendMessage}
              >
                Send
              </button>
              <button
                className='border border-red-500 text-black px-4 py-2 rounded hover:bg-red-500 hover:text-white'
                onClick={closeContactSupport}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weofferhelp;
