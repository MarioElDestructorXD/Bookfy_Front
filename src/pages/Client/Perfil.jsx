import React from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Avatar,
  Box,
  AppBar,
  Toolbar,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const Perfil = () => {
  return (
    <>
      <Container
        sx={{ marginTop: "100px", display: "flex", justifyContent: "center" }}
      >
        <Box sx={{ width: "100%", maxWidth: "900px", mt: 4 }}>
          <Grid container spacing={2} sx={{ marginTop: "10px" }}>
            <Grid item xs={12} md={4} textAlign="center">
              <Avatar
                alt="Sheila Camila Sanchez Flores"
                src="https://static.wikia.nocookie.net/doblaje/images/1/1b/Corazon_de_tinta.jpg/revision/latest?cb=20121202192127&path-prefix=es"
                sx={{ width: 100, height: 100, margin: "0 auto" }}
              />
              <Typography
                variant="h6"
                component="div"
                sx={{ marginTop: "10px" }}
              >
                Sheila Camila Sanchez Flores
              </Typography>
              <Typography variant="body1">Me gusta My little pony</Typography>
              <Button startIcon={<EditIcon />} sx={{ marginTop: "10px" }}>
                Editar
              </Button>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>
                Información Personal
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="Nombre"
                    defaultValue="Sheila"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="Apellido Paterno"
                    defaultValue="Sanchez"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="Apellido Materno"
                    defaultValue="Flores"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Telefono"
                    defaultValue="7773448592"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Estado"
                    defaultValue="Morelos"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Nombre de usuario"
                    defaultValue="Chiifff"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Correo electronico"
                    defaultValue="chiif123@gmail.com"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} textAlign="right">
                  <Button variant="contained" color="primary">
                    Editar
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Contraseña"
                    defaultValue="bruno123"
                    variant="outlined"
                    type="password"
                  />
                </Grid>
                <Grid item xs={12} textAlign="right">
                  <Button variant="contained" color="primary">
                    Editar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Perfil;
