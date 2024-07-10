import { useState } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Box,
  Container,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Logo from "../assets/images/user.png";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function Login() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
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
        marginTop: "8px", // Margen superior
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
              sx={{ mb: 2 }} // Espaciado inferior
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
              onChange={handlePasswordChange}
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
              sx={{ mb: 3 }} // Espaciado inferior
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2 }} // Margen superior
            >
              Iniciar Sesión
            </Button>
            <Box
              sx={{
                mt: 2, // Margen superior
                textAlign: "center", // Centrado del contenido
              }}
            >
              <NavLink to="/resetPassword" variant="body2">
                ¿Olvidaste Contraseña?
              </NavLink>
            </Box>
            <Box
              sx={{
                mt: 1, // Margen superior adicional
                textAlign: "center", // Centrado del contenido
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
