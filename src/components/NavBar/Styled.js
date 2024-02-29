import styled from "@emotion/styled";
import { Toolbar } from "@mui/material";


export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  
  justifyContent: 'space-between',
});

export const StyledSearch = styled('div')(({ theme }) => ({
  display: 'flex',
  color:'white',
  alignItems: 'center',
  backgroundColor: 'rgba(0,0, 0, 0.1)',
  padding: '0 10px',
  borderRadius: '5px', 
  '& .MuiInputBase-root': {
    flexGrow: 1,
  },
  '& .MuiInputBase-input': {
    padding: '8px 0', 
  },
}));

export const StyledIcons = styled('div')(({ theme }) => ({
  height: '15px',
  color:'white',
  margin:'2px',
  padding: '0 10px',
}));
