 "use client";

import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import Link from 'next/link'
import { useState } from "react";
import './SignIn.css'


export default function SignIn() {
  
  const [userId, setUserId] = useState<string | null>(null);
  const { push } = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

console.log("iduser", userId)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
if((!email) || (!password)) {
  alert("All fields are required")
}
    try {
      const logUser  = await axios.post("http://localhost:3000/api/login", { userEmail: email, userPassword: password });

      localStorage.setItem('userId', logUser.data.iduser);
      if(logUser.data.iduser) {push("/home")}
else{
  alert("Please check your entred details")
  push("/SignIn")}
    } catch (e) {      
      const error = e as AxiosError;  

      alert(error.message);
    }
  };

//Function de get the id of the user from localstorage// 
  const getUserIdFromLocalStorage = () => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      
      setUserId(storedUserId);
    }
  };

  return (
      <div className="grid grid-cols-2 ml-24">
        <img className=' mt-32 shadow-lg rounded ml-10 mb-24' src="https://i.pinimg.com/originals/24/e8/f0/24e8f08ba83e34213572acbdb1061bf0.jpg"/>
        <div className="flex flex-col gap-10 w-96 mt-32 ml-24 text-xl">
        <h1 className=" font-bold text-2xl">Log in to RentaVilla</h1>
<h1 className="divS26">Enter your details below</h1>
<form onSubmit={handleSubmit} className="mt-8">
         
      <input
        type="text"
        placeholder="Email"
        className="h-12 w-full bg-white rounded shadow-lg"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="h-12 w-full bg-white rounded shadow-lg mt-12 mb-14"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
       
        <button className="divS33 w-full" onClick={()=>getUserIdFromLocalStorage()}>
          Log In
        </button>
      <div>
        <Link className="text-sm mt-3 text-center" href="/SignUp">
          You Don't Have an Account? <span className="underline font-bold font-red-500 hover:">Register Now</span>
        </Link></div>
      </form>  
      </div>
            </div>
      );
}
