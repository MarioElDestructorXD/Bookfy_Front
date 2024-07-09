import { Container } from "@mui/material";
import NavBar from "./components/navBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Client/HomeUsers";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserIcon from '@mui/icons-material/AccountCircle'
import HomeIcon from '@mui/icons-material/Home'
import Logo from './assets/images/logo.png'

const navArrayLinks = [
  {
    title: "Login",
    path: "/login",
    icon: <UserIcon />,
  },
];

const navBarArrayLinks = [
  {
    title: "Home",
    path: "/",
    icon: Logo,
    img: <HomeIcon />
  },
];


export default function App() {
  return (
    <>
      <NavBar navArrayLinks={navArrayLinks} navBarArrayLinks={navBarArrayLinks}/>
      <Container sx={{ mt: 5}}>
      <Routes>
        <Route  path="/" element={ <Home />} />
        <Route  path="/login" element={ <Login />} />
        <Route  path="/register" element={ <Register />} />
      </Routes>
      </Container>
    </>
  );
}
