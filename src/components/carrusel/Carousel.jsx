import  { useState } from 'react';
import './Carrusel.css'; // Import the CSS file
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

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

const imagenes = [
  { 
    src: 'https://picsum.photos/800/300?image=1005', 
    alt: 'Imagen 1',
    title: 'Título del libro 1',
    category: 'Categoría 1',
    description: 'Esta es una breve sinopsis del libro 1.'
  },
  { 
    src: 'https://picsum.photos/800/300?image=1006', 
    alt: 'Imagen 2',
    title: 'Título del libro 2',
    category: 'Categoría 2',
    description: 'Esta es una breve sinopsis del libro 2.'
  },
  { 
    src: 'https://picsum.photos/800/300?image=1008', 
    alt: 'Imagen 3',
    title: 'Título del libro 3',
    category: 'Categoría 3',
    description: 'Esta es una breve sinopsis del libro 3.'
  },
];

const Carousel = () => {
  const [indiceActual, setIndiceActual] = useState(0);

  const siguienteImagen = () => {
    const nuevoIndice = (indiceActual + 1) % imagenes.length;
    setIndiceActual(nuevoIndice);
  };

  const anteriorImagen = () => {
    const nuevoIndice = (indiceActual - 1 + imagenes.length) % imagenes.length;
    setIndiceActual(nuevoIndice);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%' }}>
        <Card className="carousel">
          <CardMedia
            component="img"
            image={imagenes[indiceActual].src}
            title={imagenes[indiceActual].alt}
            className="carousel-image"
          />
          <CardContent className="carousel-content">
            <Typography variant="h5" component="h2" className="carousel-title">
              {imagenes[indiceActual].title}
            </Typography>
            <Typography variant="subtitle1" component="h3" className="carousel-category">
              {imagenes[indiceActual].category}
            </Typography>
            <Typography variant="body2" className="carousel-description">
              {imagenes[indiceActual].description}
            </Typography>
            <Button variant="contained">
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
