
"use client"
import React, { useState,useContext } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { AiTwotoneAppstore, AiOutlineClose } from 'react-icons/ai';
import ImgDisplay from './imgDisplay'; // Make sure to provide the correct path to your ImgDisplay component
import { DataContext } from '../context'
import axios from 'axios';


const TitleNImg = () => {

  const [showImagesModal, setShowImagesModal] = useState(false);
  const [saved,setSaved]=useState<Boolean>(false)
  const  context = useContext(DataContext);

  const handleShowImages = () => {
    setShowImagesModal(true);
  };

  const handleCloseImages = () => {
    setShowImagesModal(false);
  };
  const handleSave=()=>{
    axios.post('http://localhost:3000/api/addwish',{userIduser:context?.loggedUser.iduser,
  offerIdoffer:context?.oneHouse.idoffer}).then((res)=>setSaved(!saved)).catch((err)=>err)
  }

  return (
    <div className="container mx-auto p-8">
      {/* Title and Location */}
      <div className="mb-4">
        <h1 className="text-4xl font-bold mb-2">{context&&context.oneHouse.offerTitle}</h1>
        <div className="flex justify-between">
          <p className="text-gray-500">Location: City, Country</p>
          <div className="flex flex-row items-center mr-[50px] gap-2 hover:cursor-pointer" onClick={handleSave}>
            <FaRegHeart style={{ color: saved ? 'red' : 'black' }} />
            <span>save </span>
          </div>
        </div>
      </div>

      {/* Images */}
      <div className="flex flex-row h-[400px]">
        {/* Big Image */}
        <div className="w-full md:w-1/2 mb-4 md:pr-2">
          <img
            src={context?.oneHouse.offerImages[0]}
            alt="Big House"
            className="w-full h-[450px] rounded-tl-[15px] rounded-bl-[15px]"
          />
        </div>

        {/* Little Images */}
        <div className="w-full md:w-1/2 flex flex-row flex-wrap gap-2">
          {/* Little Image 1 */}
          <img
            src={context&&context.oneHouse.offerImages[1]}
            alt="Little House 1"
            className="w-[280px] h-[221px]"
          />

          {/* Little Image 2 */}
          <img
            src={context&&context.oneHouse.offerImages[2]}
            alt="Little House 2"
            className="w-[280px] h-[221px] rounded-tr-[15px]"
          />

          {/* Little Image 3 */}
          <img
            src={context&&context.oneHouse.offerImages[3]}
            alt="Little House 3"
            className="w-[280px] h-[221px]"
          />

          {/* Little Image 4 */}
          <div className="relative">
            <img
              src={context&&context.oneHouse.offerImages[4]}
              alt="Little House 4"
              className="w-[280px] h-[221px] rounded-br-[15px]"
            />
            <button className="flex flex-row items-center absolute bottom-0 right-0 p-2 bg-white border-2 border-black rounded mr-[15px] mb-[15px]" onClick={handleShowImages}>
              <AiTwotoneAppstore />show all images
            </button>
          </div>
        </div>
      </div>

      {/* Modal for displaying all images */}
      {showImagesModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-2">
          <div className="bg-white p-8 rounded-lg max-h-[80vh] overflow-y-auto">
            <button className="absolute top-0 right-0 p-2" onClick={handleCloseImages}>
              <AiOutlineClose />
            </button>
            <ImgDisplay />
          </div>
        </div>
      )}
    </div>
  );
};

export default TitleNImg;


