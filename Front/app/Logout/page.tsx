'use client';
import { useRouter } from "next/navigation";
import { signOut } from 'next-auth/react';
export default function Logout() {
  const { push } = useRouter();
  return (

    <div className="fixed top-0 left-0 right-0 bottom-0 text-center flex flex-r items-center justify-center bg-transparent rounded shadow-2xl">
     <div className="bg-white p-11 h-auto w-auto border-4 border-orange-950  rounded shadow-md">
     <img className="w-96 h-auto justify-center" src="https://i.pinimg.com/originals/5f/67/5d/5f675de67cba9ce24c6c26b9fccbe03c.gif"/>  
    
       <p className=" text-xl text-orange-950 font-bold mb-10 mt-6">Are you sure you want to Logout?</p>
      
      <button className="bg-white shadow-lg hover:bg-red-500 text-black px-4 py-2 mr-5 rounded" onClick={() => {
        localStorage.removeItem('userId');
        signOut();  
        push('/SignIn')
      }}>
       YES
      </button>
      <button className="bg-white shadow-lg px-4 py-2 rounded hover:bg-red-500" onClick={()=> push('/home')}>
        NO
      </button>
    </div>
  </div>

  );
}
