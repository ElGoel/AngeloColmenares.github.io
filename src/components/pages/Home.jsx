import React from "react";
import { Link } from "react-router-dom";

/** Material Ui Components */
import { Box, Stack, Typography, IconButton, Button } from "@mui/material";

/** Material Icons */
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import ForwardIcon from "@mui/icons-material/Forward";

/** Image Assets */
import welcomingImage from "../../assets/hello.svg";
import welcomingImageDarkMode from "../../assets/hello-darkmode.svg";
import Typewriter from "typewriter-effect";

/** Theme Context */
import ColorModeContext from "../../themes/palette";

const quos = [
  "I am Front-End Developer.",
  "I am Creative.",
  "I am always willing to learn.",
  "I am a problem solver.",
  "I'm a Hard Worker.",
];

const Home = ({ setPagesValue }) => {
  const { modeColor } = React.useContext(ColorModeContext);

  const handleChangePage = () => {
    setPagesValue("about");
  };

  return (
    <section>
      <Stack
        component="section"
        direction={{ md: "row", xs: "column-reverse" }}
        spacing={5}
        sx={{ mt: 10 }}
        className="home--section"
      >
        <Stack sx={{ rowGap: "1.5rem" }}>
          <Typography
            variant="h1"
            sx={{ fontSize: { md: "3rem", xs: "2.4rem" }, fontWeight: 300 }}
          >
            HELLO!
            <Typography
              variant="h1"
              component="span"
              sx={{
                fontSize: { md: "2.4rem", xs: "2rem" },
                color: "primary.main",
                fontWeight: 600,
              }}
            >
              {" "}
              I am Ángelo
            </Typography>
            <Typography
              variant="span"
              sx={{
                fontSize: { md: "2rem", xs: "1.4rem" },
                color: "primary.main",
                fontWeight: 400,
              }}
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
              target="_blank"
              sx={{
                color: "primary",
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
              target="_blank"
              sx={{
                color: "primary",
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
              target="_blank"
              sx={{
                color: "primary",
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
            <Button
              component={Link}
              to="/about"
              variant="contained"
              onClick={handleChangePage}
              sx={{
                color: "primary.contrastText",
                fontWeight: "bold",
                width: { sm: "200px", xs: "100%" },
              }}
            >
              More About Me
              <ForwardIcon />
            </Button>
          </Box>
        </Stack>
        <Stack>
          <Box
            component="img"
            sx={{ width: "auto", minWidth: "100%", maxWidth: "600px" }}
            src={
              modeColor === "light" ? welcomingImage : welcomingImageDarkMode
            }
            alt="Image of presentation"
          ></Box>
        </Stack>
      </Stack>
    </section>
  );
};

export default Home;
