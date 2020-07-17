import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import ModalVideo from "../component/modal-video";

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);
  const [modalShow, setModalShow] = useState(false);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="carrusel-video"
      >
        <Carousel.Item
          className="item-carrusel"
          onClick={() => setModalShow(true)}
        >
          <img
            className="d-block w-100"
            src="https://i.ytimg.com/vi/fBCXgOD1B10/mqdefault.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="item-caption">
            <h5 className="mt-4 p-3 p-md-1">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </h5>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item
          className="item-carrusel"
          onClick={() => setModalShow(true)}
        >
          <img
            className="d-block w-100"
            src="https://i.ytimg.com/vi/fBCXgOD1B10/mqdefault.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="item-caption">
            <h5 className="mt-4 p-3 p-md-1">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </h5>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item
          className="item-carrusel"
          onClick={() => setModalShow(true)}
        >
          <img
            className="d-block w-100"
            src="https://i.ytimg.com/vi/fBCXgOD1B10/mqdefault.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="item-caption">
            <h5 className="mt-4 p-3 p-md-1">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <ModalVideo show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default ControlledCarousel;
