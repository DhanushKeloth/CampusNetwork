import { LogoDev } from '@mui/icons-material';
import { Box, Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';

const RightBar = () => {
  return (
    <Drawer anchor='right' variant="permanent" sx={{ '&.MuiDrawer-root .MuiDrawer-paper': { marginTop: '67px', width: {lg:'300px'}} }}>
      <Box flex={2} sx={{ display: { xs: 'none', md: 'block' }, height: '100%' }} bgcolor='skyblue'>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', textAlign: 'center' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton sx={{ justifyContent: 'center' }}>
            <LogoDev sx={{ width: 24, height: 24, marginRight: 2 }} />
            <ListItemText sx={{ display: { sm: 'none', md: 'none', lg: 'block' } }} primary="Sent mail" />
          </ListItemButton>
          <ListItemButton sx={{ justifyContent: 'center' }}>
            <LogoDev sx={{ width: 24, height: 24, marginRight: 2 }} />
            <ListItemText sx={{ display: { sm: 'none', md: 'none', lg: 'block' } }} primary="Sent mail" />
          </ListItemButton>
          <ListItemButton sx={{ justifyContent: 'center' }}>
            <LogoDev sx={{ width: 24, height: 24, marginRight: 2 }} />
            <ListItemText sx={{ display: { sm: 'none', md: 'none', lg: 'block' } }} primary="Sent mail" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
}

export default RightBar;
