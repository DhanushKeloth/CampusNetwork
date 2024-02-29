import { Box, Tab, Tabs, Typography, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Post from '../Feed/Post';
import Public from './Public';
import Mine from './Mine';

const Forum = () => {
  const [value, setValue] = useState("1");

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handlePost = () => {
   
    console.log('Post button clicked');
  };

  const handleReply = () => {
    console.log('Reply button clicked');
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList centered onChange={handleChange}>
            <Tab label="Public" value="1" />
            <Tab label="My Questions" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
        <Public/>
        
        </TabPanel>
        <TabPanel value="2">
       <Mine/>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Forum;
