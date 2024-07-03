import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });

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

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center", // Centra verticalmente
          justifyContent: "center", // Centra horizontalmente
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            width: 700,
            height: 600,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
          }}
        >
          <Grid
            container
            rowSpacing={2}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <h1>Register</h1>
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 2, xl: 2 }}
          >
            <Grid item xs={10} md={5}>
              <TextField
                id="name"
                label="Nombre"
                type="text"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={10} md={5}>
              <TextField
                id="lastname"
                label="Apellido Paterno"
                type="text"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={10} md={5}>
              <TextField
                id="lastname2"
                label="Apellido Materno"
                type="text"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={10} md={5}>
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
            </Grid>
            <Grid item xs={10} md={10}>
              <TextField
                id="phone"
                label="Telefono"
                type="tel"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={10} md={10}>
              <TextField
                id="password"
                label="Contraseña"
                type="password"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={10} md={10}>
              <TextField
                id="confirmPassword"
                label="Confirmar Contraseña"
                type="password"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
          </Grid>

          <Grid
            container
            columnSpacing={4}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={5} md={5}>
              <Button type="submit" variant="outlined" sx={{ mt: 2 }}>
                Registrame
              </Button>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                ¿Ya tienes cuenta? <Link component={NavLink} to="/login">Iniciar Sesión</Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
