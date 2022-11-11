import React from "react";
import { githubApi } from "../../api/axiosInstance";
import { Stack, Box, Typography, Button } from "@mui/material";
import pokeReactImage from "../../assets/poke-react-image.webp";
import portfolioImage from "../../assets/portfolio-image.webp";
import portfolioDarkImage from "../../assets/portfolio-image-dark.webp";
import rockAndEDMFestivalImg from "../../assets/Rock-&-EDM-Festival.webp";
import developerImg from "../../assets/developer.svg";
import developerDarkImg from "../../assets/developerDark.svg";
import TvIcon from "@mui/icons-material/Tv";
import ColorModeContext from "../../themes/palette";
import { Buffer } from "buffer";
import { RecordVoiceOverOutlined } from "@mui/icons-material";

const initialState = [
  {
    name: "",
    description: "",
    laguange: "",
  },
];

const Projects = () => {
  const [projectsData, setProjectsData] = React.useState(initialState);
  const [languages, setLanguages] = React.useState([]);
  const { modeColor } = React.useContext(ColorModeContext);

  // let output = [];
  // projectsData.forEach((e) => {
  //   let valueTime = languages.find((ee) => ee.name === e.name);
  //   if (valueTime) {
  //     output.push({
  //       ...e,
  //       startTime: valueTime.startTime,
  //       endTime: valueTime.endTime,
  //     });
  //   } else {
  //     output.push({ ...e });
  //   }
  // });
  // console.log(output);

  React.useEffect(() => {
    const getGitHubData = async () => {
      await githubApi
        .get("users/ElGoel/repos")
        .then(async (response) => {
          const portfolio = response.data.filter((item) => {
            return (
              item.name === "pokedex_React" ||
              item.name === "ElGoel.github.io" ||
              item.name === "Rock-EDM-Festival"
            );
          });
          // console.log(portfolio);
          getLanguagesData(portfolio);
          setProjectsData(() => {
            return portfolio.map((project, i) => ({
              id: i + 1,
              name: project.name,
              description: project.description,
              language: project.language,
            }));
          });
        })
        .catch((err) => console.error(err));
    };
    getGitHubData();
    const getLanguagesData = async (url) => {
      const promises = await url.map(async (url) => {
        try {
          const res = await githubApi.get(
            `repos/ElGoel/${url.name}/contents/package.json`
          );
          const resolv = await res.data;
          let buff = Buffer.from(resolv.content, "base64");
          let che = buff.toString("utf-8");
          let parsedChe = JSON.parse(che);
          return parsedChe;
        } catch (error) {
          console.error(error);
        }
      });
      const resolv = await Promise.all(promises);
      const dependencies = resolv.map((obj) =>
        obj.dependencies ? obj.dependencies : obj.devDependencies
      );
      dependencies.forEach(dependencie => {
        const keys = Object.keys(dependencie).map(key => {
          let keyFix = key.replace(/[/@-]/g, ' ');
          let devNames = keyFix.trim().split(' ').shift();
          return devNames;
        });
        // const newKeys =
      });
      // setLanguages((item, i) => {
      //   return;
      // });
    };
  }, []);

  return (
    <section style={{ display: "flex", justifyContent: "space-between" }}>
      <Stack alignItems="center" mt={15}>
        <Typography
          sx={{
            mb: "1rem",
            textAlign: "center",
            fontSize: "2.4rem",
            fontWeight: "500",
          }}
          component="h3"
        >
          My{" "}
          <Typography
            sx={{
              color: "primary.main",
              fontSize: "2.4rem",
              fontWeight: "700",
            }}
            component="span"
          >
            Projects
          </Typography>
        </Typography>
        <Box
          width={300}
          component="img"
          src={modeColor === "dark" ? developerDarkImg : developerImg}
        ></Box>
      </Stack>
      <Stack spacing={7} mt={8} maxWidth={700} width="100%">
        <Stack
          sx={{
            p: "2rem",
            bgcolor: "background.light",
            position: "relative",
            borderRadius: "10px",
            boxShadow:
              "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
          }}
          direction="row"
          justifyContent="space-between"
        >
          <Stack variant="div" spacing={3} maxWidth={250}>
            <Typography variant="h4">
              {projectsData[0] && projectsData[0].name}
            </Typography>
            <Typography variant="body1" fontSize={18} component="p">
              {projectsData[0] && projectsData[0].description}
            </Typography>
            <Stack direction="row" spacing={0.5}>
              <Box
                variant="div"
                sx={{
                  border: "2px solid",
                  p: ".2rem",
                  borderColor: "rgba(97, 218, 251)",
                  bgcolor: "rgba(97, 218, 251,0.2)",
                }}
              >
                <Typography variant="body2">ReactJs</Typography>
              </Box>
              <Box
                variant="div"
                sx={{
                  border: "2px solid",
                  p: ".2rem",
                  borderColor: "rgba(31, 166, 202)",
                  bgcolor: "rgba(31, 166, 202,0.2)",
                }}
              >
                <Typography variant="body2">Material Ui</Typography>
              </Box>
              <Box
                variant="div"
                sx={{
                  border: "2px solid",
                  p: ".2rem",
                  borderColor: "rgba(240,219,79)",
                  bgcolor: "rgba(240,219,79,0.2)",
                }}
              >
                <Typography variant="body2">JavaScript</Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Button
                component="a"
                href="https://github.com/ElGoel/ElGoel.github.io"
                target="_blank"
                size="small"
                sx={{
                  bgcolor: "background.paper",
                  color: "text.secondary",
                }}
                disableElevation
                variant="contained"
              >
                <Typography textTransform="lowercase">code {"<>"}</Typography>
              </Button>
              <Button
                component="a"
                href="https://elgoel.github.io/"
                target="_blank"
                size="small"
                variant="contained"
                endIcon={<TvIcon />}
                disableElevation
              >
                <Typography textTransform="lowercase">demo</Typography>
              </Button>
            </Stack>
          </Stack>
          <Box
            component="img"
            sx={{
              width: "450px",
              height: "300px",
              objectFit: "cover",
              position: "absolute",
              borderRadius: "10px",
              right: "-7%",
              bottom: "3%",
              boxShadow:
                "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
            }}
            src={modeColor === "dark" ? portfolioDarkImage : portfolioImage}
            alt=""
          ></Box>
        </Stack>
        <Stack
          sx={{
            p: "2rem",
            bgcolor: "background.light",
            position: "relative",
            borderRadius: "10px",
            boxShadow:
              "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
          }}
          direction="row"
          justifyContent="space-between"
        >
          <Stack variant="div" spacing={3} maxWidth={250}>
            <Typography variant="h4">
              {projectsData[1] && projectsData[1].name}
            </Typography>
            <Typography variant="body1" fontSize={18} component="p">
              {projectsData[1] && projectsData[1].description}
            </Typography>
            <Stack direction="row" spacing={0.5}>
              <Box
                variant="div"
                sx={{
                  border: "2px solid",
                  p: ".2rem",
                  borderColor: "rgba(97, 218, 251)",
                  bgcolor: "rgba(97, 218, 251,0.2)",
                }}
              >
                <Typography variant="body2">ReactJs</Typography>
              </Box>
              <Box
                variant="div"
                sx={{
                  border: "2px solid",
                  p: ".2rem",
                  borderColor: "rgba(203, 102, 153)",
                  bgcolor: "rgba(203, 102, 153,0.2)",
                }}
              >
                <Typography variant="body2">Sass</Typography>
              </Box>
              <Box
                variant="div"
                sx={{
                  border: "2px solid",
                  p: ".2rem",
                  borderColor: "rgba(240,219,79)",
                  bgcolor: "rgba(240,219,79,0.2)",
                }}
              >
                <Typography variant="body2">JavaScript</Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Button
                component="a"
                href="https://github.com/ElGoel/pokedex_React"
                target="_blank"
                size="small"
                sx={{
                  bgcolor: "background.paper",
                  color: "text.secondary",
                }}
                disableElevation
                variant="contained"
              >
                <Typography textTransform="lowercase">code {"<>"}</Typography>
              </Button>
              <Button
                component="a"
                href="https://poke-angelo.netlify.app/"
                target="_blank"
                size="small"
                variant="contained"
                endIcon={<TvIcon />}
                disableElevation
              >
                <Typography textTransform="lowercase">demo</Typography>
              </Button>
            </Stack>
          </Stack>
          <Box
            component="img"
            sx={{
              width: "450px",
              height: "300px",
              objectFit: "cover",
              position: "absolute",
              borderRadius: "10px",
              right: "-7%",
              bottom: "3%",
              boxShadow:
                "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
            }}
            src={pokeReactImage}
            alt=""
          ></Box>
        </Stack>
      </Stack>
    </section>
  );
};

export default Projects;
