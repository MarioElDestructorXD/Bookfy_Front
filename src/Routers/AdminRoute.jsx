import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function AdminRoute() {
  const { isAuthenticated, isAdmin, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/unauthorized" />; // Redirigir a una página de acceso denegado
  }

  return <Outlet />;
}
