import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Fade, Menu, MenuItem } from "@mui/material";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const NavBar = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleNavigate = (root) => {
    setAnchorEl(null);
    navigate(root);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="absolute" color="inherit">
          <Toolbar>
            <IconButton
              className="menuButton"
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                ...(!isSmallScreen && { flexGrow: 1 }),
              }}
              onClick={() => handleNavigate("/")}
              className="headerTitle"
            >
              DIGITAL SERVICE
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={() => handleNavigate("/")}>
          <p className="menuItem">НАЧАЛО</p>
        </MenuItem>
        <MenuItem onClick={() => handleNavigate("/phone-parts")}>
          <p className="menuItem">ЧАСТИ ЗА IPHONE</p>
        </MenuItem>
        <MenuItem onClick={() => handleNavigate("/phone-repair")}>
          <p className="menuItem">РЕМОНТ НА МОБИЛНИ УСТРОЙСВА</p>
        </MenuItem>
        <MenuItem onClick={() => handleNavigate("/computer-repair")}>
          <p className="menuItem">РЕМОНТ НА КОМПЮТРИ</p>
        </MenuItem>
        <MenuItem onClick={() => handleNavigate("/software-repair")}>
          <p className="menuItem">СОФТУЕР И ОТКЛЮЧВАНЕ</p>
        </MenuItem>
        <MenuItem onClick={() => handleNavigate("/car-diagnostics-repair")}>
          <p className="menuItem">ДИАГНОСТИКА НА АВТОМОБИЛИ</p>
        </MenuItem>
      </Menu>
    </>
  );
};

export default NavBar;
