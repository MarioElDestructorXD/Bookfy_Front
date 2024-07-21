// Imports 
import { Container } from "@mui/material";
import NavBar from "./components/navBar/NavBar";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { HomeRepairServiceOutlined, SupervisedUserCircleOutlined } from "@mui/icons-material";
// Client
import HomeUser from "./pages/Client/HomeUsers";
import Reading from "./pages/Client/Reading";
import TablaUsuario from "./pages/Admin/TablaUsuario"
import TablaLibro from "./pages/Admin/TablaLibro"
import MiBiblioteca from "./pages/Client/MiBiblioteca"
import Perfil from "./pages/Client/Perfil"
import Home from "./pages/Users/Home";
import ResetPassword from "./pages/Users/ResetPassword";
import UpdatePassword from "./pages/Users/UpdatePassword";
import Login from "./pages/Users/Login";
import Register from "./pages/Users/Register";
// Errors
import ServerError from "./pages/Errors/ServerError"
import NotFound from "./pages/Errors/NotFound"



const navArrayLinks = [
  {
    title: "Login",
    path: "/login",
    icon: <SupervisedUserCircleOutlined />,
  },
];

const navBarArrayLinks = [
  {
    title: "Home",
    path: "/",
    img: <HomeRepairServiceOutlined />,
  },
];

const navBarArrayLinksItems = [
  {
    title: "About",
    path: "/",
    img: <HomeRepairServiceOutlined />,
  },
  {
    title: "About",
    path: "/",
    img: <HomeRepairServiceOutlined />,
  },
];

function PrivateRoute({ element }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" />;
}

export default function App() {
  return (
    <>
      <NavBar
        navArrayLinks={navArrayLinks}
        navBarArrayLinks={navBarArrayLinks}
        navBarArrayLinksItems={navBarArrayLinksItems}
      />
      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/user"
            element={<PrivateRoute element={<HomeUser />} />}
          />
          <Route
            path="/reading"
            element={<PrivateRoute element={<Reading />} />}
          />
          <Route
            path="/resetPassword"
            element={<PrivateRoute element={<ResetPassword />} />}
          />
          <Route
            path="/updatePassword"
            element={<PrivateRoute element={<UpdatePassword />} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/500" element={<ServerError />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/perfil"
            element={<PrivateRoute element={<Perfil />} />}
          />
          <Route
            path="/biblioteca"
            element={<PrivateRoute element={<MiBiblioteca />} />}
          />
          <Route
            path="/tablaLibro"
            element={<PrivateRoute element={<TablaLibro />} />}
          />
          <Route
            path="/tablaUsuario"
            element={<PrivateRoute element={<TablaUsuario />} />}
          />
        </Routes>
      </Container>
    </>
  );
}
