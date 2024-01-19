import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const Settings = () => {
  return (
    <div className='ml-0 mt-10'>
          <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      aria-label="contacts"
    >

        <ListItemButton>
          <ListItemText inset primary="Notification" />
        </ListItemButton>

        <ListItemButton>
          <ListItemText inset primary="Change My Email" />
        </ListItemButton>

        <ListItemButton>
          <ListItemText primary="Change My Password" />
        </ListItemButton>
  
        <ListItemButton>
          <ListItemText inset primary="Close My Session" />
        </ListItemButton>


    </List>
    </div>
  )
}

export default Settings
