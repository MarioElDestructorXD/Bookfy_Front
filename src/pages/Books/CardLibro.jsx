import "./CardLibro.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CardLibro({ image, title, categories, description }) {
  const navigate = useNavigate();

  const handleClickLeer = () => {
    navigate("/reading");
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
}
