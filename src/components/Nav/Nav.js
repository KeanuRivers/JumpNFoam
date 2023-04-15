import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Nav.css";
import logoImg from "../../images/logo(1).jpg";
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-solid-svg-icons';


export function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <div className="logo">
          <img src={logoImg} alt="Logo" />
        </div>
        <Container>
          <Navbar.Brand href="#home">Jump 'N Foam </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
