import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField, Typography } from '@mui/material';
import { Favorite, FavoriteBorderOutlined, FileCopy, ModeCommentOutlined, MoreVert, Send, Share } from '@mui/icons-material';
import React, { useState } from 'react';
import styled from '@emotion/styled';



const postDetails = [{
  avatar: 'a',
  image:{url:"https://mui.com/static/images/cards/paella.jpg" ,alt: "Paella dish",},
  Pname:"Shrimp and Chorizo Paella",
  date:"September 14, 2016",
  description :`This impressive paella is a perfect party dish and a fun meal to cook
  together with your guests. Add 1 cup of frozen peas along with the mussels,
  if you like.`
},
{
  avatar: 'a',
  image:{url:"https://mui.com/static/images/cards/paella.jpg" ,alt: "Paella dish",},
  Pname:"Shrimp and Chorizo Paella",
  date:"September 14, 2016",
  description :`This impressive paella is a perfect party dish and a fun meal to cook
  together with your guests. Add 1 cup of frozen peas along with the mussels,
  if you like.`
},
{
  avatar: 'a',
  image:{url:"https://images.unsplash.com/photo-1626288215937-747af7be5b7b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fDklM0ExNnxlbnwwfHwwfHx8MA%3D%3D" ,alt: "Paella dish",},
  Pname:"Shrimp and Chorizo Paella",
  date:"September 14, 2016",
  description :`This impressive paella is a perfect party dish and a fun meal to cook
  together with your guests. Add 1 cup of frozen peas along with the mussels,
  if you like.`
},
{
  avatar: 'a',
  image:{url:`https://g3.img-dpreview.com/D3C891537B73433FB91ED318050C18F0.jpg`,alt: "Paella dish",},
  Pname:"Shrimp and Chorizo Paella",
  date:"September 14, 2016",
  description :`This impressive paella is a perfect party dish and a fun meal to cook
  together with your guests. Add 1 cup of frozen peas along with the mussels,
  if you like.`
}]

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



const StyledIconButton = styled(IconButton)(({ theme }) => ({
  
  '&:hover': {
    color: theme.palette.primary.main,
  },
  '&:active': {
    color: theme.palette.primary.main,
  },
}));

const Post = () => {
  const [clickedStates, setClickedStates] = useState(postDetails.map(() => false));
  const [readMore,setReadMore]=useState(false)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleToggleClick = (index) => {
    setClickedStates((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <>
      <Box
        display='flex' p='4 4 4 0' sx={{mr:{lg:'120px',md:'75px'}}} flex={4} flexDirection='column' alignItems='center' height='100%' backgroundColor="white" justifyContent='center'
       
      >
        {postDetails.map((post, index) => (
          <Card key={index} sx={{ width: '30rem', margin: '30px', display: 'flex', flexDirection: 'column', boxShadow: 'none', borderTop: '0.5px solid #c7c9c8' }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                  {post.avatar}
                </Avatar>
              }
              action={
                <IconButton onClick={handleOpen} aria-label="settings">
                  <MoreVert />
                </IconButton>
              }
              title={post.Pname}
              subheader={post.date}
            />
            <CardMedia
              component={"img" || "video"}
              height="400rem"
              image={post.image.url}
              alt={post.image.alt}
            />
            <CardContent>
              <Typography onClick={() =>{setReadMore(!readMore)}} variant="body2" color="text.secondary">
                {readMore? post.description : `${post.description.slice(0, 65)}    ...`}
              </Typography>
            </CardContent>
            <CardActions>
              <StyledIconButton aria-label="add to favorites"
                onClick={() => handleToggleClick(index)}
                
              >
                {clickedStates[index] ? (<Favorite sx={{ color: '#F57D1F' }}/>) : (<FavoriteBorderOutlined />)}
              </StyledIconButton>
              <StyledIconButton aria-label="comment">
                <ModeCommentOutlined />
              </StyledIconButton>
              <StyledIconButton aria-label="share">
                <Share />
              </StyledIconButton>
            </CardActions>
            <Box
              width='100%'
              display='flex'
              justifyContent='center'
              alignItems='center'
              sx={{ position: 'relative' }}
            >
              <TextField
                id="standard-multiline-flexible"
                multiline
                maxRows={4}
                variant="standard"
                placeholder='Comment..'
                sx={{
                  paddingRight: '40px',
                  flex: 1, 
                  '& label.Mui-focused': {
                    color: 'white',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: 'orange',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white',
                    },
                    '&:hover fieldset': {
                      borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'orange',
                    },
                  },
                }}
              />
              <IconButton
                sx={{
                  position: 'absolute',
                  right: '0',
                  marginLeft: '10px', 
                }}
              >
                <Send />
              </IconButton>
            </Box>
          </Card>
        ))}
         <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogActions sx={{display:'grid'}}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
      </Box>
    </>
  );
};

export default Post;
