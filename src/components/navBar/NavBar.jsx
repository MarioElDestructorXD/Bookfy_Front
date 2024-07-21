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
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import NavListDrawer from "./NavListDrawer";

export default function NavBar({
  navArrayLinks,
  navBarArrayLinks,
  navBarArrayLinksItems,
}) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchQuery}`);
  };

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
                    marginRight: "16px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textDecoration: "none",
                    borderBottom: isActive ? "4px solid" : "none",
                    color: "inherit",
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
            <form
              onSubmit={handleSearchSubmit}
              style={{ display: "flex", flexGrow: 1 }}
            >
              <TextField
                variant="standard"
                placeholder="Buscar por autor, título, género ..."
                size="small"
                fullWidth
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{
                  color: "white",
                  marginRight: 2,
                  backgroundColor: "transparent",
                  borderBottom: "1px solid white",
                  display: { xs: "none", sm: "flex" },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon style={{ color: "white" }} />
                    </InputAdornment>
                  ),
                  style: { color: "white" },
                }}
              />
            </form>
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
  navBarArrayLinksItems: PropTypes.array.isRequired,
};
