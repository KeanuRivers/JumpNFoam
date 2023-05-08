import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/Nav/Nav";
import { Container } from "react-bootstrap";
import { CarouselImages } from "./components/Carousel/Carousel";

function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <CarouselImages />
      </Container>
    </div>
  );
}

export default App;
