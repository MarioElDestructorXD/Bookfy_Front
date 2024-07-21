// src/pages/Login.jsx
import { useState } from "react";
import {
  CssBaseline,
  Button,
  TextField,
  Box,
  Container,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router-dom";

import { useAuth } from "../../AuthContext";
import Logo from "../../assets/images/user.png";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (login(email, password)) {
      // Redirige a la página principal o a la página adecuada según el rol del usuario
      navigate("/user"); // Puedes cambiar esto a la página adecuada según tu lógica
    } else {
      // Muestra un mensaje de error si el inicio de sesión falla
      alert("Correo o contraseña incorrectos");
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "8px",
      }}
    >
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "24px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
            borderRadius: "2px",
            backgroundColor: "white",
          }}
        >
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <img src={Logo} alt="Logo" style={{ height: "80px" }} />
          </Box>
          <form noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 3 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Iniciar Sesión
            </Button>
            <Box
              sx={{
                mt: 2,
                textAlign: "center",
              }}
            >
              <NavLink to="/resetPassword" variant="body2">
                ¿Olvidaste Contraseña?
              </NavLink>
            </Box>
            <Box
              sx={{
                mt: 1,
                textAlign: "center",
              }}
            >
              <NavLink to="/register" variant="body2">
                ¿No tienes cuenta? Regístrate
              </NavLink>
            </Box>
          </form>
        </Box>
      </Container>
    </Box>
  );
}
