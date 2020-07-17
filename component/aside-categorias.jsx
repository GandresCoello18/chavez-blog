import React from "react";
import CardPost from "./card-post";
import { Accordion, Card } from "react-bootstrap";

const Categorias = () => {
  return (
    <>
      <Accordion defaultActiveKey="0">
        {[
          "Naturaleza",
          "Tecnologia",
          "Cocina",
          "Turismo",
          "Educacion",
          "Finanzas",
          "Politicas",
        ].map((item) => (
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey={item}>
              {item}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={item}>
              <Card.Body>
                Hello! I'm the body -- aqui va descipcion de {item}
                <CardPost />
                <br />
                <CardPost />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </>
  );
};

export default Categorias;
