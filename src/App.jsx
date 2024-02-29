import { Box, Stack } from '@mui/material';
import { Feed, Forum, LeftBar, NavBar, Profile, RightBar } from './components';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Box>
      <Stack direction="row">
        <LeftBar />
        <Stack direction="column" flex={10}>
          <NavBar />
        
          <Stack direction="row" 
        sx={{ marginLeft: { md: ' 100px', lg: '180px', xl: '200px', sm: '90px' }, marginRight: { lg: '180px', xl: '180px' }, marginBottom: "5px", }}>
          <Routes >
        <Route path="/" element={<Feed/>} />
        <Route path='/forum' element={<Forum/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
          </Stack>
        </Stack>
        <RightBar sx={{height: '100%'}} />
      </Stack>
      
      
    </Box>
  );
}

export default App;
