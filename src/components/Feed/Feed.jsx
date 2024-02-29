
import { Favorite, HeartBroken, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from '@mui/material'
import React from 'react'
import Post from './Post'

const Feed = () => {
  return (
    <Box flex={8}>
      <Post/>
    </Box>
  )
}

export default Feed