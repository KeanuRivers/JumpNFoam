import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import "./Nav.css";
import logoImg from "../../images/logo(1).jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <div className="logo">
            <img src={logoImg} alt="Logo" />
          </div>
          <Navbar.Brand href="./">Jump 'N Foam </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://google.com">Features</Nav.Link>
            <Nav.Link href="https://moniqueguillen23.wixsite.com/jumpnslideparty">
              Pricing
            </Nav.Link>
            <div className="socialIcons">
              <Nav.Link
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
        </Container>
      </Navbar>
    </>
  );
}
