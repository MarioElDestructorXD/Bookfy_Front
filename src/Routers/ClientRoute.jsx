import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { Routes, Route } from "react-router-dom";
import PrivateNavBar from '../components/navBar/Client/NavBar'
import HomeUser from '../pages/Client/HomeUsers';
import Search from '../pages/Client/Search';
import Reading from '../pages/Client/Reading';
import Perfil from '../pages/Client/Perfil';


export default function ClientRoute() {
    return (
        <>
            <Routes>
                <Route path="user" element={<HomeUser />} />
                <Route path="search" element={<Search />} />
                <Route path="reading" element={<Reading />} />
                <Route path="perfil" element={<Perfil />} />
            </Routes>
        </>
    )
}
