"use client";
// import useState from "react";
import "./Account.css";
import Link from "next/link";
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import PaymentIcon from '@mui/icons-material/Payment'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications'

const Profile = () => {
  return (
    
    <div className="profile-wrapper">
      <div className="profile-content">
        <div className="profile-header">
          <h2>Account</h2>
          <p>
            Hammami Mohamed Amine, hammamimin@gmail.com.
            <Link href="/">Go To Profile</Link>
          </p>
        </div>
        <div className="profile-container">
          <div className="card">
            <div className="icon"><AccountBoxIcon/></div>
            <div className="desc">
              <p> Personal Info</p>
              <p>
                Provide personel details , and how we can reach you .
              </p>
            </div>
          </div>
          <div className="card">
            <div className="icon"><PaymentIcon/></div>
            <div className="desc">
              <p>Paiment & Payouts </p>
              <p>
                Review paiment , payouts ,coupons and git cards.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="icon"><RemoveRedEyeIcon/></div>
            <div className="desc">
              <p>Privacy & Sharing</p>
              <p>
                Manage your personal data , connected , services and data sharing setting .
              </p>
            </div>
          </div>
          <div className="card">
            <div className="icon"><CircleNotificationsIcon/></div>
            <div className="desc">
              <p>Notifications</p>
              <p>
              Choose notifications and preferences , and how you want to be contacted .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
