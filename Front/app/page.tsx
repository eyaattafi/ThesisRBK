import Image from 'next/image'

export default function Home() {
  return (
    <>
    <h1 className='text-black font-bold  mx-44 mb-4'>Small or large, we have all the accommodations you need</h1>
<div className='grid grid-cols-3 gap mx-44'>
<div>
<img  className='w-72 h-72 rounded-xl ' src='https://i.pinimg.com/originals/ed/46/ed/ed46edbe4e29a7fb9496e815cecc93f3.jpg'/>
<h3 className='text-black font-bold mt-2'>Houses > </h3>
<p className='w-72 text-slate-400 text-justify '>Do you need more space? book an entire house just for you</p>
</div>
<div>
  <img className='w-72 h-72 rounded-xl'   src='https://www.vivons-maison.com/sites/default/files/styles/740px/public/field/image/appartement-de-ville-moderne.jpg?itok=glB-GqEQ'/>
  <h3 className='text-black font-bold mt-2'>Apartments > </h3>
<p className='w-72 text-slate-400 text-justify'>stay in the most convenient locations by booking accommodation in shared buildings</p>
</div>
<div>
<img className='w-72 h-72 rounded-xl' src='https://www.m-habitat.fr/medias/image/amenager-une-chambre-d-etudiant-1-3871-1200-630.jpg'/>
<h3 className='text-black font-bold mt-2'>Single Room > </h3>
<p className='w-72 text-slate-400 text-justify '>You are a student? We have the suitest offer for you. Enjoy your own sleeping space and share common areas with others.</p>
</div>
</div>
</>
  )
}