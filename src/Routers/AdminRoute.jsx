// AdminRoute.jsx
import { Routes, Route } from "react-router-dom";
import AdminNavBar from '../components/navBar/Admin/NavBar';
import TablaLibro from "../pages/Admin/TablaLibro";
import TablaUsuario from "../pages/Admin/TablaUsuario";

export default function AdminRoute() {
  return (
    <>
      <Routes>
        <Route path="tablaLibro" element={<TablaLibro />} />
        <Route path="tablaUsuario" element={<TablaUsuario />} />
      </Routes>
    </>
  );
}
