"use client"
import React,{useState} from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useRouter } from "next/navigation";
import axios,{ AxiosError } from 'axios'
import './SignIn.css'

 const SignIn = () =>{
  const [userId, setUserId] = useState<string | null>(null);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const { push } = useRouter();
  const handleSubmit = async (event:React.MouseEvent<HTMLElement> ) => {
    event.preventDefault();

    try {
      const logUser  = await axios.post("http://localhost:3000/api/login", { userEmail: email, userPassword: password });

      alert(JSON.stringify(logUser));
      localStorage.setItem('userId', logUser.data.UserID);
      console.log("data ", logUser)
if(logUser.data.userEmail === email) {
  push("/Home")
}   } catch (e) {
      const error = e as AxiosError;

      alert(error.message);
    }
  };


  const getUserIdFromLocalStorage = () => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  };


return (
  

<div>
    <div className="divSignIn">
        <div className="divS21">
          <div className="divS22">
            
            <div className="col-2">
              <div className="divS24">
                <div className="divS25">Log in to RentaVilla</div>
                <div className="divS26">Enter your details below</div>
                <div className="divS29">
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="standard-basic"
                      label="Email"
                      variant="standard"
                    /> 
                   </Box>
                </div>
                <div className="divS31">
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="standard-basic"
                      label="Password"
                      variant="standard"
                    />
                  </Box>
                </div>
                <button className="divS33" onClick={handleSubmit} > Log In </button>

                <div className="divS37">
                  <Link href="/SignUp">
                    {/* <a className="divS38">Don't have an account? Sign Up</a> */}
                    Don't have an account? Sign Up
                  </Link>
                </div>
                <div  className="divS35" ><GoogleIcon/> Sign up with Google </div>
                <div  className="divS34" > <FacebookIcon/> Log in with Facebook </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      </div>
)

 }


 export default SignIn