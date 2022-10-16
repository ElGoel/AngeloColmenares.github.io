import { Box, Stack, Typography, IconButton, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import welcomingImage from '../../assets/hello.svg';
import React from "react";
import Typewriter from "typewriter-effect";

const Home = () => {
  const quos = [
    "I am Front-End Developer.",
    "I am Creative.",
    "I am always willing to learn.",
    "I am a problem solver.",
    "I'm a Hard Worker.",
  ];

  return (
    <Box
      component="section"
      sx={{ mt: 10, display: { xs: "flex", columnGap: "5rem" } }}
      className="home--section"
    >
      <Stack sx={{ rowGap: "1.5rem" }}>
        <Typography variant="h1" sx={{ fontSize: "3rem", fontWeight: 300 }}>
          HELLO!
          <Typography
            variant="h1"
            component="span"
            sx={{ fontSize: "2.4rem", color: "primary.main", fontWeight: 600 }}
          >
            {" "}
            I am Ángelo
          </Typography>
          <Typography
            variant="span"
            sx={{ fontSize: "2rem", color: "primary.main", fontWeight: 400 }}
          >
            <Typewriter
              options={{
                strings: quos,
                autoStart: true,
                loop: true,
              }}
            />
          </Typography>
        </Typography>
        <Typography variant="p" sx={{ textAlign: "justify" }}>
          <Typography
            variant="p"
            component="span"
            color="primary"
            fontWeight="700"
          >
            Self-taught
          </Typography>{" "}
          in Web Development with full knowledge on{" "}
          <Typography
            variant="p"
            component="span"
            color="primary"
            fontWeight="700"
          >
            HTML5, CSS3, JavaScript, ReactJs
          </Typography>{" "}
          and many more, with great interest in{" "}
          <Typography
            variant="p"
            component="span"
            color="primary"
            fontWeight="700"
          >
            Front End development
          </Typography>
        </Typography>
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <IconButton
            href="https://github.com/ElGoel"
            sx={{
              color: "primary.contrastText",
              "&:hover": {
                color: "primary.main",
                transform: "scale(1.1)",
                boxShadow:
                  "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
              },
            }}
          >
            <GitHubIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/angelocolmanu/"
            sx={{
              color: "primary.contrastText",
              "&:hover": {
                color: "primary.main",
                transform: "scale(1.1)",
                boxShadow:
                  "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
              },
            }}
          >
            <LinkedInIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <IconButton
            href="https://twitter.com/ElGoel_"
            sx={{
              color: "primary.contrastText",
              "&:hover": {
                color: "primary.main",
                transform: "scale(1.1)",
                boxShadow:
                  "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
              },
            }}
          >
            <TwitterIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Stack>
        <Box>
          <Button href="https://drive.google.com/file/d/1usS4gqPiZ6mmgtlClVCqd89L88NSrokh/view" variant="contained" sx={{ color: "white", width: '200px' }}>
            <FileDownloadIcon />
            Resume
          </Button>
        </Box>
      </Stack>
      <Stack color="white">
        <img
          style={{ maxWidth: "100%", minWidth: "500px" }}
          src={welcomingImage}
          alt="Image of presentation"
        />
      </Stack>
    </Box>
  );
};

export default Home;
