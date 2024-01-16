"use client";

import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import Link from 'next/link'
import react ,{ useState } from "react";

import './SignUp.css'


export default function SignUp() {
  
  const [userId, setUserId] = useState<string | null>(null);
  const { push } = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [userName,setUserName] = useState<string>('')
  const [error, setError] = useState<string>('');


console.log(error)
//Function de get the id of the user from localstorage// 
  const getUserIdFromLocalStorage = () => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  };


const handleSubmit = async (e :  React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!userName || !email || !password) {
    setError("All fields are necessary.");
    return;
  }

  try {
    const resUserExists = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const { user } = await resUserExists.json();

    if (user) {
      setError("User already exists.");
      return;
    }

    const res = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName : userName,
        userEmail: email,
        userPassword: password
      }),
    });
console.log(res);

    if (res.ok) {

      push("/SignIn");

    } else {
      console.log("User registration failed.");
    }
  } catch (error) {
    console.log("Error during registration: ", error);
  }
};

  return (
      <div className="grid grid-cols-2 ml-24">
        <img className=' mt-32 shadow-lg rounded ml-10 mb-24' src="https://i.pinimg.com/originals/24/e8/f0/24e8f08ba83e34213572acbdb1061bf0.jpg"/>
        <div className="flex flex-col gap-6 w-96 mt-32 ml-24 text-xl">
        <h1 className=" font-bold text-2xl">Sign Up to RentaVilla</h1>
<h1 className="divS26">Enter your details below</h1>
<form onSubmit={(e)=>handleSubmit(e)} className="">
<input
        type="text"
        placeholder="UserName"
        className="h-12 w-full bg-white rounded shadow-lg mb-8"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />    
      <input
        type="text"
        placeholder="Email"
        className="h-12 w-full bg-white rounded shadow-lg"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="h-12 w-full bg-white rounded shadow-lg mt-12 mb-8"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
       
        <button className="divS33 w-full" onClick={()=>getUserIdFromLocalStorage()}>
        Register
        </button>
      <div>
        <Link className="text-sm mt-3 text-center" href="/SignIn">
          You have already an Account? <span className="underline font-bold font-red-500 hover:">Sign In </span>
        </Link></div>
      </form>  
      </div>
            </div>
      );
}
