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
  TextField,
  InputAdornment,
} from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function NavBar({
  navArrayLinks,
  navBarArrayLinks,
  navBarArrayLinksItems,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#1F2D40", color: "#FFFF" }}
      >
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
            <Box>
              {navBarArrayLinks.map((itemBar) => (
                <Button
                  color="inherit"
                  key={itemBar.title}
                  component={NavLink}
                  to={itemBar.path}
                  sx={{
                    mr: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ cursor: "pointer", textAlign: "center" }}
                  >
                    Bookfy
                  </Typography>
                </Button>
              ))}
            </Box>
            <TextField
              variant="standard"
              placeholder="Buscar por autor, título, género ..."
              size="small"
              fullWidth
              sx={{
                color: "white",
                marginRight: 2, // Color del texto blanco
                backgroundColor: "transparent", // Fondo transparente
                borderBottom: "1px solid white", // Borde inferior blanco
                display: { xs: "none", sm: "flex" }, // Mostrar en pantallas sm y superiores
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon style={{ color: "white" }} />{" "}
                    {/* Ícono de búsqueda blanco */}
                  </InputAdornment>
                ),
                style: { color: "white" }, // Color del texto blanco dentro del input
              }}
            />
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "row",
              justifyContent: "center", 
              alignItems: "center", 
            }}
          >
            {navBarArrayLinksItems.map((itemBar) => (
              <NavLink
                key={itemBar.title}
                to={itemBar.path}
                style={({ isActive }) => ({
                  marginRight: "16px", // mr: 2 en Material-UI
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textDecoration: "none", // Elimina el subrayado predeterminado del enlace
                  borderBottom: isActive ? "4px solid" : "none", // Añade una línea debajo del texto cuando el enlace está activo
                  color: "inherit", // Mantiene el color del texto
                })}
              >
                <Typography
                  variant="h7"
                  sx={{ cursor: "pointer", textAlign: "center" }}
                >
                  {itemBar.title}
                </Typography>
              </NavLink>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
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
      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <Box>
          <Card
            sx={{
              backgroundColor: "#f0f0f0",
              boxShadow: "none",
              textAlign: "center",
            }}
          >
            <CardContent>
              <Typography variant="h5" color="textPrimary" fontWeight="bold">
                BOOKFY
              </Typography>
            </CardContent>
          </Card>
          <TextField
            variant="outlined"
            placeholder="Search..."
            size="small"
            sx={{ mt: 2, ml: 2, width: "85%" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <NavListDrawer
          navArrayLinks={navArrayLinks}
          navBarArrayLinks={navBarArrayLinks}
          navBarArrayLinksItems={navBarArrayLinksItems}
          NavLink={NavLink}
          setOpen={setOpen}
        />
      </Drawer>
    </>
  );
}
NavBar.propTypes = {
  navArrayLinks: PropTypes.array.isRequired,
  navBarArrayLinks: PropTypes.array.isRequired,
  navBarArrayLinksItems: PropTypes.array.isRequireds,
};
