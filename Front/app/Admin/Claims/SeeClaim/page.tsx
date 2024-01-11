import React from 'react'

const SeeClaim = () => {
  return (
    <div className='rounded shadow-lg ml-16 w-[1150px] h-[600px] mt-14 bg-slate-100'>
      <div className='rounded shadow-xl w-[1150px] h-16 pt-6 pl-6 font-bold bg-slate-100 mb-2'> From :  </div>
      <div className='rounded shadow-lg w-[1150px] h-16 pt-6 pl-6 font-bold bg-slate-100'>Subject : </div>
      <div className='rounded shadow-lg w-[1150px] h-[300px] pt-6 pl-6 font-bold bg-slate-100 mt-2'>body: </div>
      <div>
        <div className='mt-6 mb-6 font-bold'>Answer Message </div>
      <input placeholder='Write you message here ' className='rounded shadow-lg w-[1150px] h-[200px] pl-6 bg-slate-100 mt-2'/>
      <button className="bg-orange-950 text-white px-4 py-2 rounded hover:bg-red-500 mt-12">
    Send
        </button></div>
    </div>
  )
}

export default SeeClaim
