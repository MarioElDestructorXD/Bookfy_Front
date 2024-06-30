import { Link, Outlet } from "react-router-dom";
import "../App.css";
import { FaSearch, FaUser } from "react-icons/fa";
import {
  Form,
  Navbar,
  Container,
  Nav,
  InputGroup,
  FormControl,
  Image,
} from "react-bootstrap";
import Logo from "../images/logo.png";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" variant="dark" className="navBg">
        <Container fluid>
          <Navbar.Brand className="ms-2" as={Link} to="/">
            <Image src={Logo} rounded />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-between"
          >
            <Form className="d-flex flex-grow-1 mx-lg-3 my-2 my-lg-0">
              <InputGroup>
                <FormControl
                  placeholder="Buscar"
                  aria-label="Buscar"
                  aria-describedby="basic-addon1"
                />
                <InputGroup.Text id="basic-addon1">
                  <FaSearch />
                </InputGroup.Text>
              </InputGroup>
            </Form>
            <Nav className="ms-auto" as={Link} to="about">
              <Nav.Link href="#profile">
                <FaUser style={{ marginRight: "5px" }} />
                Perfil
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};

export default NavBar;
