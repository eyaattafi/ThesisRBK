import React from 'react'

function ImgDisplay() {
    const imgs=["https://a0.muscache.com/im/pictures/miso/Hosting-671515411169755702/original/fa6374a2-b16a-4509-b3dc-4b068adbb6a0.jpeg?im_w=1200",
"https://a0.muscache.com/im/pictures/miso/Hosting-671515411169755702/original/fa6374a2-b16a-4509-b3dc-4b068adbb6a0.jpeg?im_w=1200",
"https://a0.muscache.com/im/pictures/miso/Hosting-671515411169755702/original/fa6374a2-b16a-4509-b3dc-4b068adbb6a0.jpeg?im_w=1200",
"https://a0.muscache.com/im/pictures/miso/Hosting-671515411169755702/original/fa6374a2-b16a-4509-b3dc-4b068adbb6a0.jpeg?im_w=1200"]
  return (
    <div className='flex flex-col gap-2'>
        {imgs.map((el,i)=><img className='w-[500xp] h-[400px] rounded-lg' src={el} alt="" />)}
        
    </div>
  )
}

export default ImgDisplay