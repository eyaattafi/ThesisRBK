import React from 'react'
import Link from "next/link";
function Help() {
  return (
    <div className='flex flex-col gap-7 w-[700px] h-[500px] overflow-y-auto border rounded p-2'>
        <h1 className='font-bold text-3xl'>How to help your listing stand <br /> out from the crowd</h1>
        <p>Our quick guide will help you get bookings <br /> and manage your hosting business.</p>
        <p className='text-slate-600'>by Rentavilla,13 January 2042 </p>
        <div>
        <p>Don't forget the seven keys to a successful ad:</p>
            <ul className='list-disc ml-6 flex flex-col gap-6'>
                <li><h1 className='font-bold'>Photos:</h1> Use a mix of wide and close-up shots to give potential guests a feel for your space.</li>
                <li><h1 className='font-bold'>Title, Description and Equipment:</h1>Highlight what makes your space special and tailor your listing based on guest feedback and suggestions.</li>
                <li><h1 className='font-bold'>Pricing Strategy:</h1> Check the rates for similar accommodations in your area and other regions.</li>
                <li><h1 className='font-bold'>Calendar & Renting Settings:</h1> You can control how and when guests can book your space.</li>
                <li><h1 className='font-bold'>Stand out from the crowd in search results:</h1> Get helpful tips on how to improve your listing's ranking. Find out how to enable Instant Book and get good feedback.</li>
                <li><h1 className='font-bold'>Renting Process:</h1> Respond quickly to guests and accept as many booking requests as possible.</li>
                <li><h1 className='font-bold'>Receive your payouts:</h1>Set up your payout method to receive your money automatically.</li>
            </ul>
        </div>
        <div className='bg-orange-950 text-white w-[150px] p-2 flex justify-center rounded'><Link href='/addhome'>Add a home</Link></div>
    </div>
  )
}

export default Help