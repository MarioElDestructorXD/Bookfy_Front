import { useState, useEffect } from "react";
import { Box, Button, MobileStepper, Paper, Typography } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import Imagen1 from "../assets/images/Error404.png";
import Imagen2 from "../assets/images/Error500.png";

const imageList = [
  {
    src: Imagen1,
    title: "Título 1",
    description: "Descripción de la imagen 1",
  },
  {
    src: Imagen2,
    title: "Título 2",
    description: "Descripción de la imagen 2",
  },
  // Agrega más imágenes según sea necesario
];

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = imageList.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prevActiveStep) =>
        prevActiveStep === maxSteps - 1 ? 0 : prevActiveStep + 1
      );
    }, 3000); // Cambiar imagen cada 3 segundos

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

  return (
    <Box sx={{ maxWidth: "auto", flexGrow: 1, mx: "auto", mt: 4 }}>
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
        <Typography variant="h6">{imageList[activeStep].title}</Typography>
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
          src={imageList[activeStep].src}
          alt={imageList[activeStep].title}
          sx={{
            width: "100%",
            height: "100%",
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
            {imageList[activeStep].description}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{ mt: 1 }}
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
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Anterior
          </Button>
        }
        sx={{ bgcolor: "background.default", mt: 2 }}
      />
    </Box>
  );
}
