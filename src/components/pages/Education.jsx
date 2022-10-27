import React from 'react';
/** Components */
import { Stack, Box, Grid } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Certificates from "../Certificates";
import ColorModeContext from "../../themes/palette";

/** Icons */
import SchoolIcon from "@mui/icons-material/School";
import Typography from "@mui/material/Typography";
import LaunchIcon from "@mui/icons-material/Launch";
import CardMembershipIcon from "@mui/icons-material/CardMembership";

/** images */
import fullstackCertificate from "../../assets/UC-32453f6e-e247-4774-833a-e004cefa92ae.webp";
import reactFirebaseCertificate from "../../assets/ReactPlusFirebase.webp";
import civilEngineeringCertificate from "../../assets/img4.webp";
import eFCertificate from "../../assets/EFcertificate.webp";
import studyLight from "../../assets/studyLight.svg";
import studyDark from "../../assets/studyDark.svg";

const Education = () => {
const { modeColor } = React.useContext(ColorModeContext);

  const education = [
    {
      id: 1,
      initialDate: "2014",
      finishedDate: "2019",
      title: "Civil Engineering",
      college: "I.U.P Santiago Mariño",
      webSide: "http://www.psmsancristobal.edu.ve/",
      ubication: "Venezuela",
      courses: ["Bachelor Degree in Civil Engineering"],
    },
    {
      id: 2,
      initialDate: "2019",
      finishedDate: "2020",
      title: "Full Web Developer Course",
      college: "Udemy",
      webSide: "https://www.udemy.com/",
      ubication: "Online",
      courses: [
        "Create an incredible Portfolio with many projects that will help you get a job",
        "Learn and Master HTML and CSS to create modern designs following good practices",
        "Learn HTML and CSS Methodologies as Modules and BEM",
        "Create web pages with HTML and CSS that you can sell to your customers",
        "Write Modern JavaScript Code (ES6)",
        "Create dynamic websites with PHP and MYSQL",
        "Understand how JavaScript, PHP and the Fetch API work",
        "Apply for a Junior Web Developer job",
        "Learn to create dynamic sites that use databases to store and retrieve information",
        "Create CRUD applications with PHP and MySQL",
        "Add PayPal payments to your websites",
        "Create secure applications with PHP and MySQL",
      ],
    },
    {
      id: 3,
      initialDate: "2021",
      finishedDate: "2021",
      title: "Learn TypeScript from 0 to 100",
      college: "Udemy",
      webSide: "https://www.udemy.com/",
      ubication: "Online",
      courses: [
        "Data Types",
        "Functions and Parameters",
        "Clasess",
        "Interfaces",
        "Generic Types",
        "Modules",
      ],
    },
    {
      id: 4,
      initialDate: "2021",
      finishedDate: "2021",
      title: "Learn React + FireBase | 2021",
      college: "Udemy",
      webSide: "https://www.udemy.com/",
      ubication: "Online",
      courses: [
        "React Basic Concepts",
        "Basic CRUD with React",
        "React PROPS",
        "React Router",
        "FireBase",
        "Project CRUD with React and FireBase",
      ],
    },
    {
      id: 5,
      initialDate: "2021",
      finishedDate: "",
      title: "Learn JavaScript for Free",
      college: "Scrimba",
      webSide: "https://scrimba.com/",
      ubication: "Online",
      courses: [
        "Building a passanger counter app!",
        "Solo project 1: Basketball Scoreboard",
        "Setting up a local dev environment",
        "Building a Blackjack game",
        "solo project 2: a password generator",
        "Building a Chrome extension",
        "Solo project 3: Unit Converter",
      ],
    },
    {
      id: 6,
      initialDate: "2022",
      finishedDate: "",
      title: "Learn React for Free",
      college: "Scrimba",
      webSide: "https://scrimba.com/",
      ubication: "Online",
      courses: [
        "Building a React info site",
        "Building a AirBnb experience Clone",
        "Building a Meme Generator",
        "Notes App and Tenzies Game",
      ],
    },
  ];
  const certificates = [
    {
      url: "https://docs.google.com/document/d/10ZFeLMqnbLHUAi41LzZW-bZoJrgEQwAAkbFmMDmCaqo/edit",
      img: civilEngineeringCertificate,
    },
    {
      url: "https://www.udemy.com/certificate/UC-32453f6e-e247-4774-833a-e004cefa92ae/",
      img: fullstackCertificate,
    },
    {
      url: "https://www.udemy.com/certificate/UC-85c51289-7fe0-4149-be4d-c8cb738022ad/",
      img: reactFirebaseCertificate,
    },
    {
      url: "https://www.efset.org/cert/ek2F9P",
      img: eFCertificate,
    },
  ];
  const reverseEducation = education.reverse();

  return (
    <section>
      <Stack spacing={5} direction={{ xs: "column-reverse", md: "row" }} mt={2}>
        <Box variant='div' mt={4} display={{ md:'block', xs:'none' }}>
          <Typography
            sx={{
              mb: "1rem",
              textAlign: "center",
              fontWeight: "500",
            }}
            variant="h4"
          >
            Education
          </Typography>
          <Box
            component="img"
            src={modeColor === "dark" ? studyDark : studyLight}
            alt="Ilustration about education"
            width={400}
          ></Box>
        </Box>
        <Box display={{ md: "block", xs: "none" }} sx={{ width: "100%" }}>
          <Timeline
            position="alternate"
            sx={{
              [`& .${timelineOppositeContentClasses.root}`]: {
                xs: { flex: 0.1 },
                md: { flex: 1 },
              },
            }}
          >
            {reverseEducation.map((item) => (
              <TimelineItem key={item.title}>
                <TimelineOppositeContent
                  sx={{ m: "auto 0", fontSize: "1rem", fontWeight: "bold" }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                >
                  {item.initialDate} {item.finishedDate ? "-" : ""}{" "}
                  {item.finishedDate}
                </TimelineOppositeContent>
                <TimelineSeparator sx={{ m: "0 1rem" }}>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                    <SchoolIcon color="text" fontSize="small" />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    py: "12px",
                    px: 2,
                    bgcolor: "background.light",
                    borderRadius: "10px",
                    textAlign: "left !important",
                    borderBottom: "solid 5px",
                    borderColor: "primary.main",
                    boxShadow:
                      "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
                    mb: "1rem",
                  }}
                >
                  <Stack variant="article">
                    <Stack
                      direction="row"
                      sx={{ justifyContent: "space-between" }}
                    >
                      <Typography variant="h7" component="span">
                        {item.title} ({item.ubication})
                      </Typography>
                    </Stack>
                    <Box sx={{ color: "text.secondary" }}>
                      <Typography
                        variant="subtitle2"
                        component="a"
                        href={item.webSide}
                        target="_blank"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          columnGap: ".1rem",
                          color: "text.secondary",
                        }}
                      >
                        {item.college}
                        <LaunchIcon fontSize="small" />
                      </Typography>
                      {/* <Typography
                    variant="h6"
                    component="span"
                  >
                    Courses:
                  </Typography> */}
                      {/* <Typography
                      variant="h6"
                      component="ul"
                      sx={{
                        p: "0",
                        mt: ".5rem",
                        pl: "1rem",
                        listStyle: "circle",
                      }}
                    >
                      {item.courses.map((course) => (
                      <Typography component="li">
                        {course}
                      </Typography>
                    ))}
                    </Typography> */}
                    </Box>
                  </Stack>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
        <Box display={{ md: "none", xs: "block" }} sx={{ width: "100%" }}>
          <Typography
            sx={{
              mb: "1rem",
              textAlign: "center",
              fontWeight: "500",
              display:{xs: "block", md: "none"}
            }}
            variant="h4"
          >
            Education
          </Typography>
          <Timeline
            position="right"
            sx={{
              [`& .${timelineOppositeContentClasses.root}`]: {
                xs: { flex: 0.1 },
                md: { flex: 1 },
              },
            }}
          >
            {reverseEducation.map((item) => (
              <TimelineItem key={item.title}>
                <TimelineOppositeContent
                  sx={{ m: "auto 0", fontSize: "1rem", fontWeight: "bold" }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                >
                  {item.initialDate} {item.finishedDate ? "-" : ""}{" "}
                  {item.finishedDate}
                </TimelineOppositeContent>
                <TimelineSeparator sx={{ m: "0 1rem" }}>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                    <SchoolIcon color="text" fontSize="small" />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    py: "12px",
                    px: 2,
                    bgcolor: "background.light",
                    borderRadius: "10px",
                    textAlign: "left !important",
                    borderBottom: "solid 5px",
                    borderColor: "primary.main",
                    mb: "1rem",
                  }}
                >
                  <Stack
                    variant="article"
                    direction="column"
                    sx={{ justifyContent: "space-between" }}
                  >
                    <Typography variant="h6" component="span">
                      {item.title} ({item.ubication})
                    </Typography>
                    {item.certificate && (
                      <Typography
                        component="a"
                        target="_blank"
                        href={item.certificate}
                        fontSize="1rem"
                        variant="h6"
                        color="text.secondary"
                      >
                        Certificate
                        <CardMembershipIcon />
                      </Typography>
                    )}
                  </Stack>
                  <Box sx={{ color: "text.secondary" }}>
                    <Typography
                      variant="h6"
                      component="a"
                      href={item.webSide}
                      target="_blank"
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        columnGap: ".1rem",
                        color: "text.secondary",
                      }}
                    >
                      {item.college}
                      <LaunchIcon />
                    </Typography>
                    {/* <Typography
                    variant="h6"
                    component="span"
                  >
                    Courses:
                  </Typography> */}
                    {/* <Typography
                      variant="h6"
                      component="ul"
                      sx={{
                        p: "0",
                        mt: ".5rem",
                        pl: "1rem",
                        listStyle: "circle",
                      }}
                    >
                      {item.courses.map((course) => (
                      <Typography component="li">
                        {course}
                      </Typography>
                    ))}
                    </Typography> */}
                  </Box>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </Stack>
      <Box alignItems="center" pb={2}>
        {/* <Box component='img' src={studyLight} sx={{ width:'150px' }}></Box> */}
        <Typography variant="h5" m={3} textAlign="center">
          Certificates
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {certificates.map(
            (certificate) =>
              certificates.length > 0 && (
                <Grid item key={certificate.url}>
                  <Certificates url={certificate.url} img={certificate.img} />
                </Grid>
              )
          )}
        </Grid>
      </Box>
    </section>
  );
};

export default Education;
