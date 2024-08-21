import { useContext } from 'react';
import { Container } from "@mui/material";
import PublicNavBar from "./components/navBar/Clients/NavBar";
import PrivateNavBar from "./components/navBar/Client/NavBar";
import AdminNavBar from "./components/navBar/Admin/NavBar";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Login from "./pages/Clients/Login";
import Register from "./pages/Clients/Register";
import ResetPassword from "./pages/Clients/ResetPassword";
import UpdatePassword from "./pages/Clients/UpdatePassword";
import ServerError from "./pages/Errors/ServerError";
import NotFound from "./pages/Errors/NotFound";
import AdminRoute from "./Routers/AdminRoute";
import ClientRoute from "./Routers/ClientRoute";
import Unauthorized from "./pages/Errors/Unauthorized"; 
import Catalogue from "./pages/Clients/Catalogue"
import { useAuth } from './AuthContext';

export default function App() {
  const { isAuthenticated, userRole } = useAuth();
  const location = useLocation();

  // Decidir qué Navbar mostrar
  const renderNavBar = () => {
    if (isAuthenticated) {
      if (userRole === 'Admins') {
        return <AdminNavBar />;
      } else if (userRole === 'Clients') {
        return <PrivateNavBar />;
      }
    }
    return <PublicNavBar />;
  };

  return (
    <>
      {renderNavBar()}
      <Container>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/updatePassword" element={<UpdatePassword />} />
          <Route path="/admin/*" element={<AdminRoute />} />
          <Route path="/client/*" element={<ClientRoute />} />
          <Route path="/500" element={<ServerError />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}
