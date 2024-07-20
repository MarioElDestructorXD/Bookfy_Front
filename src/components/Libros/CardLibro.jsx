import React from 'react';
import './CardLibro.css';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

const CardLibro = ({ image, title, categories, description, pdfUrl }) => {
    const history = useHistory();

    const handleClickLeer = () => {
        history.push('/reading');
    };

    return (
        <div className="book-card">
            <img src={image} alt={title} />
            <div className="book-card-content">
                <div className="book-card-title">{title}</div>
                <div className="book-card-categories">{categories}</div>
                <div className="book-card-description">{description}</div>
                <div className="book-card-button">
                    <Button variant="contained" color="primary" onClick={handleClickLeer}>
                        Leer
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CardLibro;
