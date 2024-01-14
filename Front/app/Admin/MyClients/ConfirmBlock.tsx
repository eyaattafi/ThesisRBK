import React from 'react';

interface ConfirmBlockProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmBlock: React.FC <ConfirmBlockProps> = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 text-center flex items-center justify-center bg-transparent rounded shadow-2xl">
      <div className="bg-white p-11 h-1/3 w-1/3 border-4 border-orange-950  rounded shadow-md">
        <p className=" text-xl text-orange-950 font-bold mb-10 mt-6">Are you sure you want to Block this user? This process is not reciprocal!</p>
        <button className="bg-white shadow-lg hover:bg-red-500 text-black px-4 py-2 mr-5 rounded" onClick={onConfirm}>
          Confirm
        </button>
        <button className="bg-white shadow-lg px-4 py-2 rounded hover:bg-red-500" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmBlock;