"use client";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import Link from 'next/link'
import { useState } from "react";
import '../SignIn/SignIn.css'


export default function LogAdmin() {
  
  const { push } = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');



  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
if((!email) || (!password)) {
  alert("All fields are required")
}

    try {
      const logadmin  = await axios.post("http://localhost:3000/api/logAdmin", { adminEmail: email, adminPassword: password });

      if(logadmin.data.idadmin) {push("/Admin")}
else{
  alert("Please check your entred details")
  push("/LogAdmin")}
    } catch (e) {      
      const error = e as AxiosError;  

      alert(error.message);
    }
  };


  return (
      <div className="grid grid-cols-2 ml-24">
        <img className=' mt-32 shadow-lg rounded ml-10 mb-24' src="https://i.pinimg.com/originals/24/e8/f0/24e8f08ba83e34213572acbdb1061bf0.jpg"/>
        <div className="flex flex-col gap-10 w-96 mt-32 ml-24 text-xl">
        <h1 className=" font-bold text-2xl">Log into Administration</h1>
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
       
        <button className="divS33 w-full" >
          Log In
        </button>

      </form>  
      </div>
            </div>
      );
}
