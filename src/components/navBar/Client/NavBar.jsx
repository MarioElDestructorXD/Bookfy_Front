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
import HomeIcon from "@mui/icons-material/Home";

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
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
          ></Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button color="inherit" component={NavLink} to="/">
              <HomeIcon />
            </Button>
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
        <NavListDrawer NavLink={NavLink} setOpen={setOpen} />
      </Drawer>
    </>
  );
}
