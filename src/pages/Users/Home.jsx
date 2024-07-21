import { useState, useEffect } from "react";
import { Box, Button, MobileStepper, Paper, Typography } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [books, setBooks] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const maxSteps = books.length;

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=subject:fiction"
        );
        const booksData = response.data.items.map((item) => ({
          src: item.volumeInfo.imageLinks?.thumbnail,
          title: item.volumeInfo.title,
          description: item.volumeInfo.description,
          pdfUrl: item.accessInfo?.pdf?.downloadLink || '#',
        }));
        setBooks(booksData);
      } catch (error) {
        console.error("Error fetching books data: ", error);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prevActiveStep) =>
        prevActiveStep === maxSteps - 1 ? 0 : prevActiveStep + 1
      );
    }, 3000); // Cambiar libro cada 3 segundos

    return () => {
      clearInterval(timer);
    };
  }, [maxSteps]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
  };

  const handleReadMore = () => {
    navigate('/reading', { state: { pdfUrl: books[activeStep].pdfUrl } });
  };

  return (
    <Box sx={{ maxWidth: "auto", flexGrow: 1, mx: "auto", mt: 4 }}>
      {books.length > 0 && (
        <>
          <Paper
            square
            elevation={3}
            sx={{
              display: "flex",
              alignItems: "center",
              height: 50,
              pl: 2,
              bgcolor: "background.default",
            }}
          >
            <Typography variant="h6">{books[activeStep].title}</Typography>
          </Paper>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 255,
              maxWidth: 600,
              width: "100%",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={books[activeStep].src}
              alt={books[activeStep].title}
              sx={{
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 16,
                left: 16,
                bgcolor: "rgba(0, 0, 0, 0.5)",
                p: 2,
                borderRadius: 1,
                width: "calc(100% - 32px)",
              }}
            >
              <Typography variant="body2" color="white">
                {books[activeStep].description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ mt: 1 }}
                onClick={handleReadMore}
              >
                Leer más
              </Button>
            </Box>
          </Box>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Siguiente
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                <KeyboardArrowLeft />
                Anterior
              </Button>
            }
            sx={{ bgcolor: "background.default", mt: 2 }}
          />
        </>
      )}
    </Box>
  );
}
