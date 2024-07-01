import { Form, Button, Modal, Image } from "react-bootstrap";
import React, { useState } from "react";
import IconUser from "../images/iconUser.png"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, haciendo una petición a tu API.
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial", alignContent: "center" }}
    >
      <Modal.Dialog>
        <Modal.Body>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <Image src={IconUser} style={{ width: 100, height: 100}} />
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button
              style={{ marginTop: "20px" }}
              variant="primary"
              type="submit"
            >
              Iniciar Sesión
            </Button>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default Login;
