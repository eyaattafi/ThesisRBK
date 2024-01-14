"use client"

import React, { useState } from 'react';
import { GrHelpBook } from 'react-icons/gr';
import { BsHeadset } from 'react-icons/bs';
import Help from './help'; 
import Link from 'next/link';

interface WeofferhelpProps {}

const Weofferhelp: React.FC<WeofferhelpProps> = () => {
  const [isHelpModalOpen, setHelpModalOpen] = useState(false);

  const openHelpModal = () => {
    setHelpModalOpen(true);
  };

  const closeHelpModal = () => {
    setHelpModalOpen(false);
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
        <div className='w-[450px] flex flex-row border rounded-[8px] bg-white gap-2 p-4 shadow hover:scale-[110%] cursor-pointer'>
          <BsHeadset size={48} />
          <span className='flex items-center'>Contact Specialist Support</span>
        </div>
      </div>

      {isHelpModalOpen && (
        <div
          className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50 '
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
    </div>
  );
};

export default Weofferhelp;
