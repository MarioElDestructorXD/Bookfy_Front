import { useState, useEffect } from "react";
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
import bookService from '../../shared/service/Book'

const TablaLibro = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await bookService.getAllBooks();
        if (response.data && Array.isArray(response.data)) {
          setBooks(response.data);
        } else {
          console.error('Formato de datos inesperado:', response);
        }
      } catch (error) {
        console.error('Error al obtener los libros:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleEdit = (id) => {
    console.log("Editar libro con ID:", id);
  };

  const handleCreate = () => {
    console.log("Crear nuevo libro");
  };

  return (
    <>
      <AppBar position="static" sx={{ width: "100%" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Biblioteca
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
              Libros
            </Typography>
            <Button variant="contained" color="primary" onClick={handleCreate}>
              Agregar Libro
            </Button>
          </Box>
          <TableContainer component={Paper}>
            <Table>
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
                {books.length > 0 ? (
                  books.map((book) => (
                    <TableRow key={book.id_book}>
                      <TableCell>{book.id_book}</TableCell>
                      <TableCell>{book.title}</TableCell>
                      <TableCell>{book.description}</TableCell>
                      <TableCell>{book.gener}</TableCell>
                      <TableCell>{book.author}</TableCell>
                      <TableCell>{book.year}</TableCell>
                      <TableCell>
                        <Button onClick={() => handleEdit(book.id_book)}>
                          <EditIcon />
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="body2"
                          color={book.status === 1 ? "green" : "red"}
                        >
                          {book.status === 1 ? "Activo" : "Inactivo"}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={8} align="center">
                      No hay libros disponibles
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </>
  );
};

export default TablaLibro;