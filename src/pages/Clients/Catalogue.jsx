import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function Catalogue() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=10"
      )
      .then((response) => {
        setBooks(response.data.items);
      })
      .catch((error) => {
        console.error("Error fetching data from Google Books API:", error);
      });
  }, []);

  const handlePreview = (book) => {
    const categories = book.volumeInfo.categories || []; // Extrae las categorías

    MySwal.fire({
      title: book.volumeInfo.title,
      html: (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {categories.map((category, index) => (
              <Chip
                key={index}
                label={category}
                sx={{
                  backgroundColor: "#1F2D40", // Color de fondo
                  color: "#FFFFFF", // Color del texto
                }}
              />
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="body1" align="center">
              {book.volumeInfo.description || "No hay descripción disponible."}
            </Typography>
          </Box>
        </Box>
      ),
      showCancelButton: true,
      confirmButtonText: "Ver libro",
      cancelButtonText: "Cerrar",
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(book.volumeInfo.previewLink, "_blank");
      }
    });
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Catálogo
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {books.map((book, index) => (
          <Box
            key={index}
            sx={{
              flex: "1 1 200px",
              boxSizing: "border-box",
              maxWidth: "300px", // Ajusta el ancho máximo del Card
            }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "300px", // Ajusta la altura del Card
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={
                  book.volumeInfo.imageLinks?.thumbnail ||
                  "https://via.placeholder.com/140"
                }
                alt={book.volumeInfo.title}
                sx={{ objectFit: "cover" }} // Asegura que la imagen se ajuste bien
              />
              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  {book.volumeInfo.title}
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
  );
}
