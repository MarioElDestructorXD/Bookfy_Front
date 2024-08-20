import React, { useState } from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import userService from '../../shared/service/Users';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function TablaUsuario() {
  const [users, setUsers] = useState([
    {
      id_user: 1,
      name: "John",
      lastname: "Doe",
      second_lastname: "Smith",
      email: "john.doe@example.com",
      phone: "1234567890",
      id_rol: 1,
      status: true,
    },
    {
      id_user: 2,
      name: "Jane",
      lastname: "Roe",
      second_lastname: "Johnson",
      email: "jane.roe@example.com",
      phone: "0987654321",
      id_rol: 2,
      status: false,
    },
  ]);

  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [newUser, setNewUser] = useState({
    name: "",
    lastname: "",
    second_lastname: "",
    email: "",
    phone: "",
    id_rol: 1,
  });

  const handleClickOpenAdd = () => {
    setOpenAddDialog(true);
  };

  const handleCloseAdd = () => {
    setOpenAddDialog(false);
  };

  const handleAddUser = () => {
    setOpenAddDialog(false);

    MySwal.fire({
      title: "¿Estás seguro?",
      text: "Una vez agregado, el usuario no podrá ser editado fácilmente.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1F2D40",
      cancelButtonColor: "#ff0000",
      confirmButtonText: "Sí, agregar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setUsers([
          ...users,
          { ...newUser, id_user: users.length + 1, status: true },
        ]);
        setNewUser({
          name: "",
          lastname: "",
          second_lastname: "",
          email: "",
          phone: "",
          id_rol: 1,
        });

        MySwal.fire({
          title: "Usuario Agregado!",
          text: "El nuevo usuario ha sido agregado exitosamente.",
          icon: "success",
          confirmButtonColor: "#1F2D40",
        });
      }
    });
  };

  const handleClickOpenEdit = (user) => {
    setCurrentUser(user);
    setOpenEditDialog(true);
  };

  const handleCloseEdit = () => {
    setOpenEditDialog(false);
  };

  const handleUpdateUser = () => {
    setUsers(
      users.map((user) =>
        user.id_user === currentUser.id_user ? currentUser : user
      )
    );
    setOpenEditDialog(false);
    MySwal.fire({
      title: "Usuario Actualizado!",
      text: "El usuario ha sido actualizado exitosamente.",
      icon: "success",
      confirmButtonColor: "#1F2D40",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (currentUser) {
      setCurrentUser((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleDeleteUser = (userId) => {
    MySwal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esta acción.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1F2D40",
      cancelButtonColor: "#ff0000",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setUsers(users.filter((user) => user.id_user !== userId));
        MySwal.fire({
          title: "Usuario Eliminado!",
          text: "El usuario ha sido eliminado exitosamente.",
          icon: "success",
          confirmButtonColor: "#1F2D40",
        });
      }
    });
  };

  return (
    <Container>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom={2}
      >
        <Typography variant="h4">Usuarios</Typography>
        <Button variant="contained" color="primary" onClick={handleClickOpenAdd}>
          Agregar Usuario
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido Paterno</TableCell>
              <TableCell>Apellido Materno</TableCell>
              <TableCell>Correo</TableCell>
              <TableCell>Teléfono</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id_user}>
                <TableCell>{user.id_user}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.lastname}</TableCell>
                <TableCell>{user.second_lastname}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.status ? "Activo" : "Inactivo"}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleClickOpenEdit(user)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteUser(user.id_user)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openAddDialog} onClose={handleCloseAdd}>
        <DialogTitle>Agregar Nuevo Usuario</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Nombre"
            fullWidth
            value={newUser.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="lastname"
            label="Apellido Paterno"
            fullWidth
            value={newUser.lastname}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="second_lastname"
            label="Apellido Materno"
            fullWidth
            value={newUser.second_lastname}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="email"
            label="Correo"
            type="email"
            fullWidth
            value={newUser.email}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="phone"
            label="Teléfono"
            type="tel"
            fullWidth
            value={newUser.phone}
            onChange={handleChange}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Rol</InputLabel>
            <Select
              name="id_rol"
              value={newUser.id_rol}
              onChange={handleChange}
              label="Rol"
            >
              <MenuItem value={1}>Administrador</MenuItem>
              <MenuItem value={2}>Usuario</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAdd} color="error">
            Cancelar
          </Button>
          <Button onClick={handleAddUser} color="primary">
            Agregar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openEditDialog} onClose={handleCloseEdit}>
        <DialogTitle>Editar Usuario</DialogTitle>
        <DialogContent>
          {currentUser && (
            <>
              <TextField
                autoFocus
                margin="dense"
                name="name"
                label="Nombre"
                fullWidth
                value={currentUser.name}
                onChange={handleChange}
              />
              <TextField
                margin="dense"
                name="lastname"
                label="Apellido Paterno"
                fullWidth
                value={currentUser.lastname}
                onChange={handleChange}
              />
              <TextField
                margin="dense"
                name="second_lastname"
                label="Apellido Materno"
                fullWidth
                value={currentUser.second_lastname}
                onChange={handleChange}
              />
              <TextField
                margin="dense"
                name="email"
                label="Correo"
                type="email"
                fullWidth
                value={currentUser.email}
                onChange={handleChange}
              />
              <TextField
                margin="dense"
                name="phone"
                label="Teléfono"
                type="tel"
                fullWidth
                value={currentUser.phone}
                onChange={handleChange}
              />
              <FormControl fullWidth margin="dense">
                <InputLabel>Rol</InputLabel>
                <Select
                  name="id_rol"
                  value={currentUser.id_rol}
                  onChange={handleChange}
                  label="Rol"
                >
                  <MenuItem value={1}>Administrador</MenuItem>
                  <MenuItem value={2}>Usuario</MenuItem>
                </Select>
              </FormControl>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit} color="error">
            Cancelar
          </Button>
          <Button onClick={handleUpdateUser} color="primary">
            Actualizar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
