import React from 'react';
import './CardLibro.css';
import { Button } from '@mui/material';

const CardLibro = ({ image, title, categories, description, onClick }) => {
  return (
    <div className="book-card">
      <img src={image} alt={title} />
      <div className="book-card-content">
        <div className="book-card-title">{title}</div>
        <div className="book-card-categories">{categories}</div>
        <div className="book-card-description">{description}</div>
        <div className="book-card-button">
          <Button variant="contained" color="primary" onClick={onClick}>Leer</Button>
        </div>
      </div>
    </div>
  );
};

export default CardLibro;
