import React, { useState } from 'react';
import './Carrusel.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import libros from '../Libros/ListLibro'; 

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff',
    },
    secondary: {
      main: '#6c757d',
    },
  },
});

const Carousel = ({ onLeerClick }) => {
  const [indiceActual, setIndiceActual] = useState(0);

  const siguienteImagen = () => {
    const nuevoIndice = (indiceActual + 1) % libros.length;
    setIndiceActual(nuevoIndice);
  };

  const anteriorImagen = () => {
    const nuevoIndice = (indiceActual - 1 + libros.length) % libros.length;
    setIndiceActual(nuevoIndice);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%' }}>
        <Card className="carousel">
          <CardMedia
            component="img"
            image={libros[indiceActual].src}
            title={libros[indiceActual].alt}
            className="carousel-image"
          />
          <CardContent className="carousel-content">
            <Typography variant="h5" component="h2" className="carousel-title">
              {libros[indiceActual].title}
            </Typography>
            <Typography variant="subtitle1" component="h3" className="carousel-category">
              {libros[indiceActual].category}
            </Typography>
            <Typography variant="body2" className="carousel-description">
              {libros[indiceActual].description}
            </Typography>
            <Button variant="contained" onClick={() => onLeerClick(libros[indiceActual])}>
              Más Info
            </Button>
          </CardContent>
          <Box className="carousel-nav">
            <Button variant="contained" onClick={anteriorImagen}>
              &#9664; {/* Flecha izquierda */}
            </Button>
            <Button variant="contained" onClick={siguienteImagen}>
              &#9654; {/* Flecha derecha */}
            </Button>
          </Box>
        </Card>
      </Box>
    </ThemeProvider>
  );
};

export default Carousel;
