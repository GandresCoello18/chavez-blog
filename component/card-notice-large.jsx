import React from "react";
import moment from "moment";
import { Card, Badge } from "react-bootstrap";

const CardLarge = () => {
  return (
    <>
      <Card
        as="a"
        href="#"
        style={{ textDecoration: "none", color: "#777272" }}
        className="mb-3"
      >
        <Card.Img
          variant="top"
          src="https://topesdegama.com/app/uploads-topesdegama.com/2020/07/Uso-raton-inal%C3%A1mbrico.jpg"
        />
        <Badge
          pill
          variant="dark"
          className="p-1"
          style={{ width: 70, position: "absolute", top: 10, left: 10 }}
        >
          Categoria
        </Badge>{" "}
        <Card.Body>
          <Card.Header>
            <h2 className="titulos">
              Ratones inalámbricos de gran compatibilidad hoy en oferta
            </h2>
            <p>
              {moment(new Date()).format("LL, LTS")}{" "}
              <strong className="p-1 ml-sm-3 ml-md-5">Reynaldo Chavez</strong>
            </p>
          </Card.Header>
          <Card.Text
            className="p-3"
            style={{ fontSize: 16, letterSpacing: -0.23, lineHeight: 2 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            quae accusantium aperiam quidem dolorem adipisci ipsum voluptate
            nulla. Omnis incidunt natus nisi ducimus impedit molestiae ipsum
            iure quaerat recusandae error...{" "}
            <strong className="ml-4" style={{ color: "#c3551f" }}>
              Leer más
            </strong>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardLarge;
