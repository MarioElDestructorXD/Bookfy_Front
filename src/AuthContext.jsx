import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // Estado para administrador
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role"); // Obtener rol desde localStorage
    if (token) {
      setIsAuthenticated(true);
      setIsAdmin(userRole === "admin"); // Verificar si el rol es de administrador
    } else {
      setIsAuthenticated(false);
      setIsAdmin(false);
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    if (email === "admin@example.com" && password === "password123") {
      const token = "admin-token"; // Simulando un token para administrador
      localStorage.setItem("token", token);
      localStorage.setItem("role", "admin"); // Guardar rol de administrador
      setIsAuthenticated(true);
      setIsAdmin(true); // El usuario es administrador
      return true;
    } else if (email === "user@example.com" && password === "password123") {
      const token = "user-token"; // Simulando un token para usuario regular
      localStorage.setItem("token", token);
      localStorage.setItem("role", "user"); // Guardar rol de usuario regular
      setIsAuthenticated(true);
      setIsAdmin(false); // El usuario no es administrador
      return true;
    } else {
      return false; // Credenciales incorrectas
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsAuthenticated(false);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, isAdmin, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
