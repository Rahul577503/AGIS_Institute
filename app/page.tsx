import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import Styles from "../styles/home.module.css";
import HomeImage from "../public/home.svg";
import Image from "next/image";
import ComputerIcon from "@mui/icons-material/Computer";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

const HomePage: React.FC = () => {
  return (
    <Container>
      <Typography className={Styles.quote} variant="h5" color="text.secondary">
        Join Agis Computer Institute and discover a world of computer courses
        like typing, CCC, and DCA.
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{ paddingTop: "2rem", borderBottom: "1px solid #ccc" }}
      >
        <Grid item xs={12} md={6}>
          <Box>
            <Image src={HomeImage} alt="HomeImage" height={500} width={500} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ marginTop: "4rem" }}>
          <Typography fontWeight="bold" variant="h4">
            AGIS Computer Institute{" "}
          </Typography>
          <Typography variant="h6" sx={{ color: "#666" }}>
            <span style={{ fontSize: "1.8em", color: "blue" }}>W</span>
            <span>
              elcome to Agis Computer Institute - Your Gateway to Comprehensive
              Computer Education! At Agis Computer Institute, we offer a diverse
              range of computer courses tailored to suit your learning needs.
              Whether you are a beginner aiming to grasp the basics or an
              enthusiast looking to refine your skills, we have the perfect
              programs for you.
            </span>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: "center", paddingTop: "2rem" }}>
        <Typography fontWeight="bold" variant="h4">
          Training
          <ComputerIcon
            sx={{ fontSize: "2em", color: "blue", verticalAlign: "middle" }}
          />
        </Typography>
        <Typography variant="h6">
          Unlock your potential with Agis Computer Institute specialized
          courses: ADCA, DCA, Typing, and O Level. Elevate your computer skills
          today!.
        </Typography>
      </Box>
      <br />
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ paddingTop: "2rem" }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ border: "1px solid #ccc" }}>
            <Image
              src={HomeImage}
              alt="card"
              height={200}
              width={400}
              style={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ textAlign: "center" }}
              >
                ADCA(Advanced Diploma in Computer Applications)
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ border: "1px solid #ccc" }}>
            <Image
              src={HomeImage}
              alt="card"
              height={200}
              width={400}
              style={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ textAlign: "center" }}
              >
                DCA(Diploma in Computer Applications)
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ border: "1px solid #ccc" }}>
            <Image
              src={HomeImage}
              alt="card"
              height={200}
              width={400}
              style={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ textAlign: "center" }}
              >
                CCC(Course on Computer Concepts)
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center" // Center horizontally
        sx={{ minHeight: "10vh", paddingTop: "2rem", columnGap: "3rem" }}
      >
        <Grid item>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", borderBottom: "1px solid #ccc" }}
          >
            Follow Us
          </Typography>
          <IconButton aria-label="Facebook" color="primary">
            <FacebookIcon sx={{ fontSize: "2.5rem" }} />
          </IconButton>
          <IconButton aria-label="Twitter" color="primary">
            <TwitterIcon sx={{ fontSize: "2.5rem" }} />
          </IconButton>
          <IconButton aria-label="LinkedIn" color="primary">
            <LinkedInIcon sx={{ fontSize: "2.5rem" }} />
          </IconButton>
          <IconButton aria-label="Facebook" color="primary">
            <InstagramIcon sx={{ fontSize: "2.5rem" }} />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
