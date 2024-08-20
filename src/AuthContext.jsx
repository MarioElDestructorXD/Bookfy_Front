import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

// Crear el contexto
const AuthContext = createContext();

// Proveedor de autenticación
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');
  const url = 'https://hiusjw9flc.execute-api.us-east-1.amazonaws.com/Prod/'


  // Obtener el rol del usuario a partir del token
  const getUserRole = (accessToken) => {
    try {
      const decodedToken = jwtDecode(accessToken);
      return decodedToken['cognito:groups']?.[0] || '';
    } catch (error) {
      console.error('Error al decodificar el token:', error);
      return '';
    }
  };

  // Función para manejar el inicio de sesión
  const login = async (email, password) => {
    try {
      const response = await axios.post(`${url}login`, { email, password }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status === 200) {
        const data = response.data;
        localStorage.setItem('id_token', data.id_token);
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
        localStorage.setItem('role', data.role);
        setIsAuthenticated(true);
        setUserRole(getUserRole(data.access_token)); // Actualiza el rol del usuario
        return data;
      } else {
        console.error('Error en la respuesta del servidor');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error.response?.data?.error_message || error.message);
    }
  };

  // Función para manejar el cierre de sesión
  const logout = () => {
    localStorage.removeItem('id_token');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('role');
    setIsAuthenticated(false);
    setUserRole('');
  };

  // Verificar autenticación en el inicio
  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      setIsAuthenticated(true);
      setUserRole(getUserRole(accessToken));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado para usar el contexto
export function useAuth() {
  return useContext(AuthContext);
}
