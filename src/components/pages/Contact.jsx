import React from "react";
import lightContact from "../../assets/light_contact.svg";
import darkContact from "../../assets/dark_contact.svg";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import RoomIcon from "@mui/icons-material/Room";
import {
  Stack,
  Box,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import ColorModeContext from "../../themes/palette";
const contact = () => {
  const { modeColor } = React.useContext(ColorModeContext);
  const [personMail, setPersonMail] = React.useState({
    name: "",
    subject: "",
    mail: "",
    message: "",
  });

  const handleChange = (event) => {
    setPersonMail(prevPersonMail => {
      return {
        ...prevPersonMail,
        [event.target.name]: event.target.value
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location = `mailto:dazhkhors@gmail.com?subject=${personMail.subject}&body=from%3A%20${encodeURIComponent(personMail.name)}%2C%0D%0A%0D%0A${encodeURIComponent(personMail.message)}%0D%0A%0D%0A`;
  };

  return (
    <section>
      <Typography
        sx={{
          m: "1rem",
          textAlign: "center",
          fontSize: "2.4rem",
          fontWeight: "500",
        }}
        component="h3"
      >
        Contact{" "}
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
      <Stack spacing={{xs:10, md:'none'}} direction={{xs:"column-reverse", md:"row"}} width="100%" justifyContent="space-between">
        <Stack component="div" spacing={2} flex="1" alignItems="center">
          <Box
            display={{ xs:'none', md:'block' }}
            component="img"
            sx={{ width: "100%", maxWidth: "250px" }}
            src={modeColor === "dark" ? darkContact : lightContact}
            alt="ContactImage"
          ></Box>
          <Stack
            spacing={1}
            sx={{
              borderRadius: "10px",
              bgcolor: "background.light",
              width: "90%",
              p: "1rem",
              boxShadow:
                "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
            }}
          >
            <Box
              component="div"
              sx={{ display: "flex", alignItems: "center", columnGap: "1rem" }}
            >
              <MailIcon />
              <div>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  dazhkhors@gmail.com
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Email me for any question or inquiries
                </Typography>
              </div>
            </Box>
            <Divider />
            <Box
              component="div"
              sx={{ display: "flex", alignItems: "center", columnGap: "1rem" }}
            >
              <LocalPhoneIcon />
              <div>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  +58 414 371 3899
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Call me or send me a WhatsApp message
                </Typography>
              </div>
            </Box>
            <Divider />
            <Box
              component="div"
              sx={{ display: "flex", alignItems: "center", columnGap: "1rem" }}
            >
              <RoomIcon />
              <div>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Bogotá, Cundinamarca, Colombia
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Adress Point
                </Typography>
              </div>
            </Box>
          </Stack>
        </Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            flex: "1",
          }}
          component="div"
        >
          <Box
            sx={{
              boxShadow: "2px 13px 38px -7px rgba(0,0,0,0.75)",
              bgcolor: "background.light",
              p: "1rem",
              borderRadius: "10px",
            }}
            height="fit-content"
            width="100%"
            maxWidth={450}
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              id="filled-basic"
              label="YOUR FULL NAME"
              variant="outlined"
              fullWidth
              margin="dense"
              value={personMail.name}
              name="name"
              onChange={handleChange}
            />
            <TextField
              id="filled-basic"
              label="SUBJECT"
              variant="outlined"
              fullWidth
              margin="dense"
              value={personMail.subject}
              name="subject"
              onChange={handleChange}
            />
            <TextField
              id="filled-basic"
              label="YOUR MAIL"
              variant="outlined"
              fullWidth
              margin="dense"
              value={personMail.mail}
              name="mail"
              onChange={handleChange}
            />
            <TextField
              id="filled-basic"
              label="MESSAGE"
              variant="outlined"
              margin="dense"
              value={personMail.message}
              name="message"
              multiline
              maxRows={10}
              fullWidth
              onChange={handleChange}
            />
            <Button sx={{ mt: ".5rem" }} variant="contained" type="submit">
              Send Message
            </Button>
          </Box>
        </Box>
      </Stack>
    </section>
  );
};

export default contact;
