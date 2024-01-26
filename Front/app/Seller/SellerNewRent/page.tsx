import React from "react"
import Link from "next/link"

// import AdressSeller from "../../Seller/AdressSeller"

import HomeIcon from '@mui/icons-material/Home';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import BedIcon from '@mui/icons-material/Bed';
import PlaceIcon from '@mui/icons-material/Place';
import './AddRentSeller.css'
const AddRentSeller = () =>{
    return (
        <div className="all">
        <div className="q">What type accommodation will be available to guestes ?</div>
        <div className="home"> Entire home <div className="iconHome"> </div> <HomeIcon/> </div>
        <div className="bed">One Bedroom <div className="iconHome"></div> <BedroomChildIcon/> </div>
        <div className="room">Shared room  <div className="iconHome"> </div> <BedIcon/></div>
        <div className="button"><button><Link href="/Seller/AdressSeller">Next</Link></button></div>
</div>



     




     
      
    )
}

export default AddRentSeller ;