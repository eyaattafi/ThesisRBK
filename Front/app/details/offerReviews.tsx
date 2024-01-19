"use client";
import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context';
import axios from 'axios';
import user from '../../types/user';

const OfferReviews = () => {
  const context = useContext(DataContext);
  const [users, setUsers] = useState<user[]>([]);
  const [newReviewBody, setNewReviewBody] = useState('');
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    const userPromises = context?.reviews.map((el) =>
      axios.get(`http://localhost:3000/api/oneUser/${el?.userIduser}`)
    );

    Promise.all(userPromises)
      .then((userResponses) => {
        const userData = userResponses.map((res) => res.data);
        setUsers(userData);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  const handleAddReview = () => {
    const newReview = {
      reviewsBody: newReviewBody,
      offerIdoffer: context?.oneHouse.idoffer,
      userIduser: context?.loggedUser.iduser,
    };

    axios
      .post('http://localhost:3000/api/addreview', newReview)
      .then((res) => {
        console.log(res);
        // Toggle the refresh state to trigger a re-render
        setRefresh((prevRefresh) => !prevRefresh);
        // Clear the input field
        setNewReviewBody('');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col gap-10">
      <h1 className="font-bold text-xl">{context?.reviews.length} reviews</h1>
      <div className="flex flex-row flex-wrap gap-[100px]">
        {context?.reviews.map((el, i: number) => (
          <div key={i} className="w-[480px] h-[200px]">
            <div className="flex flex-row items-center gap-5">
              <img
                className="w-16 h-16 border rounded-[200px]"
                src={users[i]?.userImage}
                alt=""
              />
              <div>
                <h1>{users[i]?.userName}</h1>
                <span className="text-gray-500">date</span>
              </div>
            </div>
            <div>
              <p className="mt-[10px] overflow-hidden">{el.reviewsBody}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center w-[1160px] mt-[100px] gap-4 bg-slate-100 p-8 rounded-lg">
        <input
          className="border border-black rounded w-[800px] p-2"
          placeholder="Add a review"
          type="text"
          value={newReviewBody}
          onChange={(e) => setNewReviewBody(e.target.value)}
        />
        <button
          className="border border-black rounded bg-white p-2"
          onClick={handleAddReview}
        >
          Post
        </button>
      </div>
      <hr className="w-[1160px] border-t border-gray-300 my-4 mt-10" />
    </div>
  );
};

export default OfferReviews;
