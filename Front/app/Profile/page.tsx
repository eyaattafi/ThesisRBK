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
       
        <div className="all">
      <Account/>
            <div>
             <div className="not"><CircleNotificationsIcon/></div>
        <Container maxWidth="sm" style={{ marginTop: "100px" }}>
      <Paper
        style={{
          padding: "32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" color="#5f2e26" gutterBottom>
          Edit Your Profile
        </Typography>

        <Grid container spacing={2} style={{ marginBottom: "16px" }}>
          <Grid item xs={6}>
            <TextField label="First Name" />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Last Name" fullWidth />
          </Grid>
          
          <Grid item xs={12}>
            
            <TextField label="Email" fullWidth />
          </Grid>
          <Grid item xs={12}>
             <TextField label="Adress" fullWidth/>
          </Grid>
          
          <Grid item xs={12}>
            <TextField label="Contact Number" fullWidth/>

        <List
      sx={{ width: '50%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader" >
     
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <LocationCityIcon />
        </ListItemIcon>
        <ListItemText primary="City" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>


    <List
      sx={{ width: '50%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader" >
     
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <BalconyIcon />
        </ListItemIcon>
        <ListItemText primary="State" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>


          </Grid>
          <Grid item xs={12}>
            <TextField
              type="password"
              label="New Password"
              fullWidth
            
            />
          </Grid>
        
        </Grid>
  <div >
    
    <button className="button" type="submit">Save</button>
    
    <button className="button1" type="reset">Cancel</button>
    
        </div>
      </Paper>
    </Container>
    <div>
    
    </div>
    </div>


<div className="side"> 

<div className="manage-my-account"><SettingsIcon/> Setting</div>
  
  
    <div className="my-profile"><EditIcon/> Edit Profile </div>
    <div className="ref"><NotificationsIcon/> Notification</div>
    <div className="ref"><SecurityIcon/> Security</div>
    <div className="ref" ><PsychologyIcon/> Apprearnce </div>
    <div className="ref"><HelpIcon/> Help</div>
  </div>
 
   
  </div>

  
    )
}


export default Profile ;