import React, { useState, useEffect } from "react";
import axios from "axios";
import offer from "../../types/offer";
import reservation from "../../types/reservations";
import user from "../../types/user";

const NewBooking = () => {
  
  const [bookings, setBookings] = useState<reservation[]>([]);
  const [renters, setRenters] = useState<user[]>([]);
  const [userId, setUserId] = useState<string | null>(localStorage.getItem('userId'));
  const [selectedBooking, setSelectedBooking] = useState<reservation | null>(null);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [refresh,SetRefresh]=useState<Boolean>(false)
  const [hostOffers, setHost] = useState<offer[]>([]);
  const [delorput,setDelOPut]=useState<Boolean>(false)
  useEffect(() => {
    axios.get(`http://localhost:3000/api/getAllOffers/${userId}`)
      .then((offersResponse) => {
        setHost(offersResponse.data);

        const reservationPromises = offersResponse.data.map((offer) => {
          return axios.get(`http://localhost:3000/api/getReservations/${offer.idoffer}`)
            .then((reservationsResponse) => {
              return reservationsResponse.data.filter((reservation) => reservation.reservationStatus === "not confirmed");
            });
        });

        Promise.all(reservationPromises)
          .then((allReservations) => {
            const mergedReservations = [].concat(...allReservations);
            setBookings(mergedReservations);

            const userIds = mergedReservations.map((reservation) => reservation.userIduser);
            const userPromises = userIds.map((userId) => axios.get(`http://localhost:3000/api/oneUser/${userId}`));

            return Promise.all(userPromises);
          })
          .then((userResponses) => {
            const mergedUsers = userResponses.map((userResponse) => userResponse.data);
            setRenters(mergedUsers);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  }, [userId,refresh]);

  const handleConfirmClick = () => {
    // Handle confirmation logic here
    // For example, you can make an API call to update the reservation status
    // After confirmation, close the popup and update the state as needed
    if (selectedBooking && !delorput) {
      const { idreservation, offerIdoffer } = selectedBooking;

      // Assuming you want to update the reservationStatus to "confirmed"
      const updatedReservation = {
        reservationStatus: "confirmed",
      };

      // Make the Axios PUT request
      axios.put(`http://localhost:3000/api/updateReservation/${idreservation}`, updatedReservation)
        .then((response) => {
          console.log("Reservation confirmed successfully", response.data);
          SetRefresh(!refresh)
          // For example, you can make another request to get the updated data
        })
        .catch((error) => {
          console.error("Error confirming reservation", error);
        })
        .finally(() => {
          // Close the confirmation popup and reset the selected booking
          setShowConfirmation(false);
          setSelectedBooking(null);
        });
    }else  if (selectedBooking && delorput) {
      const { idreservation } = selectedBooking;

      // Make the Axios DELETE request
      axios.delete(`http://localhost:3000/api/deleteReservation/${idreservation}`)
        .then((response) => {
          console.log("Reservation deleted successfully", response.data);
          SetRefresh(!refresh)
          setDelOPut(false)
          // For example, you can make another request to get the updated data
        })
        .catch((error) => {
          console.error("Error deleting reservation", error);
        })
        .finally(() => {
          // Close the confirmation popup and reset the selected booking
          setShowConfirmation(false);
          setSelectedBooking(null);
        });
    }
    setShowConfirmation(false);
    setSelectedBooking(null);
   
  };

  const handleRejectClick = () => {
    // Handle rejection logic here
    // After rejection, close the popup and update the state as needed
    setShowConfirmation(false);
    setSelectedBooking(null);
   
  };


  const checkName = (id: number) => {
    const name = hostOffers.filter((el, i) => el.idoffer === id);
    return name[0].offerTitle;
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-8">
      <h2 className="flex justify-center text-2xl font-bold mb-4 border bg-white shadow">New Bookings</h2>
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
            {bookings.map((el, i) => (
              <tr key={i}>
                <td className="border px-4 py-2">{checkName(el.offerIdoffer)}</td>
                <td className="border px-4 py-2">{el.reservationStartDate}</td>
                <td className="border px-4 py-2">{el.reservationEndDate}</td>
                <td className="border px-4 py-2">{renters[i]?.userName}</td>
                <td className="flex justify-around border px-4 py-2">
                  <button
                    className="border border-green-500 text-black px-4 py-2 rounded mr-2 hover:bg-green-500 hover:text-white"
                    onClick={() => {
                      setSelectedBooking(el);
                      setShowConfirmation(true);
                    }}
                  >
                    Confirm
                  </button>
                  <button
                    className="border border-red-500 text-black px-4 py-2 rounded hover:bg-red-500 hover:text-white"
                    onClick={() => {
                      setSelectedBooking(el);
                      setShowConfirmation(true);
                      setDelOPut(!delorput)
                    }}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center rounded">
          <div className="bg-white p-6 rounded shadow-md">
            <p className="mb-4">Are you sure?</p>
            <div className="flex  flex-col justify-center items-center space-x-4 gap-6">
             <div className="flex flex-row gap-6"> <button
                className="border border-green-500 text-black px-4 py-2 rounded hover:bg-green-500 hover:text-white"
                onClick={handleConfirmClick}
              >
                Confirm
              </button>
              <button
                className="border border-red-500 text-black px-4 py-2 rounded hover:bg-red-500 hover:text-white"
                onClick={handleRejectClick}
              >
                Cancel
              </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewBooking;
