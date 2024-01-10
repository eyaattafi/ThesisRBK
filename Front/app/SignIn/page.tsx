"use client "
import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import './SignIn.css'

 const SignIn = () =>{
   



return (
  

<div>
    <div className="divSignIn">
        <div className="divS21">
          <div className="divS22">
            
            <div className="col-2">
              <div className="divS24">
                <div className="divS25">Log in to Exclusive</div>
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
                <div  className="divS33" > Log In </div>

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