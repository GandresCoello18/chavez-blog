import React from "react";
import moment from "moment";
import { Card, Badge } from "react-bootstrap";

const CardPost = () => {
  return (
    <>
      <Card
        as="a"
        href="#"
        style={{ cursor: "pointer", textDecoration: "none" }}
        className="card-post"
      >
        <Card.Img
          variant="top"
          src="https://topesdegama.com/app/uploads-topesdegama.com/2020/07/Aspecto-Amazon-Fire-TV-Stick.jpg?x=800&y=488"
        />
        <Card.Body>
          <Badge pill variant="dark" className="p-1 badge-card-post">
            Categoria
          </Badge>{" "}
          <Card.Title className="title-card-post">Card Title</Card.Title>
          <Card.Text className="descripcion-card-post">
            <p className="p-1 mt-3">{moment(new Date()).format("LL. LTS")}</p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardPost;
