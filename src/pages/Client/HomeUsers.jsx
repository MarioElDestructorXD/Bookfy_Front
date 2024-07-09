import React, { useState } from 'react';
import Carousel from "../../components/carrusel/Carousel";
import CardLibro from "../../components/Libros/CardLibro";
import DetailedCardLibro from "../../components/Libros/DetailedCardLibro";
import libros from '../../components/Libros/ListLibro';
import Pagination from '@mui/material/Pagination';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  maxHeight: '90vh',
  overflowY: 'auto',
};

export default function HomeUsers() {
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedLibro, setSelectedLibro] = useState(null);
  const librosPorPagina = 3;

  const pageCount = Math.ceil(libros.length / librosPorPagina);

  const librosMostrados = libros.slice(
    (pageNumber - 1) * librosPorPagina,
    pageNumber * librosPorPagina
  );

  const handlePageChange = (event, value) => {
    setPageNumber(value);
  };

  const handleLeerClick = (libro) => {
    setSelectedLibro(libro);
  };

  const handleClose = () => {
    setSelectedLibro(null);
  };

  return (
    <>
      <Carousel />
      <h1>HomeUsers</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        {librosMostrados.map((libro, index) => (
          <CardLibro
            key={index}
            image={libro.image}
            title={libro.title}
            categories={libro.categories}
            description={libro.description}
            onClick={() => handleLeerClick(libro)}
          />
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Pagination
          count={pageCount}
          page={pageNumber}
          onChange={handlePageChange}
          variant="outlined"
          color="primary"
        />
      </div>
      <Modal
        open={!!selectedLibro}
        onClose={handleClose}
        aria-labelledby="detailed-book-card-title"
        aria-describedby="detailed-book-card-description"
      >
        <Box sx={style}>
          {selectedLibro && (
            <DetailedCardLibro
              image={selectedLibro.image}
              title={selectedLibro.title}
              categories={selectedLibro.categories}
              description={selectedLibro.description}
              onClose={handleClose}
            />
          )}
        </Box>
      </Modal>
    </>
  );
}
