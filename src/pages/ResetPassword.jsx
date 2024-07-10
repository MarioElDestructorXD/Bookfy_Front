import { useState } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Box,
  Container,
  Typography,
  Modal,
  Box as MuiBox,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CheckIcon from "../assets/images/verify.gif";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      email: email,
    });
    setOpenModal(true); // Abre el modal al enviar el formulario
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    navigate("/", { replace: true }); // Redirige a la página principal
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "8px",
      }}
    >
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "24px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
            borderRadius: "2px",
            backgroundColor: "white",
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
            Recuperar Contraseña
          </Typography>
          <form noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={handleEmailChange}
              sx={{ mb: 3 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Recuperar Contraseña
            </Button>
          </form>
        </Box>
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <MuiBox
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 600,
              bgcolor: "background.paper",
              borderRadius: "10px",
              boxShadow: 24,
              p: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img
              src={CheckIcon}
              alt="Checkmark"
              style={{ width: "100px", height: "100px" }}
            />
            <Typography
              id="modal-title"
              variant="h6"
              component="h2"
              sx={{ mt: 2 }}
            >
              Solicitud Enviada
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              Se ha enviado un correo de recuperación de contraseña a su
              dirección de correo electrónico.
            </Typography>
            <Button
              onClick={handleCloseModal}
              variant="contained"
              sx={{ mt: 2 }}
            >
              Cerrar
            </Button>
          </MuiBox>
        </Modal>
      </Container>
    </Box>
  );
}
