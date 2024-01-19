"use client"
import React,{useState,useEffect,useContext} from "react";
import offer from '../../types/offer'
import reservation from "../../types/reservations";
import user from "../../types/user";
import axios from "axios";
const NewBooking = () => {
  const [hostOffers,setHost]=useState<offer[]>([])
  const [bookings,setBookings]=useState<reservation[]>([])
  const [renters,setRenters]=useState<user[]>([])
  const userId = localStorage.getItem('userId');

  useEffect(()=>{

    axios.get(`http://localhost:3000/api/getAllOffers/${userId}`)
    .then((offersResponse) => {
      setHost(offersResponse.data);

      // Map over offers and create an array of promises for reservations
      const reservationPromises = offersResponse.data.map((offer) => {
        return axios.get(`http://localhost:3000/api/getReservations/${offer.idoffer}`)
          .then((reservationsResponse) => {
            return reservationsResponse.data.filter((reservation) => reservation.reservationStatus === "not confirmed");
          });
      });

      // Use Promise.all to wait for all reservations promises
      Promise.all(reservationPromises)
        .then((allReservations) => {
          // Flatten the array of arrays into a single array of reservations
          const mergedReservations = [].concat(...allReservations);
          setBookings(mergedReservations);

          // Extract user IDs from reservations and create an array of promises for user data
          const userIds = mergedReservations.map((reservation) => reservation.userIduser);
          const userPromises = userIds.map((userId) => axios.get(`http://localhost:3000/api/oneUser/${userId}`));

          // Use Promise.all to wait for all user promises
          return Promise.all(userPromises);
        })
        .then((userResponses) => {
          // Extract user data from responses
          const mergedUsers = userResponses.map((userResponse) => userResponse.data);
          setRenters(mergedUsers);
        })
        .catch((error) => console.error(error));
    })
    .catch((error) => console.error(error));
  },[userId])

  const checkName=(id:number)=>{
    const name= hostOffers.filter((el,i)=>el.idoffer===id)
       return name[0].offerTitle
   }
 
  
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
              {bookings.map((el,i)=>
                <tr key={i}>
                <td className="border px-4 py-2">{checkName(el.offerIdoffer)}</td>
                <td className="border px-4 py-2">{el.reservationStartDate}</td>
                <td className="border px-4 py-2">{el.reservationEndDate}</td>
                <td className="border px-4 py-2">{renters[i]?.userName}</td>
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
              </tr>)}
            
            </tbody>
          </table>
        </div>
      </div>
       );
}
 
export default NewBooking;