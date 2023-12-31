'use client'
import React, { useState } from 'react';
import { Grid, Modal, Box, ImageList, ImageListItem} from '@mui/material';
import Image from 'next/image';
import { IGallery } from "@/interfaces/common";

interface GalleryProps {
  images?: IGallery[]; 
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>('');

  const handleOpen = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!Array.isArray(images) || images.length === 0) {
    return <div>No images available</div>; 
  }

  return (
    <div>
      <Grid container spacing={2}>
        {images.slice(0, 9).map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <ImageList cols={1}>
              <ImageListItem key={index} sx={{ cursor: 'pointer' }}>
                <div onClick={() => handleOpen(item.imageUrl)}>
                  <Image
                    src={item.imageUrl}
                    alt={`Image ${index}`}
                    width={500}
                    height={350}
                    style={{ border: '1px solid #ccc',objectFit:'cover' }}
                  />
                </div>
              </ImageListItem>
            </ImageList>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        closeAfterTransition
      >
        <Box
          sx={{
            maxWidth: '80%',
            maxHeight: '80%',
            boxShadow: 8,
            borderRadius: 2,
            bgcolor: 'background.paper',
            p: 2,
            '& div': {
              width: '100%',
              height: 'auto',
            },
          }}
        >
          <Image src={selectedImage} alt="Selected" width={600} height={400} />
        </Box>
      </Modal>
      </div>
  );
};

export default Gallery;
