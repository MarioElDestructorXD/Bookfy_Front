import { Container } from "@mui/material";
import NavBar from "./components/navBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import InboxIcon from "@mui/icons-material/Inbox";


const navArrayLinks = [
  {
    title: "Home",
    path: "/",
    icon: <InboxIcon />,
  },
  {
    title: "Login",
    path: "/login",
    icon: "",
  },
  {
    title: "Register",
    path: "/register",
    icon: "",
  },
];

export default function App() {
  return (
    <>
      <NavBar navArrayLinks={navArrayLinks} />
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
