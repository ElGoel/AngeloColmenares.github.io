import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Box } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const certificates = ({ url, img }) => {
  const [isHover, setIsHover] = useState(false);

  const style = {
    backgroundColor: isHover ? "rgba(33,33,33, .5)" : ''
  }

  return (
    <Card sx={{ minWidth: "200px" }}>
      <CardActionArea component="a" href={url} target="_blank">
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="certificate image"
          sx={{ position: "relative" }}
        />
        <Box
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          style={style}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "200px",
            height: "140px",
            position: "absolute",
            top: "0",
            right: "0",
            border: "solid 5px",
            borderColor: 'background.light', 
            borderBottomColor: "primary.main",
            "&:hover": {
              bgcolor: "transparent",
            },
          }}
        >
          {isHover && <LaunchIcon sx={{ color:'white' }} />}
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default certificates;
