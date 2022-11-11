import React from "react";
/** Material Ui */
import { Box, Stack, Typography, Divider, Grid } from "@mui/material";
/** Images */
import skillsDark from "../../assets/skills_dark.svg";
import skills from "../../assets/skills.svg";
/** Theme Context */
import ColorModeContext from "../../themes/palette";

const Skills = () => {
  const { modeColor } = React.useContext(ColorModeContext);

  const skillArr = [
    {
      id: 1,
      colorIcon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      name: "Redux",
      type: "Front-End",
    },
    {
      id: 2,
      colorIcon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      name: "React",
      type: "Front-End",
    },
    {
      id: 3,
      colorIcon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      name: "HTML5",
      type: "Front-End",
    },
    {
      id: 4,
      colorIcon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      name: "CSS3",
      type: "Front-End",
    },
    {
      id: 5,
      colorIcon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
      name: "JavaScript",
      type: "Front-End, Back-End",
    },
    {
      id: 6,
      colorIcon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      name: "Sass",
      type: "Front-End",
    },
    {
      id: 7,
      colorIcon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      name: "Angular",
      type: "Front-End",
    },
    {
      id: 8,
      colorIcon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      name: "Git",
      type: "Tool",
    },
    {
      id: 9,
      colorIcon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      name: "Bootstrap",
      type: "Front-End",
    },
    {
      id: 10,
      colorIcon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      name: "Material Ui",
      type: "Front-End",
    },
    {
      id: 11,
      colorIcon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
      name: "TypeScript",
      type: "Front-End Back-End",
    },
    {
      id: 12,
      colorIcon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      name: "FireBase",
      type: "Back-End",
    },
    {
      id: 13,
      colorIcon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
      name: "Mysql",
      type: "Back-End",
    },
    {
      id: 14,
      colorIcon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      name: "NodeJs",
      type: "Back-End",
    },
    {
      id: 15,
      colorIcon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      name: "Vscode",
      type: "tool",
    },
    {
      id: 16,
      colorIcon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      name: "Figma",
      type: "tool ux/ui",
    },
    {
      id: 17,
      colorIcon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
      name: "Canva",
      type: "tool ux/ui",
    },
  ];

  const filterFrontEnd = skillArr.filter((skill) => {
    return skill.type.includes("Front-End");
  });

  const filterBackEnd = skillArr.filter((skill) => {
    return skill.type.includes("Back-End");
  });

  const filterOther = skillArr.filter((skill) => {
    return skill.type.includes("tool") || skill.type.includes("ux/ui");
  });

  const renderFrontEnd = filterFrontEnd.map((skill) => {
    return (
      <Grid item key={skill.id} xs={2}>
        <Box
          variant="div"
          sx={{
            bgcolor: "background.light",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            p: ".7rem",
            borderRadius: "5px",
            boxShadow:
              "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
            transition: ".1s",
            cursor: "pointer",
            "&:hover": {
              bgcolor: "background.paper",
              "& > .skill-content": {
                transform: "scale(1.2)",
              },
            },
          }}
        >
          <div className="skill-content">
            <img src={skill.colorIcon} alt={skill.name} width="60px" />
            <Typography textAlign="center" variant="body2">
              {skill.name}
            </Typography>
          </div>
        </Box>
      </Grid>
    );
  });

  const renderBackEnd = filterBackEnd.map((skill) => (
    <Grid item key={skill.id} xs={2}>
      <Box
        id={skill.id}
        variant="div"
        sx={{
          bgcolor: "background.light",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          p: ".7rem",
          borderRadius: "5px",
          boxShadow:
            "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
          transition: ".1s",
          cursor: "pointer",
          "&:hover": {
            bgcolor: "background.paper",
            "& > .skill-content": {
              transform: "scale(1.2)",
            },
          },
        }}
      >
        <div className="skill-content">
          <img src={skill.colorIcon} alt={skill.name} width="60px" />
          <Typography textAlign="center" variant="body2">
            {skill.name}
          </Typography>
        </div>
      </Box>
    </Grid>
  ));

  const renderOthers = filterOther.map((skill) => (
    <Grid item key={skill.id} xs={2}>
      <Box
        id={skill.id}
        variant="div"
        sx={{
          bgcolor: "background.light",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          p: ".7rem",
          borderRadius: "5px",
          boxShadow:
            "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
          transition: ".1s",
          cursor: "pointer",
          "&:hover": {
            bgcolor: "background.paper",
            "& > .skill-content": {
              transform: "scale(1.2)",
            },
          },
        }}
      >
        <div className="skill-content">
          <img src={skill.colorIcon} alt={skill.name} width="60px" />
          <Typography textAlign="center" variant="body2">
            {skill.name}
          </Typography>
        </div>
      </Box>
    </Grid>
  ));

  return (
    <section>
      <Stack
        direction={{ md: "row", xs: "column" }}
        spacing={10}
        mt={5}
        justifyContent="space-between"
      >
        <Stack 
          direction={{ md: "column", xs: "row" }}
          alignItems='center'
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
            I can work{" "}
            <Typography
              sx={{
                color: "primary.main",
                fontSize: "2.4rem",
                fontWeight: "700",
              }}
              component="span"
            >
              with
            </Typography>
          </Typography>
          <Box
            component="img"
            src={modeColor === "dark" ? skillsDark : skills}
            width={{ xs: '100%', md:300 }}
            maxWidth={300}
          ></Box>
        </Stack>
        <Stack spacing={2}>
          <Divider flexItem>
            <Typography>Front-End</Typography>
          </Divider>
          <Grid columns={{ xs: 4, sm: 8, md: 12 }} container item spacing={1}>
            {renderFrontEnd}
          </Grid>
          <Divider flexItem>
            <Typography>Back-End</Typography>
          </Divider>
          <Grid columns={{ xs: 4, sm: 8, md: 12 }} container item spacing={1}>
            {renderBackEnd}
          </Grid>
          <Divider flexItem>
            <Typography>Tools, UX/UI</Typography>
          </Divider>
          <Grid columns={{ xs: 4, sm: 8, md: 12 }} container item spacing={1}>
            {renderOthers}
          </Grid>
        </Stack>
      </Stack>
    </section>
  );
};

export default Skills;
