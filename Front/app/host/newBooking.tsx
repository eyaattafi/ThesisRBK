const NewBooking = () => {
    return ( 
        <div className="max-w-screen-lg mx-auto mt-8">
        <h2 className=" flex justify-center text-2xl font-bold mb-4 border bg-white shadow">New Bookings</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-white">
            <thead>
              <tr>
                <th className="border px-4 py-2">House Title</th>
                <th className="border px-4 py-2">From</th>
                <th className="border px-4 py-2">To</th>
                <th className="border px-4 py-2">Renter</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* map here */}
              <tr key={1}>
                <td className="border px-4 py-2">Villa1</td>
                <td className="border px-4 py-2">11/01/2024</td>
                <td className="border px-4 py-2">16/01/2024</td>
                <td className="border px-4 py-2">user</td>
                <td className="flex justify-around border px-4 py-2">
                  <button
                
                    className="border border-green-500 text-black px-4 py-2 rounded mr-2 hover:bg-green-500 hover:text-white"
                  >
                    Confirm
                  </button>
                  <button
                   
                    className="border border-red-500 text-black px-4 py-2 rounded hover:bg-red-500 hover:text-white"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
       );
}
 
export default NewBooking;