import React, { useEffect, useState } from "react";
import { Button, Card, CardContent, CardMedia, Typography, Box , Divider} from "@mui/material";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import bookService from '../../shared/service/Book';

const MySwal = withReactContent(Swal);

export default function MoreBooks() {
    const [romanticBooks, setRomanticBooks] = useState([]);
    const [fictionBooks, setFictionBooks] = useState([]);
    const [dramaBooks, setDramaBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const romanticBooks = await bookService.getRomantic();
                const fictionBooks = await bookService.getFiction();
                const dramaBooks = await bookService.getDrama();

                setRomanticBooks(romanticBooks);
                setFictionBooks(fictionBooks);
                setDramaBooks(dramaBooks);
            } catch (error) {
                console.error('Error al obtener los libros:', error);
            }
        };

        fetchBooks();
    }, []);

    const handlePreview = (book) => {
        MySwal.fire({
            title: book.title,
            html: (
                <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography variant="body1" align="center">
                            {book.description || "No hay descripción disponible."}
                        </Typography>
                        <Typography variant="body2" align="center">
                            <strong>Autor:</strong> {book.authors ? book.authors.join(', ') : "Desconocido"}
                        </Typography>
                        <Typography variant="body2" align="center">
                            <strong>Publicador:</strong> {book.publisher || "Desconocido"}
                        </Typography>
                        <Typography variant="body2" align="center">
                            <strong>Año:</strong> {book.publishedDate || "Desconocido"}
                        </Typography>
                        {book.thumbnail && (
                            <Box sx={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                                <img src={book.thumbnail} alt={book.title} style={{ width: "100px", height: "150px" }} />
                            </Box>
                        )}
                    </Box>
                </Box>
            ),
            showCancelButton: true,
            confirmButtonText: "Ver libro",
            confirmButtonColor: '#17A2B8',
            cancelButtonText: "Cerrar",
        }).then((result) => {
            if (result.isConfirmed) {
                window.open(book.infoLink, "_blank");
            }
        });
    };

    const renderBooks = (books, category) => (
        <Box sx={{ marginBottom: "40px" }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#F05600' }}>
                {category}
            </Typography>
            <Divider sx={{ marginBottom: "20px", borderBottomWidth: 4, borderBottomColor: '#F05600' }} />
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
                                image={book.thumbnail}
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
    );

    return (
        <Box sx={{ padding: "20px" }}>
            {renderBooks(romanticBooks, "Romance")}
            {renderBooks(fictionBooks, "Fiction")}
            {renderBooks(dramaBooks, "Drama")}
        </Box>
    );
}
