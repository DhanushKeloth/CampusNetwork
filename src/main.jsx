import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createTheme,ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom';

const theme=createTheme({
  margins:{
     ml:{
      md:'100px',lg:'150px',sm:'90px'
     },
     mr:{
      lg:'180px'
     },
    
  },
  palette: {
    primary: {
      main: '#F57D1F', // Use this color for the indicator
    }}
});

ReactDOM.createRoot(document.getElementById('root')).render(

  <ThemeProvider theme={theme}>
  <BrowserRouter><App /></BrowserRouter></ThemeProvider>
    
 
)