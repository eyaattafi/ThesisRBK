'use client'
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import offer from '../../types/offer';
import bid from '../../types/bid';
import user from '../../types/user';
import { GiChart } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { BsEmojiGrin } from "react-icons/bs";
import { BsEmojiFrown } from "react-icons/bs";
import { FaRegCheckCircle } from 'react-icons/fa';
import { MdOutlineCancel } from 'react-icons/md';
import Dashboard from './Dashboard/page';
import Link from 'next/link'
const Admin = () => {

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


  return (
    <div>
    <div className='flex flex-r gap-8 ml-11'>
<div className=' w-64 h-32 rounded-xl bg-pink-700 mt-10 p-3 pt-6 text-white justify-center'> <span className='font-bold text-xl ml-14'>20 </span>Total Users <FaUsers className='ml-20' size={55} /></div>
<div className='w-64 h-32 rounded-xl bg-sky-600 mt-10 pt-6  text-white'><span className='font-bold text-xl pl-10'>70 % </span> Total Satisfaction <div className='flex flex-r gap-6 ml-20 mt-5'><BsEmojiGrin size={30}/> < BsEmojiFrown size={30}/></div> </div>
<div className=' w-72 h-32 rounded-xl bg-green-600 mt-10 pt-6 p-3 text-white ml-5'><span className='font-bold text-xl pl-3'> 3800 DT</span> Gain For This Month <GiChart className='ml-20' size={50} /></div>
<div className='w-72 h-32 rounded-xl bg-amber-400 mt-10 p-3 pt-6 text-white ml-5'><span className='font-bold text-xl pl-3'>15 </span> New Offers For This Month <BsBuildings className=' ml-24' size={50} /> </div>
    </div>
{/** BIDS*/}

<div>

      <div className="mx-auto mt-16 flex">

        {/* Rented User Info Section */}
        <div className=" w-[1200px] ml-12 pl-4 border rounded-r-lg bg-white p-2">
          <h2 className="flex justify-center text-2xl font-bold mb-4"> BIDS CONFIRMATION </h2>
          <hr className="mt-[20px] w-full border-t border-gray-300 my-4" />
          <div>
            {/* Display user information here */}
        
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
    <div className='bg-white text-center w-[1200px] h-[600px] mt-10  ml-12 '>
      <h1 className='text-2xl font-bold pt-3 '> CLICK TO SEE CHARTS </h1>
    <Link href='/Admin/Dashboard'> <img className='mt-10 ml-28 mb-12 rounded shadow-2xl w-[1000px] h-[400px]' src='https://storage.googleapis.com/studio_v_0_0_2/EYN5I21F/_desktop_preview_1566340723976.png'/></Link>
    </div>
    <div></div>

    </div> 
  )
}

export default Admin
