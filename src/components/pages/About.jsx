import { Avatar, Box } from "@mui/material";
import { border } from "@mui/system";

const About = () => {
  return (
    <Box component="section" sx={{ mt: 10 }}>
      <Box 
        component="div" 
        sx={{ 
          borderRadius: "50%", 
          border: "5px solid",
          overflow: "hidden",
          position: "relative",
          width: "160px",
          height: "160px",
          borderColor: 'primary.main'
        }}>
        <Avatar
          alt="The picture of the autor"
          src="/src/assets/photo.webp"
          sx={{
            width: "150px",
            height: "150px",
            border: "5px solid",
            borderColor: "white",
          }}
        />
      </Box>
    </Box>
  );
};

export default About;
