import { useState } from "react";
import {
  CssBaseline,
  Button,
  TextField,
  Box,
  Container,
  Typography,
  Modal,
  Box as MuiBox,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [ , setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      email: email,
    });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Correo Enviado",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.href = '/';
    });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
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
      </Container>
    </Box>
  );
}
