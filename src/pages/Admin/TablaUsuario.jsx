import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import userService from '../../shared/service/Users'; 
import Swal from "sweetalert2";

const TablaUsuario = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Sheila",
      lastname: "Flores",
      second_lastname: "Flores",
      email: "chiiif1123@gmail.com",
      phone_number: "7772274584",
      status: "Activo",
    },
  ]);

  const [open, setOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    email: "",
    name: "",
    lastname: "",
    second_lastname: "",
    phone_number: ""
  });

  const handleEdit = (id) => {
    console.log("Editar usuario con ID:", id);
  };

  const handleCreate = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await userService.registerUser(newUser);
      Swal.fire({
        icon: 'success',
        title: 'Usuario agregado',
        text: 'El usuario se ha agregado exitosamente.',
      });
    } catch (error) {
      console.error("Error al agregar el usuario:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al agregar el usuario. Intenta nuevamente.',
      });
    }
  };

  return (
    <>
      <AppBar position="static" sx={{ width: "100%" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            nav
          </Typography>
        </Toolbar>
      </AppBar>
      <Container
        maxWidth={false}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Paper sx={{ padding: "20px", width: "80%" }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginBottom={2}
          >
            <Typography variant="h5" component="h2">
              Usuarios
            </Typography>
            <Button variant="contained" color="primary" onClick={handleCreate}>
              Agregar usuario
            </Button>
          </Box>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Apellido</TableCell>
                  <TableCell>Segundo Apellido</TableCell>
                  <TableCell>Correo</TableCell>
                  <TableCell>Teléfono</TableCell>
                  <TableCell>Editar</TableCell>
                  <TableCell>Estado</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((u) => (
                  <TableRow key={u.id}>
                    <TableCell>{u.id}</TableCell>
                    <TableCell>{u.name}</TableCell>
                    <TableCell>{u.lastname}</TableCell>
                    <TableCell>{u.second_lastname}</TableCell>
                    <TableCell>{u.email}</TableCell>
                    <TableCell>{u.phone_number}</TableCell>
                    <TableCell>
                      <Button onClick={() => handleEdit(u.id)}>
                        <EditIcon />
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body2"
                        color={u.status === "Activo" ? "green" : "red"}
                      >
                        {u.status}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>

      {/* Modal para agregar usuario */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Agregar Usuario</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nombre"
            fullWidth
            name="name"
            value={newUser.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Apellido"
            fullWidth
            name="lastname"
            value={newUser.lastname}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Segundo Apellido"
            fullWidth
            name="second_lastname"
            value={newUser.second_lastname}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Correo"
            fullWidth
            name="email"
            type="email"
            value={newUser.email}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Teléfono"
            fullWidth
            name="phone_number"
            value={newUser.phone_number}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleSubmit}>Agregar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TablaUsuario;
