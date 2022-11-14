import React from "react";
import { StyledToggleButtonGroup } from "./material/StyledToggleButtonGroup";
import { MaterialUISwitch } from "./material/MaterialSwitch";
import ColorModeContext from "../themes/palette";
import logo from "../assets/Logologo.svg";
import {
  AppBar,
  Toolbar,
  ToggleButton,
  Typography,
  Box,
  Menu,
  MenuItem,
  IconButton,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";

const pages = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "education", path: "/education" },
  { name: "skills", path: "/skills" },
  { name: "projects", path: "/projects" },
];

const NavBar = ({ pagesValue, setPagesValue }) => {
  const currentPage = useLocation();
  const current = currentPage.pathname.slice(1, currentPage.pathname.length);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { colorMode } = React.useContext(ColorModeContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null);
    setPagesValue(e.target.textContent);
  };
  const handlePagesChange = (event, updatedPages) => {
    setPagesValue(updatedPages);
  };
  const handleClick = () => {
    setPagesValue("home");
  };

  React.useEffect(() => {
    setPagesValue(current ? current : "home");
  }, []);

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "background.default", boxShadow: 4 }}
    >
      <Toolbar>
        <Typography
          noWrap
          sx={{
            mr: 2,
            textDecoration: "none",
            color: "primary.main",
            display: { xs: "none", md: "flex" },
            alignItems: "end",
          }}
          onClick={handleClick}
          variant="h6"
          component={Link}
          to="/"
        >
          <Box
            component="img"
            src={logo}
            alt="logo"
            sx={{ width: "70px" }}
          ></Box>
          .
          <Typography color="text.primary" variant="h6" component="span">
            Angelo
          </Typography>
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem
                component={Link}
                to={page.path}
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ bgcolor: "background.light" }}
              >
                <Typography textAlign="center">{page.name}</Typography>
              </MenuItem>
            ))}
            <MenuItem>
              <Button
                onClick={handleCloseNavMenu}
                component={Link}
                to="/Contact"
                variant="outlined"
              >
                <Typography variant="h7">Contact</Typography>
              </Button>
            </MenuItem>
          </Menu>
        </Box>
        <Typography
          onClick={handleClick}
          color="primary"
          component={Link}
          to="/"
          noWrap
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="logo"
            sx={{ width: "70px" }}
          ></Box>
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex", justifyContent: "flex-start" },
          }}
        >
          <StyledToggleButtonGroup
            aria-label="alignment button group"
            value={pagesValue}
            onChange={handlePagesChange}
            size="large"
            exclusive
          >
            {pages.map((page) => (
              <ToggleButton
                key={page.name}
                onClick={handleCloseNavMenu}
                component={Link}
                to={page.path}
                value={page.name}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page.name}
              </ToggleButton>
            ))}
          </StyledToggleButtonGroup>
        </Box>
        <Button
          sx={{ display:{xs:'none', md:'block'} }}
          onClick={() => setPagesValue('')}
          component={Link}
          to="/Contact"
          variant="outlined"
        >
          <Typography fontWeight={700} variant="h7">Contact</Typography>
        </Button>
        <MaterialUISwitch onClick={colorMode.toggleColorMode} />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
