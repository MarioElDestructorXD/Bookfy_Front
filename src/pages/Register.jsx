import {
  Box,
  Button,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Logo from "../assets/images/user.png";

export default function Register() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError({
        error: false,
        message: "",
      });
      console.log("Email Correcto");
    } else {
      setError({
        error: true,
        message: "Formato de email incorrecto",
      });
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center" // Ajusta el mínimo para cubrir la pantalla
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 3,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
            borderRadius: 2,
            backgroundColor: "white",
            maxWidth: 550,
            width: "100%",
          }}
        >
          <Box sx={{ flexGrow: 1, alignItems: "center" }}>
            <img src={Logo} alt="Logo" style={{ height: "80px" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              width: "100%",
              gap: 2,
            }}
          >
            <TextField
              id="name"
              label="Nombre"
              type="text"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              id="lastname"
              label="Apellido Paterno"
              type="text"
              variant="outlined"
              fullWidth
              required
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              width: "100%",
              gap: 2,
              mt: 2,
            }}
          >
            <TextField
              id="lastname2"
              label="Apellido Materno"
              type="text"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              id="email"
              label="Correo"
              type="email"
              variant="outlined"
              fullWidth
              required
              helperText={error.message}
              error={error.error}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              width: "100%",
              gap: 2,
              mt: 2,
            }}
          >
            <TextField
              id="phone"
              label="Teléfono"
              type="tel"
              variant="outlined"
              fullWidth
              required
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              mt: 2,
              gap: 2,
            }}
          >
            <TextField
              id="password"
              label="Contraseña"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {password && (
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    )}
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="confirmPassword"
              label="Confirmar Contraseña"
              type={showConfirmPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {confirmPassword && (
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    )}
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
          >
            Registrarse
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center", // Centra el enlace
              width: "100%",
              mt: 2,
            }}
          >
            <NavLink to="/login" variant="body2">
              ¿Ya tienes una cuenta? Inicia sesión
            </NavLink>
          </Box>
        </Box>
      </Box>
    </>
  );
}

