import React, { useState } from "react";
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

const MySwal = withReactContent(Swal);

export default function Perfil() {
  const [datos, setDatos] = useState({
    nombre: "Mario",
    apellido: "Rodriguez",
    segundoApellido: "Gonzalez",
    correo: "mario00504@gmail.com",
    telefono: "1234567890",
    rol: "1", // ejemplo de ID de rol
    contraseña: "*************",
  });

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: datos.nombre,
    apellido: datos.apellido,
    segundoApellido: datos.segundoApellido,
    correo: datos.correo,
    telefono: datos.telefono,
    rol: datos.rol,
    contraseña: datos.contraseña,
  });

  const [showPassword, setShowPassword] = useState(false);

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
        nombre: formData.nombre,
        apellido: formData.apellido,
        segundoApellido: formData.segundoApellido,
        correo: formData.correo,
        telefono: formData.telefono,
        rol: formData.rol,
        contraseña: formData.contraseña,
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
              {datos.nombre} {datos.apellido} {datos.segundoApellido}
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
              {datos.correo}
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
              {datos.telefono}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontWeight: "bold" }}
            >
              Contraseña
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {"*".repeat(datos.contraseña.length)}
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
              id="nombre"
              label="Nombre"
              type="text"
              fullWidth
              value={formData.nombre}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              id="apellido"
              label="Apellido Paterno"
              type="text"
              fullWidth
              value={formData.apellido}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              id="segundoApellido"
              label="Apellido Materno"
              type="text"
              fullWidth
              value={formData.segundoApellido}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              id="correo"
              label="Correo Electrónico"
              type="email"
              fullWidth
              value={formData.correo}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              id="telefono"
              label="Teléfono"
              type="text"
              fullWidth
              value={formData.telefono}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              id="contraseña"
              label="Contraseña"
              type={showPassword ? "text" : "password"}
              fullWidth
              value={formData.contraseña}
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