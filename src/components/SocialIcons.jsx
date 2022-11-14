import { Stack, IconButton, Box, Divider } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const SocialIcons = () => {
  return (
    <Stack sx={{ position:'fixed', top:'60%', right:'1%', alignItems:'center', zIndex:"100" }}>
      {" "}
      <Stack direction="column" spacing={1} sx={{ alignItems: "center" }}>
        <IconButton
          href="https://github.com/ElGoel"
          target="_blank"
          sx={{
            color: "primary",
            "&:hover": {
              color: "primary.main",
              transform: "scale(1.1)",
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
            },
          }}
        >
          <TwitterIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Stack>
      <Box sx={{ width:'2px', height:'50px', bgcolor:'text.secondary' }}></Box>
    </Stack>
  );
};

export default SocialIcons;
