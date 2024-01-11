"use client"
import React,{useState} from "react"
import Account from "../../app/Account/page"

import {Container, Paper,TextField,Button,Typography,Grid} from "@mui/material";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import BalconyIcon from '@mui/icons-material/Balcony';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsIcon from '@mui/icons-material/Settings';
import EditIcon from '@mui/icons-material/Edit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SecurityIcon from '@mui/icons-material/Security';
import PsychologyIcon from '@mui/icons-material/Psychology';
import HelpIcon from '@mui/icons-material/Help';
import './Profile.css'

const Profile = () =>{
    const [open, setOpen] = React.useState(true);

const handleClick = () => {
    setOpen(!open);
  };
    return (
      <div>
      <div  className="all">
        <Account/>
        
<div className="side"> 
<div className="manage-my-account"><SettingsIcon/> Setting</div>
<div className="my-profile"><EditIcon/> Edit Profile </div>
<div className="ref"><NotificationsIcon/> Notification</div>
<div className="ref"><SecurityIcon/> Security</div>
<div className="ref" ><PsychologyIcon/> Apprearnce </div>
<div className="ref"><HelpIcon/> Help</div>
</div>

       </div>
</div>

    )
}


export default Profile ;