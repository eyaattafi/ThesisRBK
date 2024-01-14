import React from 'react'

const NextArriving = () => {
  return (
    <div className="max-w-screen-lg mx-auto mt-8">
    <h2 className="flex justify-center text-2xl font-bold mb-4 border bg-white shadow">Next Arrivals</h2>
    <div className="overflow-x-auto">
      <table className="table-auto w-full bg-white">
        <thead>
          <tr>
            <th className="border px-4 py-2">House Title</th>
            <th className="border px-4 py-2">From</th>
            <th className="border px-4 py-2">To</th>
            <th className="border px-4 py-2">Renter</th>
            <th className="border px-4 py-2">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {/* map here */}
          <tr key={1} className='text-center'>
            <td className="border ">Villa1</td>
            <td className="border ">11/01/2024</td>
            <td className="border ">16/01/2024</td>
            <td className="border ">user</td>
            <td className="border ">
             <span>500$</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default NextArriving