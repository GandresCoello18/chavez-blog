import React from "react";
import HeadPage from "../component/head";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/app.css";

const MenuNav = ({ title }) => {
  return (
    <>
      <HeadPage title={title} />
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Reynaldo Chavez</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="#pricing">Noticias</Nav.Link>
            <Nav.Link href="#pricing">Mas vistos</Nav.Link>
            <Nav.Link href="#pricing">Destacados</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MenuNav;
