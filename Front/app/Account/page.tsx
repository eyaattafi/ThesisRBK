import React from "react"
import Link from "next/link"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PaymentIcon from '@mui/icons-material/Payment';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import './Account.css'


const Account =()=>{
  
       
      
    return (
        <div>
              <div className="acc">Account</div>
        <div className="div1"><h1>Hello , im eya attafi ,eyaattafi7@gmail.com . <Link href="/">Go to profile</Link></h1></div>
        <div className="box">
        <AccountBoxIcon/>  <h1> 
           <Link href="/Profile">Personal Info</Link> </h1>
          Provide personal details , and how we can reach you .
          </div>
          <div className="box1">
            <RemoveRedEyeIcon/>
            <h1>Privacy and sharing</h1>
          Manage your personal data, connected services , and data sharing setting.
            </div>
            <div className="box2">
            <PaymentIcon/>
            <h1>Payments & Payouts</h1>
          Review payments, payouts ,coupons and gift cards.
                    </div>
        <div className="box3">
            <CircleNotificationsIcon/>
            <h1>Notification</h1>
         Choose notification prefecences,and how to be contacted .
                    </div>
 <div/>
</div>
    )
}

export default Account ;