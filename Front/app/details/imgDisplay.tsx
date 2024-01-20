import React,{useContext} from 'react'
import { DataContext } from '../context'
function ImgDisplay() {
  const  context = useContext(DataContext);
  return (
    <div className='flex flex-col gap-2'>
        {context?.oneHouse.offerImages.map((el,i:number)=><img className='w-[500xp] h-[400px] rounded-lg' src={el} alt="" />)}
        
    </div>
  )
}

export default ImgDisplay