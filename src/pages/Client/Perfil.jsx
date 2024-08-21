import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { jwtDecode } from 'jwt-decode';
import authService from '../../shared/service/AuthContext';

const MySwal = withReactContent(Swal);

export default function Perfil() {
  const [datos, setDatos] = useState({
    id_user: "",
    name: "",
    lastname: "",
    second_lastname: "",
    email: "",
    phone: "",
    id_rol: "",
    status: true,
  });

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    second_lastname: "",
    email: "",
    phone: "",
    id_rol: "",
    password: "",
  });

  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const accessToken = localStorage.getItem('access_token');
        if (accessToken) {
          const decodedToken = jwtDecode(accessToken);
          const email = decodedToken.email;
          if (email) {
            const userData = await getUserByEmail(email);
            setDatos(userData);
            setFormData({
              name: userData.name,
              lastname: userData.lastname,
              second_lastname: userData.second_lastname,
              email: userData.email,
              phone: userData.phone,
              id_rol: userData.id_rol,
              password: "", // Contraseña no se debe mostrar ni actualizar directamente
            });
          } else {
            console.error('No se pudo obtener el correo electrónico del token.');
          }
        } else {
          console.error('No hay token de acceso disponible.');
        }
      } catch (error) {
        console.error('Error al obtener el perfil del usuario:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleEditClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    // Cierra el modal y muestra el SweetAlert
    setOpen(false);

    const result = await MySwal.fire({
      title: "Confirmar",
      text: "¿Estás seguro de que deseas guardar los cambios?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1F2D40",
      confirmButtonText: "Sí, guardar",
      cancelButtonText: "Cancelar",
      cancelButtonColor: "#ff0000",
    });

    if (result.isConfirmed) {
      // Actualiza los datos con los valores editados
      setDatos({
        ...datos,
        name: formData.name,
        lastname: formData.lastname,
        second_lastname: formData.second_lastname,
        email: formData.email,
        phone: formData.phone,
        id_rol: formData.id_rol,
        // No se actualiza el campo 'status'
      });

      // Muestra un mensaje de éxito
      MySwal.fire({
        title: "Guardado",
        text: "Los datos han sido actualizados",
        icon: "success",
        confirmButtonColor: "#1F2D40",
      });
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="50vh" // Full height of the viewport
    >
      <Card sx={{ width: "100%" }}>
        <CardHeader
          title="Datos Personales"
          sx={{
            padding: 2,
            backgroundColor: "#1F2D40",
            color: "#fff",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "space-between",
          }}
          action={
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "#000",
                marginRight: 2,
              }}
              startIcon={<EditIcon />}
              onClick={handleEditClick}
            >
              Editar Datos
            </Button>
          }
        />
        <Divider />
        <CardContent
          sx={{
            padding: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box display="flex" justifyContent="space-between">
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontWeight: "bold" }}
            >
              Nombre
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {datos.name} {datos.lastname} {datos.second_lastname}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontWeight: "bold" }}
            >
              Correo Electrónico
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {datos.email}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontWeight: "bold" }}
            >
              Teléfono
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {datos.phone}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontWeight: "bold" }}
            >
              Rol
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {datos.id_rol}
            </Typography>
          </Box>
        </CardContent>

        {/* Dialog for Editing */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle
            sx={{
              backgroundColor: "#1F2D40",
              color: "#fff",
              marginBottom: 2,
            }}
          >
            Editar Datos
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nombre"
              type="text"
              fullWidth
              value={formData.name}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              id="lastname"
              label="Apellido Paterno"
              type="text"
              fullWidth
              value={formData.lastname}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              id="second_lastname"
              label="Apellido Materno"
              type="text"
              fullWidth
              value={formData.second_lastname}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              id="email"
              label="Correo Electrónico"
              type="email"
              fullWidth
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              id="phone"
              label="Teléfono"
              type="text"
              fullWidth
              value={formData.phone}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              id="id_rol"
              label="Rol"
              type="text"
              fullWidth
              value={formData.id_rol}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              id="password"
              label="Contraseña"
              type={showPassword ? "text" : "password"}
              fullWidth
              value={formData.password}
              onChange={handleInputChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              sx={{
                color: "#fff",
                backgroundColor: "#ff0000",
                "&:hover": {
                  backgroundColor: "#ff0000",
                },
              }}
            >
              Cancelar
            </Button>
            <Button
              onClick={handleSave}
              sx={{
                color: "#fff",
                backgroundColor: "#1F2D40",
                "&:hover": {
                  backgroundColor: "#1F2D40",
                },
              }}
            >
              Guardar
            </Button>
          </DialogActions>
        </Dialog>
      </Card>
    </Box>
  );
}
