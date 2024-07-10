import { useState } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Box,
  Container,
  IconButton,
  InputAdornment,
  Typography,
  Modal,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import CheckIcon from "../assets/images/verify.gif"
import { useNavigate } from "react-router-dom";

export default function UpdatePassword() {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    repeatPassword: "",
  });
  const [showPasswords, setShowPasswords] = useState({
    currentPassword: false,
    newPassword: false,
    repeatPassword: false,
  });
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      currentPassword: data.get("currentPassword"),
      newPassword: data.get("newPassword"),
      repeatPassword: data.get("repeatPassword"),
    });
    setOpenModal(true);
  };

  const handlePasswordChange = (prop) => (event) => {
    setPasswords({ ...passwords, [prop]: event.target.value });
  };

  const handleClickShowPassword = (prop) => () => {
    setShowPasswords({ ...showPasswords, [prop]: !showPasswords[prop] });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    navigate("/", { replace: true });
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
          <Typography variant="h5">Actualizar Contraseña</Typography>
          <form noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="currentPassword"
              label="Contraseña Actual"
              type={showPasswords.currentPassword ? "text" : "password"}
              id="currentPassword"
              autoComplete="current-password"
              value={passwords.currentPassword}
              onChange={handlePasswordChange("currentPassword")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword("currentPassword")}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPasswords.currentPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 3 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="newPassword"
              label="Contraseña Nueva"
              type={showPasswords.newPassword ? "text" : "password"}
              id="newPassword"
              autoComplete="new-password"
              value={passwords.newPassword}
              onChange={handlePasswordChange("newPassword")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword("newPassword")}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPasswords.newPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 3 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="repeatPassword"
              label="Repetir Contraseña Nueva"
              type={showPasswords.repeatPassword ? "text" : "password"}
              id="repeatPassword"
              autoComplete="new-password"
              value={passwords.repeatPassword}
              onChange={handlePasswordChange("repeatPassword")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword("repeatPassword")}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPasswords.repeatPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 3 }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 2,
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color="success"
                sx={{ mr: 1 }}
              >
                Actualizar
              </Button>
              <Button variant="contained" color="error">
                Cancelar
              </Button>
            </Box>
          </form>
        </Box>
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box
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
            }}
          >
            <img
              src={CheckIcon} // Cambia esta ruta por la ubicación de tu gif
              alt="Checkmark"
              style={{ width: "100px", height: "100px" }}
            />{" "}
            <Typography
              id="modal-title"
              variant="h6"
              component="h2"
              sx={{ mt: 2 }}
            >
              Contraseña Actualizada
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              Su contraseña ha sido actualizada exitosamente.
            </Typography>
            <Button
              onClick={handleCloseModal}
              variant="contained"
              sx={{ mt: 2 }}
            >
              Cerrar
            </Button>
          </Box>
        </Modal>
      </Container>
    </Box>
  );
}
