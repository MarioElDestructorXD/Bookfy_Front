import React from 'react';
import './DetailedCardLibro.css';
import { Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const DetailedCardLibro = ({ image, title, categories, description, onClose }) => {
  return (
    <div className="detailed-book-card">
      <img src={image} alt={title} className="detailed-book-card-image" />
      <div className="detailed-book-card-content">
        <IconButton className="close-button" onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <div className="detailed-book-card-title" id="detailed-book-card-title">{title}</div>
        <div className="detailed-book-card-categories">
          <span className="detailed-book-card-categories-title">Categorías:</span>
          {categories.split(', ').map((category, index) => (
            <div key={index} className="detailed-book-card-category">{category}</div>
          ))}
        </div>
        <div className="detailed-book-card-description" id="detailed-book-card-description">{description}</div>
        <div className="detailed-book-card-button">
          <Button variant="contained" color="success" className="button">Leer</Button>
        </div>
      </div>
    </div>
  );
};

export default DetailedCardLibro;
