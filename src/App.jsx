// App.jsx
import { Container } from "@mui/material";
import PublicNavBar from "./components/NavBar/Clients/NavBar";
import PrivateNavBar from "./components/NavBar/Client/NavBar";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
// Importaciones de íconos
import {
  HomeRepairServiceOutlined,
  SupervisedUserCircleOutlined,
} from "@mui/icons-material";
// Importaciones de páginas de clientes
import HomeUser from "./pages/Client/HomeUsers";
import Reading from "./pages/Client/Reading";
import MiBiblioteca from "./pages/Client/MiBiblioteca";
import Perfil from "./pages/Client/Perfil";
import Home from "./pages/Clients/Home";
import ResetPassword from "./pages/Clients/ResetPassword";
import UpdatePassword from "./pages/Clients/UpdatePassword";
import Login from "./pages/Clients/Login";
import Register from "./pages/Clients/Register";
// Importaciones de páginas de administración
import TablaUsuario from "./pages/Admin/TablaUsuario";
import TablaLibro from "./pages/Admin/TablaLibro";
// Importaciones de páginas de errores
import ServerError from "./pages/Errors/ServerError";
import NotFound from "./pages/Errors/NotFound";
// Importaciones de rutas protegidas
import PublicRoute from "./Routers/PublicRoute";
import PrivateRoute from "./Routers/PrivateRoute";
import Catalogue from "./pages/Clients/Catalogue";
import Search from "./pages/Client/Search";

export default function App() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated ? <PrivateNavBar /> : <PublicNavBar />}
      <Container sx={{ mt: 5 }}>
        <Routes>
          {/* Rutas públicas */}
          <Route element={<PublicRoute />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/updatePassword" element={<UpdatePassword />} />
            <Route path="/catalogue" element={<Catalogue />} />
          </Route>
          {/* Rutas privadas */}
          <Route element={<PrivateRoute />}>
            <Route path="/user" element={<HomeUser />} />
            <Route path="/search" element={<Search />} />
            <Route path="/reading" element={<Reading />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/biblioteca" element={<MiBiblioteca />} />
            <Route path="/tablaLibro" element={<TablaLibro />} />
            <Route path="/tablaUsuario" element={<TablaUsuario />} />
          </Route>
          {/* Páginas de errores */}
          <Route path="/500" element={<ServerError />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}
