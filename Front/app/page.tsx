"use client"
import Image from 'next/image'
import Landing from './Components/Landing'
import QuestionRes from './Components/Landing'
import Equipements from './Equipements'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link'


export default function Home() {

  // window.onclick = function() {
  // }
  // window.addEventListener("click", function(event) {
  // });
  

  return (
    
    <div onClick={()=>{<Link href='/SignIn' ></Link>}}>

    <div>
      
      <img  className=' w-2/3 h-auto ml-52 mt-20 mb-48' src='https://www.home-designing.com/wp-content/uploads/2018/11/luxury-apartment-living-room-ideas.jpg'/>
      <div><Landing/></div>
    </div>
   
    <div className='grid grid-cols-3 mx-44'>
      <div>
    <h1 className=' text-left font-bold mb-2'> Gain more flexibility!</h1>
      <p className='w-72 text-black mb-24 text-justify' >  Accommodations with flexible cancellation allow you to make a new reservation more easily, in case your plans change.</p>
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
  <div className='grid grid-cols-5 mt-24 ml-48 gap-10'>
    <img className=' w-48 h-48 rounded-xl mr-3' src='https://www.cherry-lane.co.uk/gallery/1236417_PI_V04.jpg'/>
    <img className='w-48 h-48 rounded-xl' src='https://www.christianmarcoux.com/wp-content/uploads/2017/10/Christian_Marcoux_cuisine_moderne_4b.jpg'/>
    <img className='w-48 h-48 rounded-xl' src='https://www.decodambiance.com/wp-content/uploads/2021/10/couleurs-cuisine-moderne.jpg'/>
    <img className='w-48 h-48 rounded-xl' src='https://www.gardendesign.com/pictures/images/900x705Max/outdoor-kitchen-by-christopher-yates_353/garden-design_5338.jpg'/>
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
 {/*  <div className='w-full h-14 bg-orange-950 flex flex-r justify-end '> <div className='p-4 justify-center items-center '><Link href="/GeneralConditions" className='text-white mr-9' > General Conditions</Link>
  <Link href="/Confidentiality" className='text-white mr-9' > Confidentiality </Link>
  <Link href=''><FacebookIcon className='bg-white mr-9 rounded'  /></Link>
  <Link href=''><InstagramIcon  className='bg-white mr-9 rounded'/></Link>
  </div></div> */}
</div>

</div>
  )
}