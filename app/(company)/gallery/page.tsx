import React from "react";
import Gallery from "@/components/MyGallery";
import galleryData from "@/constants/galleryData";
import { Container, Box, Typography } from "@mui/material";

const MyGallery = () => {
  return (
    <Container>
      <Box sx={{ paddingTop: "3rem" }}>
        <br />
        <Typography variant="h4" sx={{ textAlign: "center",paddingBottom:'2rem' }}>
          Our Gallery
        </Typography>
        <Gallery images={galleryData} />
      </Box>
    </Container>
  );
};

export default MyGallery;
