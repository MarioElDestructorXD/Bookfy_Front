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
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const TablaUsuario = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      nombre: "Sheila",
      apellido: "Flores",
      correo: "chiiif1123@gmail.com",
      telefono: "7772274584",
      rol: "lector",
      libros: "corazon de tinta",
      status: "Activo",
    },
  ]);

  const handleEdit = (id) => {
    console.log("Editar usuario con ID:", id);
  };

  const handleCreate = () => {
    console.log("Crear nuevo usuario");
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
                  <TableCell>Correo</TableCell>
                  <TableCell>Teléfono</TableCell>
                  <TableCell>Rol</TableCell>
                  <TableCell>Libros</TableCell>
                  <TableCell>Editar</TableCell>
                  <TableCell>Estado</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {books.map((book) => (
                  <TableRow key={book.id}>
                    <TableCell>{book.id}</TableCell>
                    <TableCell>{book.nombre}</TableCell>
                    <TableCell>{book.apellido}</TableCell>
                    <TableCell>{book.correo}</TableCell>
                    <TableCell>{book.telefono}</TableCell>
                    <TableCell>{book.rol}</TableCell>
                    <TableCell>{book.libros}</TableCell>
                    <TableCell>
                      <Button onClick={() => handleEdit(book.id)}>
                        <EditIcon />
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body2"
                        color={book.status === "Activo" ? "green" : "red"}
                      >
                        {book.status}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </>
  );
};

export default TablaUsuario;
