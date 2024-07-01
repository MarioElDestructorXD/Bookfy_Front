import { Link, Outlet } from "react-router-dom";
import "../../App.css";
import { FaSearch, FaUser } from "react-icons/fa";
import {
  Form,
  Navbar,
  Container,
  Nav,
  InputGroup,
  FormControl,
  Image,
  Button,
} from "react-bootstrap";
import Logo from "../../images/logo.png";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" variant="dark" className="navBg">
        <Container>
          <Navbar.Brand className="d-inline-block align-top" as={Link} to="/">
            <Image src={Logo} rounded />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-between"
          >
            <Form className="mx-auto" style={{ width: "50%" }}>
              <InputGroup>
                <FormControl
                  type="text"
                  placeholder="Buscar..."
                  className="mr-sm-2"
                />
                <Button variant="light" id="button-addon1">
                  <FaSearch />
                </Button>
              </InputGroup>
            </Form>
            <Nav className="ml-auto" as={Link} to="about">
              <Nav.Link as={Link} to={"login"}>
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
