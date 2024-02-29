import React, { useState } from 'react';
import { Avatar, Box, CardMedia, Grid, Typography, Stack } from '@mui/material';
import styled from '@emotion/styled';

const Container = styled('div')({
  padding: '16px',
  marginRight:'120px',
  textAlign: 'center',
  '@media (max-width: 900px)': {
    textAlign: 'left', // Adjust layout for smaller screens
    marginRight:'0'
  },
  '@media (min-width: 900px) and (max-width: 1200px)': {
    marginRight: '75px',
}, })

const ProfilePicture = styled('div')({
  marginBottom: '16px',
  
});

const Bio = styled(Typography)({
  marginBottom: '16px',
});

const PostImage = styled(CardMedia)({
  width: '100%',
  height: 'auto',
  borderRadius:'6px'
});

const Stats = styled(Stack)({
 
  justifyContent: 'space-evenly',
});

const StatItem = styled(Typography)({
  fontSize: '14px',
});

const Profile = () => {
  const [profileData, setProfileData] = useState({

    username: 'your_username',
    profilePicture:'profilePicture', 
    fullName: 'hahaha', 
    bio: 'This is my bio',
    followers: 1000, 
    following: 500,
    posts: [
      { id: 1, image: 'https://mui.com/static/images/cards/contemplative-reptile.jpg' },
      { id: 2, image: 'https://mui.com/static/images/cards/paella.jpg' },
      { id: 3, image: 'https://mui.com/static/images/cards/contemplative-reptile.jpg' },
      { id: 4, image: 'https://mui.com/static/images/cards/paella.jpg' },
      { id: 1, image: 'https://mui.com/static/images/cards/contemplative-reptile.jpg' },
      { id: 2, image: 'https://mui.com/static/images/cards/paella.jpg' },
      { id: 3, image: 'https://mui.com/static/images/cards/contemplative-reptile.jpg' },
      { id: 4, image: 'https://mui.com/static/images/cards/paella.jpg' },      { id: 1, image: 'https://mui.com/static/images/cards/contemplative-reptile.jpg' },
      { id: 2, image: 'https://mui.com/static/images/cards/paella.jpg' },
      { id: 3, image: 'https://mui.com/static/images/cards/contemplative-reptile.jpg' },
      { id: 4, image: 'https://mui.com/static/images/cards/paella.jpg' },
      // ...
    ],
  });

  return (
    <Container>
     
     
      <Stack display="flex" alignItems="center" justifyContent="center"  border='1px solid #e5e1e4'  marginBottom={1}>
        <ProfilePicture>
          <Avatar sx={{height:'8em', width:{xs:'8em'}}}  src={profileData.profilePicture} alt="Profile picture" />
        </ProfilePicture>
        <Stack textAlign='center'> {/* Profile picture, username, and bio */}
        <Stack ml={2} >
          <Typography variant="h6">{profileData.username}</Typography>
          <Typography variant="body2">{profileData.fullName}</Typography>
        </Stack>
        <Bio variant="body1">{profileData.bio}</Bio>
      </Stack>
      </Stack>

      {/* Stats: followers, following, and posts */}
     
      <Stats direction="row" borderRadius={3} bgcolor='gray' paddingBottom={2} paddingTop={2} marginBottom={2}>
        <StatItem>
          <b>{profileData.followers}</b> Followers
        </StatItem>
        <StatItem>
          <b>{profileData.following}</b> Following
        </StatItem>
        <StatItem>
          <b>{profileData.posts.length}</b> Posts
        </StatItem>
      </Stats>
      <Stack  border='1px solid #e5e1e4'  >
      {/* Grid of posts */}
      <Grid container spacing={1}>
        {profileData.posts.map((post) => (
          <Grid item key={post.id} xs={12} sm ={6} md={4} xl={4}>
            <PostImage component="img" image={post.image} alt={`Post ${post.id}`}  />
          </Grid>
        ))}
      </Grid>
      </Stack>
     

      
    </Container>
  );
};

export default Profile;
