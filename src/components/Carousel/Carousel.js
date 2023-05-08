import Carousel from "react-bootstrap/Carousel";
import fun4All from "../../images/fun4All.JPG";
import genderReveal from "../../images/genderReveal.JPG";
import nghtFn from "../../images/nghtFn.JPG";
// import summer from '../../images/summer.PNG';
import "./Carousel.css";

export const CarouselImages = () => {
  return (
    <Carousel variant="dark" style={{ paddingTop: "25px" }}>
      <Carousel.Item interval={6000}>
        <img
          className="d-block w-100"
          src={fun4All}
          alt="Group party for kids and adults"
        />
        <Carousel.Caption>
          <h5 className="cTitleText">FUN FOR ALL</h5>
          <p className="cText">Fun for all ages and any occasion.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <img
          className="d-block w-100"
          src={genderReveal}
          alt="Gender Reveal Party"
        />
        <Carousel.Caption>
          <h5 className="cTitleText" id="gRevealTitle">
            GENDER REVEAL PARTIES
          </h5>
          <p className="cText" id="gRevealText">
            Fun for any gender reveal parties for your soon-to-be addition.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <img
          className="d-block w-100"
          src={nghtFn}
          alt="Neon light night party"
        />
        <Carousel.Caption>
          <h5 className="cTitleText">NIGHT NEON FOAM PARTIES</h5>
          <p className="cText">Hot summer nights just got a lot cooler.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
