import React, { useEffect, useState } from "react";
import { Button, Card, CardContent, CardMedia, Typography, Box, Chip, Divider } from "@mui/material";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import bookService from '../../shared/service/Book';
import Load from '../../shared/plugins/Load';
import MoreBooks from "./MoreBooks";

const MySwal = withReactContent(Swal);

export default function Catalogue() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Load />
      </Box>
    );
  }

  const handlePreview = (book) => {
    MySwal.fire({
      title: book.title,
      html: (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography variant="body1" align="center">
              {book.description || "No hay descripción disponible."}
            </Typography>
            <Typography variant="body2" align="center">
              <strong>Autor:</strong> {book.author || "Desconocido"}
            </Typography>
            <Typography variant="body2" align="center">
              <strong>Año:</strong> {book.year || "Desconocido"}
            </Typography>
            <Box sx={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              {book.image_url && (
                <img src={book.image_url} alt={book.title} style={{ width: "100px", height: "150px" }} />
              )}
            </Box>
          </Box>
        </Box>
      ),
      showCancelButton: true,
      confirmButtonText: "Ver libro",
      confirmButtonColor: '#17A2B8',
      cancelButtonText: "Cerrar",
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(book.pdf_url, "_blank");
      }
    });
  };

  return (
    <>
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#17A2B8' }}>
          Recién agregados
        </Typography>
        <Divider sx={{ marginBottom: "20px", borderBottomWidth: 5, borderBottomColor: '#17A2B8' }} />
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {books.map((book, index) => (
            <Box
              key={index}
              sx={{
                flex: "1 1 200px",
                boxSizing: "border-box",
                maxWidth: "300px",
              }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "300px",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={
                    book.image_url
                  }
                  alt={book.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {book.title}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handlePreview(book)}
                  >
                    Vista previa
                  </Button>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
      <MoreBooks />
    </>
  );
}

