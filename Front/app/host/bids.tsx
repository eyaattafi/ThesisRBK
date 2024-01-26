import React, { useEffect, useState } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import { MdOutlineCancel } from 'react-icons/md';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';
import { FaRegArrowAltCircleDown } from 'react-icons/fa';
import axios from 'axios';
import offer from '../../types/offer';
import bid from '../../types/bid';
import user from '../../types/user';

function Bids() {
  const userId = localStorage.getItem('userId');
  const [myOffers, setOffers] = useState<offer[]>([]);
  const [bids, setBids] = useState<bid[]>([]);
  const [bidders, setBidders] = useState<user[]>([]);
  const [selectedBid, setSelectedBid] = useState<bid | null>(null);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [refresh,SetRefresh]=useState<Boolean>(false)
  const [delorput,setDelOPut]=useState<Boolean>(false)
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/getAllOffers/${userId}`)
      .then((res) => setOffers(res.data.filter((el, i) => el.renterOrNot === 0)))
      .catch((err) => console.log(err));

    const userPromises = bids.map((el) =>
      axios.get(`http://localhost:3000/api/oneUser/${el?.userIduser}`)
    );

    Promise.all(userPromises)
      .then((userResponses) => {
        const userData = userResponses.map((res) => res.data);
        setBidders(userData);
      })
      .catch((err) => console.log(err));
  }, [userId, bids,refresh]);

  const getBids = (id: number) => {
    axios
      .get(`http://localhost:3000/api/getBid/${id}`)
      .then((res) => setBids(res.data))
      .catch((err) => console.log(err));
  };

  const handleConfirmClick = () => {
    if (selectedBid && !delorput) {
      // Make the Axios PUT request to confirm the bid
      const newRes = {reservationStatus:"confirmed",
      reservationStartDate:selectedBid.BIDstartDate,
      reservationEndDate:selectedBid.BIDendDate,
      offerIdoffer:selectedBid.offerIdoffer,
      userIduser:selectedBid.userIduser
      }
      axios
        .post(`http://localhost:3000/api/addreservation/`,newRes)
        .then((response) => {
          console.log('Bid confirmed successfully', response.data);
          // You may want to refresh the data or update the UI as needed
          // For example, you can make another request to get the updated data
          axios.delete(`http://localhost:3000/api/deleteBid/${selectedBid.idBID}`).then((res)=>SetRefresh(!refresh)).catch((err)=>console.log(err))
        })
        .catch((error) => {
          console.error('Error confirming bid', error);
        })
        .finally(() => {
          // Close the confirmation popup and reset the selected bid
          setShowConfirmation(false);
          setSelectedBid(null);
        });
    }else   if (selectedBid && delorput) {
      // Make the Axios DELETE request to reject/delete the bid
      const { idBID } = selectedBid;
      axios
        .delete(`http://localhost:3000/api/deleteBid/${idBID}`)
        .then((response) => {
          console.log('Bid rejected successfully', response.data);
          setDelOPut(false)
          SetRefresh(!refresh)
          // For example, you can make another request to get the updated data
        })
        .catch((error) => {
          console.error('Error rejecting bid', error);
        })
        .finally(() => {
          // Close the confirmation popup and reset the selected bid
          setShowConfirmation(false);
          setSelectedBid(null);
        });
    }
  };

  const handleRejectClick = () => {
    setShowConfirmation(false);
    setSelectedBid(null);
  };

  const getHighest = () => {
    const sorted = bids.sort((a, b) => b.BIDprice - a.BIDprice);
    const highest = sorted[0]?.BIDprice;
    return highest;
  };

  return (
    <div>
      <h2 className="flex justify-center text-2xl font-bold mb-4 border bg-white shadow mt-[30px] w-[1030px] ml-[35px]">
      Bids
      </h2>

      <div className="max-w-screen-lg mx-auto mt-4 flex">
        {/* Houses List Section */}
        <div className=" w-1/2 pr-4 border rounded-l-lg p-2 bg-white">
          <h2 className="flex justify-center text-2xl font-bold mb-4">Posted Houses</h2>
          <ul>
            {myOffers.map((el, i) => (
              <li
                key={i}
                className="flex items-center justify-around w-full bg-white border rounded p-2 ml-1 shadow mb-1 hover:cursor-pointer"
                onClick={() => getBids(el.idoffer)}
              >
                <img className="w-[80px] h-[60px] rounded" src={el.offerImages[0]} alt="" />
                <span>{el.offerTitle}</span>
                <span>{el.offerPrice}$</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Rented User Info Section */}
        <div className="w-1/2 pl-4 border rounded-r-lg bg-white p-2">
          <h2 className="flex justify-center text-2xl font-bold mb-4">Bids on HouseName</h2>
          <hr className="mt-[20px] w-full border-t border-gray-300 my-4" />
          <div>
            {/* Display user information here */}
            <div className="flex justify-around">
              <button className="flex flex-row items-center justify-center gap-2 bg-white border border-black rounded w-32">
                Price <FaRegArrowAltCircleUp className="text-slate-500" />
              </button>
              <button className="flex flex-row items-center justify-center gap-2 bg-white border border-black rounded w-32">
                Price <FaRegArrowAltCircleDown className="text-slate-500" />
              </button>
            </div>
            <div className="flex flex-col w-full h-full mt-4">
              {bids.map((el, i) => (
                <div key={i} className="flex justify-between border rounded h-[60px] mb-2 shadow">
                  <div className="flex flex-row items-center gap-6 p-2">
                    <img className="w-[50px] h-[50px] rounded-[100px]" src={bidders[i]?.userImage} alt="" />
                    <h1>{bidders[i]?.userName}</h1>
                  </div>
                  <span className="flex items-center p-2">{el.BIDprice}$</span>
                  <div className="flex flex-row justify-around items-center gap-2 p-2">
                    <FaRegCheckCircle
                      className="text-green-500 hover:cursor-pointer"
                      size={28}
                      onClick={() => {
                        setSelectedBid(el);
                        setShowConfirmation(true);
                      }}
                    />
                    <MdOutlineCancel
                      className="text-red-500 hover:cursor-pointer"
                      size={32}
                      onClick={() => {
                        setSelectedBid(el);
                        setShowConfirmation(true);
                        setDelOPut(!delorput)
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <hr className="mt-[20px] w-full border-t border-gray-300 my-4" />
            <div className="flex justify-between px-8">
              <h1>Highest</h1>
              <span>{getHighest()}$</span>
            </div>
          </div>
        </div>
      </div>

      {showConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md">
            <p className="mb-4">Are you sure?</p>
            <div className="flex justify-center space-x-4">
              <button
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
      )}
    </div>
  );
}

export default Bids;
