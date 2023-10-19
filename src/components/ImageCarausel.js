import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import image1 from '../images/Untitled-1-202.jpg'
import image2 from '../images/crossbar3.jpg'
import image3 from '../images/jamuna bridg.jpg'


export default function ImageCarousel() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption>
            <h3>First Slide</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="First slide" />
          <Carousel.Caption>
            <h3>First Slide</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="First slide" />
          <Carousel.Caption>
            <h3>First Slide</h3>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </>
  );
}

