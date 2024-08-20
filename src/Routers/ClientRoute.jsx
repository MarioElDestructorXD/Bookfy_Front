import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { Routes, Route } from "react-router-dom";
import PrivateNavBar from '../components/navBar/Client/NavBar'

export default function ClientRoute() {
    <>
        <Routes>
            <Route path="user" element={<HomeUser />} />
            <Route path="search" element={<Search />} />
            <Route path="reading" element={<Reading />} />
            <Route path="perfil" element={<Perfil />} />
        </Routes>
    </>
}
