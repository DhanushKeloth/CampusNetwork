
import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Box, Drawer, IconButton, InputAdornment, InputBase, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import { Notifications, Search } from '@mui/icons-material';
import RightBar from '../RightBar/RightBar';
import LeftBar from '../LeftBar/LeftBar';
import { StyledIcons, StyledSearch, StyledToolbar } from './Styled';
import { Link } from 'react-router-dom';


const NavBar = () => {
  const theme = useTheme();
  const isNotMobile = useMediaQuery('(min-width:600px)');

  return (
    <>
     
      <AppBar 
        position='sticky'
        sx={{ 
          backgroundColor:'#F57D1F',
         
        }}
      >
        {/* tools */}
        <StyledToolbar sx={{  marginLeft: { md: '100px', lg: '180px', sm: '90px' },
         }}>
          {isNotMobile ? 'CampusNetwork' : <AcUnitOutlinedIcon sx={{color:'white'}}/>}
          <StyledSearch >
  <InputBase  sx={{ color: 'white',}} placeholder="Search..." />
  <IconButton sx={{ color: 'white' }}>
    <Search />
  </IconButton>
</StyledSearch>
<Box display='flex' gap={5} sx={{justifyContent:{sm:'space-between',xs:'flex-end'}}} alignItems='center'>
<StyledIcons >
            <Badge badgeContent={17} color="error">
              <Notifications />
            </Badge>
          </StyledIcons>
         {isNotMobile && ( <Link to='/profile'><Avatar sx={{boxShadow:'-1px 1px 3px black'}} alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />   </Link>)} 
       
        
</Box>
         
        </StyledToolbar>
      </AppBar>
      
      
    </>
  );
}

export default NavBar