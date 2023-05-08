import { Navbar, Container, Nav } from "react-bootstrap";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import logoImg from "../../images/logo.jpg";

export const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" style={{borderBottom: 'solid white'}}>
      <Container>
        <div className="logo">
          <img src={logoImg} alt="Logo" style={{height: '50px'}} />
        </div>
        <Navbar.Brand
          className="navText"
          href="/"
          style={{ fontWeight: "bold" }}
        >
          Jump 'N Foam
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="navText" href="https://facebook.com">
              Home
            </Nav.Link>
            <Nav.Link className="navText" href="https://google.com">
              Link
            </Nav.Link>
            <div className="socialIcons">
              <Nav.Link
                id="facebook"
                href="https://www.facebook.com/people/Jump-N-Slide-Party-Rentals/100083171530134/?mibextid=LQQJ4d"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ color: "#ffffff" }}
                />
              </Nav.Link>
              <Nav.Link
                href="https://www.instagram.com/jumpnslidepartyrentalsaz/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "#ffffff" }}
                />
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
