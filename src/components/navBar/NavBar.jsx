import { useState } from "react";
import {
  AppBar,
  Drawer,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function NavBar({ navArrayLinks, navBarArrayLinks }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            {/* Renderiza los elementos de navBarArrayLinks solo en sm y superior */}
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              {navBarArrayLinks.map((itemBar) => (
                <Button
                  color="inherit"
                  key={itemBar.title}
                  component={NavLink}
                  to={itemBar.path}
                  sx={{ mr: 2 }}
                >
                  <img
                    src={itemBar.icon}
                    alt="Logo"
                    style={{ height: "40px", cursor: "pointer" }}
                  />
                </Button>
              ))}
            </Box>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {/* Renderiza los elementos de navArrayLinks en sm y superior */}
            {navArrayLinks.map((item) => (
              <Button
                color="inherit"
                key={item.title}
                component={NavLink}
                to={item.path}
              >
                {item.icon}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      {/* Drawer para dispositivos móviles */}
      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <Box>
          <Card sx={{ backgroundColor: "#f0f0f0", boxShadow: "none", textAlign: "center"}}>
            <CardContent>
              <Typography variant="h5" color="textPrimary" fontWeight="bold">
                BOOKFY
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <NavListDrawer
          navArrayLinks={navArrayLinks}
          navBarArrayLinks={navBarArrayLinks}
          NavLink={NavLink}
          setOpen={setOpen}
        />
      </Drawer>
    </>
  );
}

// Prop Types
NavBar.propTypes = {
  navArrayLinks: PropTypes.array.isRequired,
  navBarArrayLinks: PropTypes.array.isRequired,
};
