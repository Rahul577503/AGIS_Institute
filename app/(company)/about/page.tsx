import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <Container sx={{ paddingTop: "2rem" }}>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          src="/profile.svg"
          alt="Rajive Maurya"
          width={200}
          height={200}
          style={{ borderRadius: "50%" }}
        />
        <Typography variant="h4" sx={{ marginTop: "1rem" }}>
          Rajive Maurya
        </Typography>
      </Box>

      {/* About section */}
      <Box sx={{ marginTop: "2rem", textAlign: "center" }}>
        <Typography variant="body1" sx={{
          marginBottom: '1rem',
          fontFamily: 'Arial, sans-serif',
          fontSize: '1.1rem',
          lineHeight: '1.6',
          color: '#333',
        }}>
          Hello, I am Rajive Maurya, a passionate computer science educator
          dedicated to shaping aspiring minds in the realm of technology. With
          an enriching teaching experience, I specialize in courses like CCC
          (Course on Computer Concepts), DCA (Diploma in Computer Applications),
          and ADCA (Advanced Diploma in Computer Applications). I strive to
          impart practical knowledge and foster a deep understanding of computer
          concepts. Join me on this incredible journey of learning and
          exploration in the world of technology!
        </Typography>

        {/* Social links */}
        <Grid
          container
          justifyContent="center" 
          sx={{ minHeight: "10vh", paddingTop: "2rem", columnGap: "3rem" }}
        >
          <Grid item>
            <IconButton aria-label="Facebook" color="primary">
              <FacebookIcon sx={{ fontSize: "2.5rem" }} />
            </IconButton>
            <IconButton aria-label="Twitter" color="primary">
              <TwitterIcon sx={{ fontSize: "2.5rem" }} />
            </IconButton>
            <IconButton aria-label="LinkedIn" color="primary">
              <LinkedInIcon sx={{ fontSize: "2.5rem" }} />
            </IconButton>
            <IconButton aria-label="Instagram" color="primary">
              <InstagramIcon sx={{ fontSize: "2.5rem" }} />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
