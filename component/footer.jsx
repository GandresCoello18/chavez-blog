import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container fluid as="footer" className="p-5 bg-dark">
        <Row className="justify-content-center text-white">
          <Col sm={12} md={6} lg={4} className="p-1">
            <h2 className="p-1">Reynaldo Chavez</h2>
            <p className="p-1">
              Lorem ipsum dolor sit amet. Sed dicta molestiae illo veritatis
              unde tenetur, rerum dolorum asperiores
            </p>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/reynaldo.chavez.270900"
                  target="_black"
                >
                  <img src="img/facebook.svg" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/iam_reynaldox/"
                  target="_black"
                >
                  <img src="img/instagram-sketched.svg" />
                </a>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={6} lg={4} className="p-1">
            <h2>Destacados</h2>
            <ul>
              <li>
                <a>
                  <Row>
                    <img
                      style={{ width: 60, height: 60 }}
                      src="https://colorlib.com/preview/theme/readit/images/image_1.jpg"
                    />
                    <Col xs={6} sm={9}>
                      <p>Even the all-powerful Pointing has no control about</p>
                    </Col>
                  </Row>
                </a>
              </li>
              <li>
                <a>
                  <Row>
                    <img
                      style={{ width: 60, height: 60 }}
                      src="https://colorlib.com/preview/theme/readit/images/image_1.jpg"
                    />
                    <Col xs={6} sm={9}>
                      <p>Even the all-powerful Pointing has no control about</p>
                    </Col>
                  </Row>
                </a>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={6} lg={4} className="p-1">
            <h2>Informacion</h2>
            <ul>
              <li>
                <a>
                  <img src="img/pin.svg" /> Babahoyo - los rios - ecuador
                </a>
              </li>
              <li>
                <a>
                  <img src="img/gmail.svg" /> chavez@gmail.com
                </a>
              </li>
            </ul>
            Iconos gracias ha:{" "}
            <a
              href="https://www.flaticon.com/authors/pixel-perfect"
              title="Pixel perfect"
            >
              Pixel perfect
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              {" "}
              www.flaticon.com
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
