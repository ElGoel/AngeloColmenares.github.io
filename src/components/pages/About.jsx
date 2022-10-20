import { Avatar, Box, Typography, Stack, Button } from "@mui/material";
import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import aboutMe from "../../assets/about-me.svg";
import aboutMeDarkMode from "../../assets/about-me-darkmode.svg";
import ColorModeContext from "../../themes/palette";
import { LinkStyled } from "../material/StyledLink";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const About = () => {
  const { modeColor } = React.useContext(ColorModeContext);

  const personalInfo = {
    firstName: "Angelo",
    lastName: "Colmenares",
    age: 29,
    nationality: "Venezuelan",
    country: "Colombia",
    address: "C-165 #48-21 Apto 501 Bogotá",
  };

  return (
    <Stack
      direction={{ md: "row-reverse" }}
      component="section"
      spacing={15}
      sx={{ justifyContent: "center", mt: "2rem" }}
    >
      <Stack component="section" sx={{ alignItems: "center", rowGap: "1rem" }}>
        <Box
          component="div"
          sx={{
            borderRadius: "50%",
            border: "3px solid",
            overflow: "hidden",
            position: "relative",
            width: "156px",
            height: "156px",
            borderColor: "primary.main",
          }}
        >
          <Avatar
            alt="The picture of the autor"
            src="/src/assets/photo.webp"
            sx={{
              width: "150px",
              height: "150px",
              border: "3px solid",
              borderColor: "white",
            }}
          />
        </Box>
        <Stack
          direction="row"
          sx={{ alignItems: "center", columnGap: ".2rem" }}
        >
          <Typography
            sx={{ color: "text.primary", fontSize: "1.4rem" }}
            variant="h1"
            // letterSpacing=".1rem"
          >
            Ángelo Colmenares
          </Typography>
          <VerifiedIcon />
        </Stack>
        <Box
          component="img"
          src={modeColor === "dark" ? aboutMeDarkMode : aboutMe}
          sx={{ width: "300px", display: { xs: "none", md: "block" } }}
        ></Box>
      </Stack>
      <Box
        component="div"
        sx={{
          height: "100%",
          padding: "0 1rem",
        }}
      >
        <Typography
          sx={{
            mb: "1rem",
            textAlign: "center",
            fontSize: "2.4rem",
            fontWeight: "500",
          }}
          component="h3"
        >
          About{" "}
          <Typography
            sx={{
              color: "primary.main",
              fontSize: "2.4rem",
              fontWeight: "700",
            }}
            component="span"
          >
            Me
          </Typography>
        </Typography>
        <Typography component="p" sx={{ textAlign: "justify" }}>
          <Typography color="primary.main" fontWeight="bold" component="span">
            Junior Developer
          </Typography>{" "}
          with 3 years of self-taught practical experience in{" "}
          <Typography color="primary.main" fontWeight="bold" component="span">
            ​​Front-End web development
          </Typography>
          . knowledge of{" "}
          <Typography color="primary.main" fontWeight="bold" component="span">
            HTML/CSS/JavaScript
          </Typography>{" "}
          and intermediate knowledge of libraries and frameworks like
          <Typography color="primary.main" fontWeight="bold" component="span">
            {" "}
            React/Redux, Material Ui, Bootstrap, VueJs and Angular
          </Typography>
          . version control with{" "}
          <Typography color="primary.main" fontWeight="bold" component="span">
            Git and Scrum workflow
          </Typography>
          . passionate about creating attractive, eye-catching, responsive
          designs with good performance and clean code.
        </Typography>
        <Typography sx={{ mt: "1rem" }}>
          I have a good eye for detail and can maintain logical thinking when
          required. looking to apply for a{" "}
          <Typography color="primary.main" fontWeight="bold" component="span">
            Junior Front-End Developer
          </Typography>{" "}
          Position so I can test my skills and allow me to keep learning from my
          peers.
        </Typography>
        {/* <Typography component='p' sx={{ mt:'1rem' }}>Let's Meet!</Typography>
          <LinkStyled href="mailto:dazhkhors@gmail.com?Subject=I%20want%20to%20know%20more!" component='a'>Click Here</LinkStyled> */}
        <Box component="div" sx={{ mt: "1rem" }}>
          <Typography
            component="h3"
            sx={{
              mb: "1rem",
              fontWeight: "bold",
              fontSize: "1.5rem",
              color: "primary.dark",
            }}
          >
            PERSONAL INFO
          </Typography>
          <Stack
            direction={{ md: "row" }}
            sx={{
              justifyContent: { md: "space-between" },
              alignItems: { md: "center" },
            }}
          >
            <Stack component="ul" sx={{ listStyle: "none", p: "0", m: "0" }}>
              <Typography component="li">
                First Name:{" "}
                <Typography
                  component="span"
                  fontWeight="bold"
                  color="primary.dark"
                >
                  {personalInfo.firstName}
                </Typography>
              </Typography>
              <Typography component="li">
                Last Name:{" "}
                <Typography
                  component="span"
                  fontWeight="bold"
                  color="primary.dark"
                >
                  {personalInfo.lastName}
                </Typography>
              </Typography>
              <Typography component="li">
                Age:{" "}
                <Typography
                  component="span"
                  fontWeight="bold"
                  color="primary.dark"
                >
                  {personalInfo.age}
                </Typography>
              </Typography>
              <Typography component="li">
                Nationality:{" "}
                <Typography
                  component="span"
                  fontWeight="bold"
                  color="primary.dark"
                >
                  {personalInfo.nationality}
                </Typography>
              </Typography>
              <Typography component="li">
                Country:{" "}
                <Typography
                  component="span"
                  fontWeight="bold"
                  color="primary.dark"
                >
                  {personalInfo.country}
                </Typography>
              </Typography>
              <Typography component="li">
                Addres:{" "}
                <Typography
                  component="span"
                  fontWeight="bold"
                  color="primary.dark"
                >
                  {personalInfo.address}
                </Typography>
              </Typography>
            </Stack>
            <Stack direction='row' sx={{ mt:{ xs:'1rem', md:'auto' }, mb:'1rem' }}>
              <Button
                href="https://drive.google.com/file/d/1usS4gqPiZ6mmgtlClVCqd89L88NSrokh/view"
                target="_blank"
                variant="contained"
                sx={{
                  color: "primary.contrastText",
                  width: { sm: "220px", xs: "100%" },
                }}
              >
                <FileDownloadIcon />
                Download Resume
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};

export default About;
