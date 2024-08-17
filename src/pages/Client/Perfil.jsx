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
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function Perfil() {
  const [datos, setDatos] = useState({
    nombre: "Mario Rodriguez Gonzalez",
    correo: "mario00504@gmail.com",
    contraseña: "*************",
  });

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: datos.nombre,
    correo: datos.correo,
    contraseña: datos.contraseña,
  });

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
      confirmButtonText: "Sí, guardar",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      // Actualiza los datos con los valores editados
      setDatos({
        nombre: formData.nombre,
        correo: formData.correo,
        contraseña: formData.contraseña,
      });

      // Muestra un mensaje de éxito
      MySwal.fire("Guardado", "Los datos han sido actualizados", "success");
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <Card>
      <CardHeader
        title="Datos Personales"
        sx={{ marginLeft: 1, marginRight: 1 }}
        action={
          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            onClick={handleEditClick}
          >
            Editar Datos
          </Button>
        }
      />
      <Divider sx={{ marginLeft: 2, marginRight: 2 }} />
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", marginLeft: 2, fontWeight: "bold" }}
          >
            Nombre y Apellidos
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", marginRight: 2 }}
          >
            {datos.nombre}
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ marginTop: 2 }}
        >
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", marginLeft: 2, fontWeight: "bold" }}
          >
            Correo Electrónico
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", marginRight: 2 }}
          >
            {datos.correo}
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ marginTop: 2 }}
        >
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", marginLeft: 2, fontWeight: "bold" }}
          >
            Contraseña
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", marginRight: 2 }}
          >
            {datos.contraseña}
          </Typography>
        </Box>
      </CardContent>

      {/* Dialog for Editing */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Editar Datos</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="nombre"
            label="Nombre y Apellidos"
            type="text"
            fullWidth
            value={formData.nombre}
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
            id="contraseña"
            label="Contraseña"
            type="password"
            fullWidth
            value={formData.contraseña}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleSave}>Guardar</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
