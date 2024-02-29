import { Box, Button, CardMedia, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const CreatePost = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [step, setStep] = useState(1);
  const inputRef = useRef(null);
  const cropperRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setStep(2);
  };

  const handleInput = () => {
    inputRef.current.click();
  };

  const handleCrop = () => {
    if (cropperRef.current) {
      const image = cropperRef.current.getCroppedCanvas().toDataURL();
      setCroppedImage(image);
      setStep(3);
    }
  };

  return (
    <Box textAlign='center' display='flex' flexDirection='column' p={4} gap={3}>
      {step === 1 && (
        <>
          <Typography variant='h5'>Create New Post</Typography>
          <hr />
          <Box onClick={handleInput}>
            <CardMedia
              component="img"
              alt="Selected Media"
              height='200'
              width='200'
              image="https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png"
            />
            <Typography variant='h6'>Select the Media</Typography>
            <input
              type="file"
              id="mediaInput"
              accept="image/*, video/*"
              style={{ display: 'none' }}
              onChange={handleFileChange}
              ref={inputRef}
            />

            <Button variant='contained' color='primary' component="span">
              Select From Your Device
            </Button>
          </Box>

          <p>* Images, Videos, Pdfs, Docx, PPTx *</p>
        </>
      )}
      {step === 2 && selectedFile && (
        <>
          <Cropper
            style={{ maxWidth: '100%', maxHeight: 400 }}
            aspectRatio={1}
            src={URL.createObjectURL(selectedFile)}
            ref={cropperRef}
          />
          <Button variant='contained' color='primary' onClick={handleCrop}>
            Crop
          </Button>
        </>
      )}
      {step === 3 && croppedImage && (
        <>
          <CardMedia
            component="img"
            alt="Cropped Media"
            height='200'
            width='200'
            image={croppedImage}
          />
          <Typography variant='h6'>Cropped Image</Typography>
          {/* Include additional UI or actions for the cropped image if needed */}
        </>
      )}
    </Box>
  );
};

export default CreatePost;
