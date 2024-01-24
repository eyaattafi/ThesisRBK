"use client"
import Image from 'next/image'
import Landing from './Components/Landing'
import QuestionRes from './Components/QuestionRes'
import Equipements from './Equipements'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import 'react-slideshow-image/dist/styles.css'
import Link from 'next/link'
import { useContext } from 'react'
import { DataContext } from './context'
import { Slide } from 'react-slideshow-image'



export default function Home() {

  const context=useContext(DataContext)



  return (
    <Link href='/SignIn'>
    <div>

    <div>
      
      <img  className=' w-2/3 h-auto ml-52 mt-20 mb-48' src='https://www.home-designing.com/wp-content/uploads/2018/11/luxury-apartment-living-room-ideas.jpg' />
      <div><Landing/></div>
    </div>
   
    <div className='grid grid-cols-3 mx-44'>
      <div>
    <h1 className=' text-left font-bold mb-2'> Gain more flexibility!</h1>
      <p className='w-72 text-black mb-24 text-justify' > Accommodations with flexible cancellation allow you to make a new reservation more easily, in case your plans change.</p>
      </div>
      <div >
      <h1 className=' text-left font-bold  mb-2'>  There are more than 100 active listings! </h1>
      <p className='w-72 text-black  mb-24 text-justify' > Do like more than a thousand Tunisians who have found getaways in more than 200 amazing places.</p>
      </div>
      <div >
      <h1 className=' text-left font-bold  mb-2'>  More than 60 filters for tailor-made stays! </h1>
      <p className='w-72 text-black  mb-24 text-justify' > Choose a price range, the number of rooms and certain essential amenities to find the accommodation that suits you.</p>
      </div>
    </div>

   

    <h1 className='text-black font-bold mx-44 mb-8 text-2xl'>Small or large, we have all the accommodations you need</h1>
<div className='grid grid-cols-3 gap mx-44'>
<div>
<img  className='w-72 h-72 rounded-xl ' src='https://i.pinimg.com/originals/ed/46/ed/ed46edbe4e29a7fb9496e815cecc93f3.jpg'/>

<h3 className='text-black font-bold mt-2'>House </h3>

<p className='w-72 text-slate-400 text-justify '>Do you need more space? book an entire house just for you</p>
</div>
<div>
  <img className='w-72 h-72 rounded-xl'   src='https://www.vivons-maison.com/sites/default/files/styles/740px/public/field/image/appartement-de-ville-moderne.jpg?itok=glB-GqEQ'/>
  <h3 className='text-black font-bold mt-2'>Apartment  </h3>
<p className='w-72 text-slate-400 text-justify'>stay in the most convenient locations by booking accommodation in shared buildings</p>
</div>
<div>
<img className='w-72 h-72 rounded-xl' src='https://www.m-habitat.fr/medias/image/amenager-une-chambre-d-etudiant-1-3871-1200-630.jpg'/>

<h3 className='text-black font-bold mt-2'>Single Room </h3>


<p className='w-72 text-slate-400 text-justify '>You are a student? We have the suitest offer for you. Enjoy your own sleeping space and share common areas with others.</p>
</div>
</div>
<div>
  <h1 className='text-black font-bold mt-20 mx-44 mb-2 text-2xl'>Accommodations with equipped kitchens suitable for families</h1>
  <h3 className='text-slate-400 font-bold ml-44 '>Prepare a feast for your loved ones with these accommodations with kitchens and barbecues.</h3>
  <div className='grid grid-cols-4 mt-24 ml-48 gap-0'>
    
   {context?.allOffers.slice(0,4).map((el,i)=>{
    return(
      <div className="w-[250px] h-[350px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden" key={i}>
                           
                  <Slide>         
                      {el.offerImages.map((slideImage, index)=> (
                          <Link href="/details">
                          <img className="rounded  w-full h-[200px]" src={slideImage}/>
                          <p>{``}</p>
                          </Link>
                      ))} 
                  </Slide>
              
              <div className="p-2">

                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden">{el.offerTitle}</h5>
                      <p className="mb-1 font-normal text-gray-700 dark:text-gray-400 overflow-hidden">{el.offerDescription} </p>
              </div>
          </div>
    )
   })}
  </div>
  <div>
    <div>
  <h1 className='text-black font-bold mt-20 mx-44 mb-2 text-2xl'>Specify your preferred equipments </h1>
  <h3 className='text-slate-400 font-bold ml-44'>Select the most sought-after amenities, like these and others, for a personalized stay.</h3>
 <div className='flex flex-wrap gap-4 ml-44 mb-28'> <Equipements/> </div></div>
  
  <div>
  <h1 className='text-black font-bold mt-40 mx-44 mb-2  text-2xl'> Answers to your questions </h1>
    <QuestionRes/></div>
  </div>

</div>

</div>
</Link> )
}