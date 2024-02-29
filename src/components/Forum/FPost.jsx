import React, { useState } from 'react'
import { Comment, CommentOutlined, ModeCommentOutlined, Reply, ReplyOutlined, Send } from '@mui/icons-material'
import { Avatar, Box, Divider, Stack, TextField, Typography } from '@mui/material'

const FPost = () => {
  const [display,setDisplay]=useState(true)
  const [disComment,setDisComment]=useState(true)
  var dis=''
  if (display){
      dis='none'
  }else{
    dis='flex'
  }
  return (
    <Box sx={{border:'0.5px solid #e5e1e1',borderRadius:'8px',width:{md:'90%',lg:'85%'},padding:'10px',marginBottom:'4px'}} >
    
    <Stack direction='row' gap={2} alignItems='center' marginBottom={2}>
    <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/1.jpg" />
    <Typography >Name</Typography>
  </Stack>
    <Stack position='relative' direction='column'>

    <Stack direction='column' marginBottom={2}>
    <Typography variant='h6'>HOW?</Typography>
    <Typography  sx={{fontWeight:'300'}} marginRight={4}>hi my name is Adhikowshik reddy studying in </Typography>
    </Stack>
  <Divider/>
    <Stack marginTop={2} direction='row' spacing={2}>
    <Stack  onClick={()=> setDisplay(!display)}><ReplyOutlined/>reply </Stack><Stack  onClick={()=> setDisComment(!disComment)}><ModeCommentOutlined />replies </Stack>
    </Stack>
    </Stack>
    <Stack display="flex" justifyContent='center' alignItems='center' position='relative'><TextField
  multiline
  sx={{ display: display ? 'none' : 'flex', margin: '5px 0',width:'100%' }}
  placeholder='comment'
  InputProps={{
    style: {
      paddingRight: '40px',
    },
  }}
/><Send sx={{position:'absolute',display:dis,right:2,marginRight:2}}/></Stack>


<Stack direction='column'  sx={{ display: disComment ? 'none' : 'flex',border:'0.5px solid #e5e1e1',borderRadius:'8px',margin:'4px',padding:'4px',backgroundColor:'#f4f5f4'}}>
<Stack direction='row' gap={2} alignItems='center' marginBottom={2}>
    <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/1.jpg" />
    <Typography >Name</Typography>
</Stack>
<Stack>
<Typography  sx={{fontWeight:'300'}} marginRight={4}>hi my name is Adhikowshik reddy studying in </Typography>
</Stack>
    
</Stack>

    </Box>
  )
}

export default FPost