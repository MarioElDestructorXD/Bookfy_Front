// PrivateRoute.jsx
import React from "react";
import { useAuth } from "../AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Puedes personalizar un componente de carga
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
