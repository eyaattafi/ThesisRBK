"use client";

import  React from "react";
import {useState} from "react" ;
import axios from "axios"
import "./Profile.css";
import Link from "next/link";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { NextPage } from 'next';
import Satisfaction from "../Satisfaction";
// import Payment from "../payment/page";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 716,
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  border: "none",
  p: 4,
  borderRadius: "0.50rem",
};

interface ProfileProps {
  user: {
    iduser: number;
  } | null;
}


const Profile: NextPage<ProfileProps> = ({user}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [userName,setUserName] = useState<String>("")
  const [firstName,setFirstName] = useState<String>("")
  const [lastName,setLastName] = useState<String>("")
  const [userEmail,setUserEmail] = useState<String>("")
  const [userPassword,setUserPassword] = useState<String>("")
  const [userConfirmPass,setUserConfirmPass] = useState<String>("")
  const [image,setImage] = useState<String>("")
  const [adress,setAdress] = useState<String>("")
  const [contactNumber,setContactNumber] = useState<Number>(0)
  const [city,setCity] = useState<String>("")
  const [state,setState] = useState<String>("")

  const id = user?.iduser || 0;

  const handleInputChange = (e:any, setStateFunction:any) => {
    setStateFunction(e.target.value);
  }

  const handleUpdateProfile = async () => {
    const profileToUpdate = {
      userName: `${firstName} ${lastName}`,
      usereEmail: userEmail,
      userPassword: userPassword,
      userConfirmPass: userConfirmPass,
      city: city,
      state: state,
      contactNumber: contactNumber,
      address: adress
    };
  
    try {
      const update = await axios.put(`http://localhost:3000/api/updateUser/${id}`, profileToUpdate);
      console.log("Profile updated ", update.data);
      alert("Updated successfully");
    } catch (error) {
      alert("Failed to update");
    } 
  };
  
  
  return (
    <div className="profile-wrapper">
      <div className="profile-content">
        <div className="profile-header">
          <h2> Profile </h2>
        </div>
        <div className="profile-container">
          <div className="card" onClick={handleOpen}>
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M10.8332 11.9995H29.1665C30.129 11.9995 30.9998 12.844 30.9998 13.7773V26.2217C30.9998 27.1551 30.129 27.9995 29.1665 27.9995H10.8332C9.87065 27.9995 8.99982 27.1551 8.99982 26.2217V13.7773C8.99982 12.844 9.87065 11.9995 10.8332 11.9995ZM21.8331 14.6662V15.5551H29.1665V14.6662H21.8331ZM21.8331 16.444V17.3328H28.7082H29.1665V16.444H21.8331ZM21.8331 18.2217V19.1106H28.2498V18.2217H21.8331ZM16.3332 21.6973C14.4998 21.6973 10.8332 22.6662 10.8332 24.444V25.3328H21.8331V24.444C21.8331 22.6662 18.1665 21.6973 16.3332 21.6973ZM16.3332 14.6662C15.6038 14.6662 14.9043 14.9471 14.3886 15.4472C13.8729 15.9473 13.5832 16.6256 13.5832 17.3328C13.5832 18.0401 13.8729 18.7184 14.3886 19.2185C14.9043 19.7186 15.6038 19.9995 16.3332 19.9995C17.0625 19.9995 17.762 19.7186 18.2777 19.2185C18.7934 18.7184 19.0831 18.0401 19.0831 17.3328C19.0831 16.6256 18.7934 15.9473 18.2777 15.4472C17.762 14.9471 17.0625 14.6662 16.3332 14.6662Z"
                  fill="#686B6F"
                />
              </svg>
            </div>
            <div className="desc">
              <p>Personal Info</p>
              <p>
              Provide personel details , and how we can reach you .
              </p>
            </div>
          </div>
          <div className="card" >
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M28.8 15.5H11.2V13.25H28.8V15.5ZM28.8 26.75H11.2V20H28.8V26.75ZM28.8 11H11.2C9.979 11 9 12.0013 9 13.25V26.75C9 27.3467 9.23178 27.919 9.64437 28.341C10.0569 28.7629 10.6165 29 11.2 29H28.8C29.3835 29 29.9431 28.7629 30.3556 28.341C30.7682 27.919 31 27.3467 31 26.75V13.25C31 12.0013 30.01 11 28.8 11Z"
                  fill="#686B6F"
                />
              </svg>
            </div>
            <Link href="/payment" > <div className="desc" >
             
              <p >Payment & Payouts</p>
              <p>
              Review paiment , payouts ,coupons and git cards.
              </p>
            </div></Link>
          </div>
          <div className="card">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M20 17.2C20.7233 17.2 21.417 17.495 21.9285 18.0201C22.4399 18.5452 22.7273 19.2574 22.7273 20C22.7273 20.7426 22.4399 21.4548 21.9285 21.9799C21.417 22.505 20.7233 22.8 20 22.8C19.2767 22.8 18.583 22.505 18.0715 21.9799C17.5601 21.4548 17.2727 20.7426 17.2727 20C17.2727 19.2574 17.5601 18.5452 18.0715 18.0201C18.583 17.495 19.2767 17.2 20 17.2ZM20 13C24.5455 13 28.4273 15.9027 30 20C28.4273 24.0973 24.5455 27 20 27C15.4545 27 11.5727 24.0973 10 20C11.5727 15.9027 15.4545 13 20 13ZM11.9818 20C13.4818 23.136 16.5818 25.1333 20 25.1333C23.4182 25.1333 26.5182 23.136 28.0182 20C26.5182 16.864 23.4182 14.8667 20 14.8667C16.5818 14.8667 13.4818 16.864 11.9818 20Z"
                  fill="#686B6F"
                />
              </svg>
            </div>
            <Link href="Privacy">  <div className="desc">
              <p>Privacy & Sharing</p>
              <p>
              Manage your personal data , connected , services and data sharing setting .
              </p>
            </div></Link>
          </div>
          <div className="card">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M20.0157 31C20.1626 31 20.299 31 20.4354 30.956C21.1173 30.802 21.6838 30.318 21.9461 29.658C22.051 29.394 22.114 29.097 22.114 28.8H17.9175C17.9175 29.3835 18.1386 29.9431 18.5321 30.3556C18.9256 30.7682 19.4593 31 20.0157 31ZM26.835 18.35C26.835 14.973 24.5899 12.146 21.5894 11.398V10.65C21.5894 10.2124 21.4236 9.79271 21.1285 9.48327C20.8334 9.17384 20.4331 9 20.0157 9C19.5984 9 19.1981 9.17384 18.903 9.48327C18.6079 9.79271 18.4421 10.2124 18.4421 10.65V11.398C15.4311 12.146 13.1965 14.973 13.1965 18.35V24.4L11.0982 26.6V27.7H28.9332V26.6L26.835 24.4V18.35ZM28.9018 17.8H31C30.8426 14.269 29.185 11.167 26.6776 9.165L25.1774 10.738C27.3176 12.3 28.7444 14.885 28.9018 17.8ZM14.8541 10.738L13.3538 9.165C10.8464 11.167 9.18884 14.269 9 17.8H11.0982C11.2871 14.885 12.7139 12.3 14.8541 10.738Z"
                  fill="#686B6F"
                />
              </svg>
            </div>
            <Link href="/Notification">  <div className="desc">
              <p>Notifications</p>
              <p>
              Choose notifications and preferences , and how you want to be contacted 
              </p>
            </div></Link>
          </div>
        </div>
      </div>
      <Modal
        open={open}

        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="input-wrapper">
            <div className="title">
              <p>Edit Profile</p>
            </div>
            <div className="double-input">
              <div className="coolinput">
                <label htmlFor="input" className="text">
                  First Name:
                </label>
                <input
                  type="text"
                  placeholder="Write here..."
                  name="input"
                  className="input"
                  
                  onChange={(e:any) => handleInputChange(e,setFirstName)}
                />
              </div>
              <div className="coolinput">
                <label htmlFor="input" className="text">
                  Last Name:
                </label>
                <input
                  type="text"
                  placeholder="Write here..."
                  name="input"
                  className="input"
                  onChange={(e:any) => handleInputChange(e,setLastName)}
                />
              </div>
            </div>
            <div className="coolinput">
              <label htmlFor="input" className="text">
                Email:
              </label>
              <input
                type="text"
                placeholder="Write here..."
                name="input"
                className="input"
                onChange={(e:any) => handleInputChange(e,setUserEmail)}
              />
            </div>
            <div className="coolinput">
              <label htmlFor="input" className="text">
                Adress:
              </label>
              <input
                type="text"
                placeholder="Write here..."
                name="input"
                className="input"
                onChange={(e:any) => handleInputChange(e,setAdress)}
              />
            </div>
            <div className="coolinput">
              <label htmlFor="input" className="text">
                Contact Number :
              </label>
              <input
                type="text"
                placeholder="Write here..."
                name="input"
                className="input"
                onChange={(e:any) => handleInputChange(e,setContactNumber)}
              />
            </div>
            <div className="double-input">
              <div className="coolinput">
                <label htmlFor="input" className="text">
                  City:
                </label>
                <input
                  type="text"
                  placeholder="Write here..."
                  name="input"
                  className="input"
                  onChange={(e:any) => handleInputChange(e,setCity)}
                />
              </div>
              <div className="coolinput">
                <label htmlFor="input" className="text">
                  State:
                </label>
                <input
                  type="text"
                  placeholder="Write here..."
                  name="input"
                  className="input"
                  onChange={(e:any) => handleInputChange(e,setState)}
                />
              </div>
            </div>
            <div className="coolinput">
              <label htmlFor="input" className="text">
                Password :
              </label>
              <input
                type="text"
                placeholder="Write here..."
                name="input"
                className="input"
                onChange={(e:any) => handleInputChange(e,setUserPassword)}
              />
            </div>
            <div className="coolinput">
              <label htmlFor="input" className="text">
               Confirm Password :
              </label>
              <input
                type="text"
                placeholder="Write here..."
                name="input"
                className="input"
                onChange={(e:any) => handleInputChange(e,setUserPassword)}
              />
            </div>
            <div className="action-btns">
              <button type="reset"
              onClick={()=>{handleClose()
              }}>Cancel</button>
              
              <button type="submit"onClick={handleUpdateProfile}>Save</button>
            </div>
          </div>
        </Box>
      </Modal>
      <Satisfaction/>

    </div>
  );
} 

export default Profile ;
