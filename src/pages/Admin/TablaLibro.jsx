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

const TablaLibro = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Fundamentos de JavaScript",
      description:
        "Fundamentos de JavaScript está diseñado para aquellos sin experiencia previa en programación.",
      category: "Programación",
      author: "Bejidar",
      year: 2000,
      status: "Activo",
    },
  ]);

  const handleEdit = (id) => {
    console.log("Editar libro con ID:", id);
  };

  const handleCreate = () => {
    console.log("Crear nuevo libro");
  };

  return (
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
            Libros
          </Typography>
          <Button variant="contained" color="primary" onClick={handleCreate}>
            Agregar Libro
          </Button>
        </Box>
        <TableContainer component={Paper}>
          <TableContainer>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Título</TableCell>
                <TableCell>Descripción</TableCell>
                <TableCell>Categoría</TableCell>
                <TableCell>Autor</TableCell>
                <TableCell>Año</TableCell>
                <TableCell>Editar</TableCell>
                <TableCell>Estado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {books.map((book) => (
                <TableRow key={book.id}>
                  <TableCell>{book.id}</TableCell>
                  <TableCell>{book.title}</TableCell>
                  <TableCell>{book.description}</TableCell>
                  <TableCell>{book.category}</TableCell>
                  <TableCell>{book.author}</TableCell>
                  <TableCell>{book.year}</TableCell>
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
          </TableContainer>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default TablaLibro;
