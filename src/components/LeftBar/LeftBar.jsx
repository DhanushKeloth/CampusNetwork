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
  const isMobile=useMediaQuery('(max-width:600px)')
  const handleClick=()=>{}
  return (
     !isMobile ? (<Box>
     
      <Drawer
        variant="permanent"
        sx={{
       
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
                
                <Link to={value.route}>
                <ListItemButton key={key} sx={{margin:'10px'}}>
                
                    <Box sx={{ display: 'flex',justifyContent:'center', alignItems: 'center' }}>
                    <ListItemIcon >
                    {value.logo}
         </ListItemIcon>
                      
                      {isLarge && (
                        <ListItemText sx={{ display: { sm: 'none', md: 'none', lg: 'block' } }} primary={value.label} />
                      )}
                    </Box>
                 
                </ListItemButton> </Link>
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
    </Box>) : (
      <Box position='fixed' bgcolor='black' width='100%' height='64px' bottom>


      </Box>
    )
    

  )
}

export default LeftBar