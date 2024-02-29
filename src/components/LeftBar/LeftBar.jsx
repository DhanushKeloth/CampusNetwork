import { useTheme } from '@emotion/react'
import { Add, AddCircleOutlineOutlined, Drafts, ExpandLess, ExpandMore, ForumOutlined, Home, Inbox, LogoDev, PermIdentityOutlined, StarBorder } from '@mui/icons-material'
import { Box, Button, Collapse, Dialog, DialogActions, Drawer, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CreatePost } from '../Actions'

const routes = [{
  Home :{
    label:'Home',
    route:'/',
    logo : (<Home/>)
  },
  Forum :{
    label:'Forum',
    route:'/forum',
    logo:(<ForumOutlined/>)
  },
  Profile:{
    label:'Profile',
    route:'/profile',
    logo:(<PermIdentityOutlined/>)
  },

}]


const LeftBar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const isLarge = useMediaQuery('(min-width:1200px)')
  const handleClick=()=>{}
  return (
    <Box>
   
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: { md: '100px', lg: '180px', sm: '90px' } },
      }}
      open
    >
     <Box height={64}>
      hfhf
    </Box>
    <hr/>
      <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', textAlign:'center'}}
      component="nav"
      aria-labelledby="nested-list-subheader"
     
    > {routes.map((routeGroup) =>
            Object.entries(routeGroup).map(([key, value]) => (
              <ListItemButton key={key} sx={{margin:'10px'}}>
              
                <Link to={value.route}>
                  <Box sx={{ display: 'flex',justifyContent:'center', alignItems: 'center' }}>
                  <ListItemIcon >
                  {value.logo}
       </ListItemIcon>
                    
                    {isLarge && (
                      <ListItemText sx={{ display: { sm: 'none', md: 'none', lg: 'block' } }} primary={value.label} />
                    )}
                  </Box>
                </Link>
              </ListItemButton>
            ))
          )}
          <ListItemButton onClick={handleOpen} sx={{margin:'10px'}}>
            <ListItemIcon>
              <AddCircleOutlineOutlined/>
            </ListItemIcon>
            <ListItemText sx={{ display: { sm: 'none', md: 'none', lg: 'block' } }}>Create</ListItemText>
          </ListItemButton>
    </List>
    </Drawer>
    <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogActions >
          <CreatePost/>
        </DialogActions>
      </Dialog>
  </Box>

  )
}

export default LeftBar