import React from "react";
import Nav from "../component/nav";
import Footer from "../component/footer";
import CardPost from "../component/card-post";
import { Container, Row, Col } from "react-bootstrap";
import CardLarge from "../component/card-notice-large";
import CarruselVideo from "../component/carrusel-video";
import AsideCategoria from "../component/aside-categorias";

const Home = () => {
  return (
    <>
      <Nav title="Reinaldo Chavez" />

      <Container fluid className="p-5">
        <h2 className="p-2 titulos">Destacados</h2>
        <Row className="justify-content-center mb-4 p-2 bg-light">
          {[0, 0, 0, 0].map((item) => (
            <Col sm={12} md={4} lg={3} className="mb-4">
              <CardPost />
            </Col>
          ))}
        </Row>

        <h2 className="p-2 titulos">Videos recientes</h2>
        <Row className="justify-content-center mb-4">
          {[0, 0, 0, 0].map((item) => (
            <Col sm={12} md={6} lg={3} className="mb-2 p-2">
              <CarruselVideo />
            </Col>
          ))}
        </Row>

        <h2 className="p-2 titulos">Ultimas noticias</h2>
        <Row className="justify-content-center mb-4 p-2 bg-light">
          <Col sm={12} md={6} lg={9} className="mb-2 p-2">
            {[0, 0, 0, 0].map((item) => (
              <CardLarge />
            ))}
          </Col>
          <Col sm={12} md={6} lg={3}>
            <h2 className="p-2 titulos">Categorias</h2>
            <AsideCategoria />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Home;
