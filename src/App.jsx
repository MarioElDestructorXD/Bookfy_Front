import { Container } from "@mui/material";
import NavBar from "./components/navBar/NavBar";
import { Route, Routes } from "react-router-dom";
import HomeUser from "./pages/Client/HomeUsers";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UpdatePassword from "./pages/UpdatePassword";
import ResetPassword from "./pages/ResetPassword";
import UserIcon from '@mui/icons-material/AccountCircle'
import HomeIcon from '@mui/icons-material/Home'
import NotFound from "./pages/Errors/NotFound";
import ServerError from "./pages/Errors/ServerError";


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
    img: <HomeIcon />
  },
];

const navBarArrayLinksItems = [
  {
    title: "About",
    path: "/",
    img: <HomeIcon />
  },
];


export default function App() {
  return (
    <>
      <NavBar navArrayLinks={navArrayLinks} navBarArrayLinks={navBarArrayLinks} navBarArrayLinksItems={navBarArrayLinksItems}/>
      <Container sx={{ mt: 5}}>
      <Routes>
        <Route exact path="/" element={ <Home />} />
        <Route  path="/user" element={ <HomeUser />} />
        <Route  path="/resetPassword" element={ <ResetPassword />} />
        <Route  path="/updatePassword" element={ <UpdatePassword />} />
        <Route  path="/login" element={ <Login />} />
        <Route  path="/register" element={ <Register />} />
        <Route path="/500" element={<ServerError />} /> {/* Ruta para el error 500 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Container>
    </>
  );
}
