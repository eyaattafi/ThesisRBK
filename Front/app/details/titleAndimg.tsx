import { FaRegHeart } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";


const titleNimg = () => {
    return ( 
        <div className="container mx-auto p-8">
        {/* Title and Location */}
        <div className="mb-4">
          <h1 className="text-4xl font-bold mb-2">House Title</h1>
         <div className="flex justify-between"><p className="text-gray-500">Location: City, Country</p>
         <div className="flex flex-row items-center mr-[50px] gap-2 hover:cursor-pointer"><FaRegHeart /><span>save </span></div></div> 
        </div>
  
        {/* Images */}
        <div className="flex flex-row h-[400px]">
          {/* Big Image */}
          <div className="w-full md:w-1/2 mb-4 md:pr-2">
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-671515411169755702/original/fa6374a2-b16a-4509-b3dc-4b068adbb6a0.jpeg?im_w=1200" 
              alt="Big House"
              className="w-full h-[450px] rounded-tl-[15px] rounded-bl-[15px]"
            />
          </div>
  
          {/* Little Images */}
          <div className="w-full md:w-1/2 flex flex-row flex-wrap gap-2">
            {/* Little Image 1 */}
            
              <img
                src="https://a0.muscache.com/im/pictures/miso/Hosting-671515411169755702/original/c3870c51-38c5-4552-90f3-c53dda5e5a7d.jpeg?im_w=1440" 
                alt="Little House 1"
                className="w-[280px] h-[221px]"
              />

              <img
                src="https://a0.muscache.com/im/pictures/miso/Hosting-671515411169755702/original/c3870c51-38c5-4552-90f3-c53dda5e5a7d.jpeg?im_w=1440" // Replace with your actual little image source
                alt="Little House 2"
                className="w-[280px] h-[221px] rounded-tr-[15px]"
              />
            
  
            {/* Little Image 3 */}
            
              <img
                src="https://a0.muscache.com/im/pictures/miso/Hosting-671515411169755702/original/c3870c51-38c5-4552-90f3-c53dda5e5a7d.jpeg?im_w=1440" // Replace with your actual little image source
                alt="Little House 3"
                className="w-[280px] h-[221px]"
              />
            
  
            {/* Little Image 4 */}
            
             <div className="relative"> <img
                src="https://a0.muscache.com/im/pictures/miso/Hosting-671515411169755702/original/c3870c51-38c5-4552-90f3-c53dda5e5a7d.jpeg?im_w=1440" // Replace with your actual little image source
                alt="Little House 4"
                className="w-[280px] h-[221px] rounded-br-[15px]"
              />
              <button className="flex flex-row items-center absolute bottom-0 right-0 p-2 bg-white border-2 border-black rounded mr-[15px] mb-[15px]"> <AiTwotoneAppstore />show all images</button>
            </div>
          </div>
        </div>
      </div> 
      );
}
 
export default titleNimg;