import React from "react";
import { Box, Typography, Grid, Stack } from "@mui/material";

const HistoryResume = () => {
  return (
    <Box
      sx={{
        mt:{ xs:'1rem', md:'0' },
        display: "inline-grid",
        gridTemplateColumns: "1fr 1fr",
        gap: ".5rem",
      }}
    >
      <Box
        sx={{
          boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
          width: "200px",
          height: "150px",
          bgcolor: "background.light",
          borderRadius: "10px",
          p: "1rem",
        }}
      >
        <Typography variant="h3" color="primary.main" fontWeight="700">
          2.5 +
        </Typography>
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <Box
            variant="div"
            sx={{ bgcolor: "text.secondary", width: "45px", height: "1px" }}
          ></Box>
          <Typography variant="h6" fontSize="1.2rem">
            YEARS OF EXPERIENCE
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          boxShadow:
            "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
          width: "200px",
          height: "150px",
          bgcolor: "background.light",
          borderRadius: "10px",
          p: "1rem",
        }}
      >
        <Typography variant="h3" color="primary.main" fontWeight="700">
          4 +
        </Typography>
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <Box
            variant="div"
            sx={{ bgcolor: "text.secondary", width: "45px", height: "1px" }}
          ></Box>
          <Typography variant="h6" fontSize="1.2rem">
            PERSONAL PROJECT
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          boxShadow:
            "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
          width: "200px",
          height: "150px",
          bgcolor: "background.light",
          borderRadius: "10px",
          p: "1rem",
        }}
      >
        <Typography variant="h3" color="primary.main" fontWeight="700">
          5 +
        </Typography>
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <Box
            variant="div"
            sx={{ bgcolor: "text.secondary", width: "45px", height: "1px" }}
          ></Box>
          <Typography variant="h6" fontSize="1.2rem">
            COMPLETE COURSES
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          boxShadow:
            "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
          width: "200px",
          height: "150px",
          bgcolor: "background.light",
          borderRadius: "10px",
          p: "1rem",
        }}
      >
        <Typography variant="h3" color="primary.main" fontWeight="700">
          3 +
        </Typography>
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <Box
            variant="div"
            sx={{ bgcolor: "text.secondary", width: "45px", height: "1px" }}
          ></Box>
          <Typography variant="h6" fontSize="1.2rem">
            CERTIFICATES
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default HistoryResume;
