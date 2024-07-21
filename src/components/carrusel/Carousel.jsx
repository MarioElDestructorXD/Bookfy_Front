import React, { useState } from "react";
import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import libros from "../../pages/Books/ListLibro";

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
    <Box sx={{ width: "100%" }}>
      <Card style={{ position: 'relative', width: '100%' }}>
        <CardMedia
          component="img"
          image={libros[indiceActual].src}
          title={libros[indiceActual].alt}
          style={{ width: '100%', height: 'auto' }}
        />
        <CardContent style={{
          position: 'absolute',
          bottom: '30%',
          right: '8%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          padding: '20px',
          borderRadius: '10px',
          width: '40%',
          boxSizing: 'border-box'
        }}>
          <Typography variant="h5" component="h2" style={{ margin: '10px 0' }}>
            {libros[indiceActual].title}
          </Typography>
          <Typography variant="subtitle1" component="h3" style={{ margin: '10px 0' }}>
            {libros[indiceActual].category}
          </Typography>
          <Typography variant="body2" style={{ margin: '10px 0' }}>
            {libros[indiceActual].description}
          </Typography>
          <Button
            variant="contained"
            style={{
              backgroundColor: '#28a745',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
            onClick={() => onLeerClick(libros[indiceActual])}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#218838'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#28a745'}
          >
            Más Info
          </Button>
        </CardContent>
        <Box style={{
          position: 'absolute',
          top: '50%',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          transform: 'translateY(-50%)'
        }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              padding: '15px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
            onClick={anteriorImagen}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0067cc'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
          >
            &#9664; {/* Flecha izquierda */}
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              padding: '15px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
            onClick={siguienteImagen}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0067cc'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
          >
            &#9654; {/* Flecha derecha */}
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default Carousel;
