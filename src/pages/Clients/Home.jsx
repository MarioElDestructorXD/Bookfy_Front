import { useState, useEffect } from "react";
import {
  Box,
  Divider,
  MobileStepper,
  Paper,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [actionBooks, setActionBooks] = useState([]);
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
          description: item.volumeInfo.description?.slice(0, 300) + "...", // Limitar la descripción
          pdfUrl: item.accessInfo?.pdf?.downloadLink || "#",
        }));
        setBooks(booksData);

        const actionResponse = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=subject:action"
        );
        const actionBooksData = actionResponse.data.items.map((item) => ({
          src: item.volumeInfo.imageLinks?.thumbnail,
          title: item.volumeInfo.title,
          description: item.volumeInfo.description?.slice(0, 100) + "...", // Limitar la descripción
          pdfUrl: item.accessInfo?.pdf?.downloadLink || "#",
        }));
        setActionBooks(actionBooksData);
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
    }, 5000);

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
    navigate("/reading", { state: { pdfUrl: books[activeStep].pdfUrl } });
  };

  const handleCardClick = (pdfUrl) => {
    navigate("/reading", { state: { pdfUrl } });
  };

  return (
    <Box sx={{ maxWidth: "auto", flexGrow: 1, mx: "auto", mt: 4 }}>
      <Typography variant="h5" fontWeight="bold">
        Ficción
      </Typography>
      <Divider orientation="horizontal" flexItem />
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
              mt: 3,
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
              flexDirection: "row",
            }}
          >
            <Box
              component="img"
              src={books[activeStep].src}
              alt={books[activeStep].title}
              sx={{
                width: 150,
                objectFit: "cover",
                mr: 2,
              }}
            />
            <Box
              sx={{
                bgcolor: "rgba(0, 0, 0, 0.5)",
                p: 2,
                borderRadius: 1,
                flex: 1,
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
            sx={{ bgcolor: "background.default", mt: 2, mb: 3 }}
          />
        </>
      )}

      <Typography variant="h5" fontWeight="bold" sx={{ mt: 4 }}>
        Acción
      </Typography>
      <Divider orientation="horizontal" flexItem />
      {actionBooks.length > 0 && (
        <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
          {actionBooks.map((book, index) => (
            <Grid item xs={12} sm={6} md={2} key={index}>
              <Card
                sx={{ height: 400 }}
                onClick={() => handleCardClick(book.pdfUrl)}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={book.src}
                  alt={book.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {book.title}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {book.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
