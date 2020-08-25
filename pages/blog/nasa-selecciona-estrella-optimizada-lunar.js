import React, { useState, useEffect } from "react";
import moment from "moment";
import Footer from "../../component/footer";
import Nav from "../../component/nav";
import { Interes } from '../../component/de-interes';
import CommentPost from "../../component/comment-post"
import { Container, Row, Col, Breadcrumb, Badge, Image } from "react-bootstrap";

const Articulo = () => {

    const [url, setUrl] = useState('');

    useEffect( () => {
        setUrl(window.location.href);
    });

    return(
        <>
            <Nav title="NASA SELECCIONA ESTRELLA OPTIMIZADA LUNAR | Vista al mundo" />
            <Container className="p-5 bg-light">
                <Row className="justify-content-center">
                    <Col sm={12} lg={8}>
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
                            <Breadcrumb.Item href="/articulos">Articulos</Breadcrumb.Item>
                            <Breadcrumb.Item active>NASA SELECCIONA...</Breadcrumb.Item>
                        </Breadcrumb>

                        <h2 className="titulos">NASA SELECCIONA ESTRELLA OPTIMIZADA LUNAR</h2>
                        <p className="p-1">{moment(new Date()).format('LL, LTS')}</p>
                        <Row className="justify-content-center">
                            <Col as="a" href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" className="ml-3" xs={1}>
                                <img src="../img/facebook.svg" width="30" height="30" />
                            </Col>
                            <Col as="a" href={`https://twitter.com/intent/tweet?text= ${url}`} target="_blank" className="ml-3" xs={1}>
                                <img src="../img/twitter.svg" width="30" height="30" />
                            </Col>
                            <Col as="a" href={`https://api.whatsapp.com/send?text=Me%20intereso%20este%20tema: ${url}`} className="ml-3" target="_blank" xs={1}>
                                <img src="../img/whatsapp.svg" width="30" height="30" />
                            </Col>
                            <Col as="a" href="#secction-commnet" className="ml-3" xs={3}>
                                <img src="../img/comment.svg" width="30" height="30" /> <Badge variant="dark">0</Badge>
                            </Col>
                        </Row>
                        <Row className="justify-content-center mt-4">
                            <Col xs="12">
                                <Image src="../img/blog/3-image.jpg" fluid />
                            </Col>
                            <Col xs="12" className="p-2" style={{fontSize: 16, letterSpacing: -0.23, lineHeight: 1.7}}>
                                <p className="p-1">
                                    La NASA seleccionó a SpaceX para desarrollar una nave espacial optimizada para la luna para transportar a la tripulación entre la órbita lunar y la superficie de la Luna como parte del programa Artemis de la NASA.
                                </p>

                                <Row className='justify-content-center'>
                                    <Col xs={12} md={6}>
                                        <p className="p-1">
                                            Una nave espacial optimizada para la Luna puede volar muchas veces entre la superficie de la Luna y la órbita lunar sin aletas ni protección térmica necesaria para el regreso de la Tierra. Con un gran volumen habitable y de almacenamiento, Starship es capaz de entregar cantidades significativas de carga para investigación y respaldar operaciones sólidas en la superficie lunar para permitir una base lunar sostenible.
                                        </p>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <Image src="../img/blog/img-peque.jpg" fluid />
                                    </Col>
                                </Row>

                                <p className="p-1">
                                    El año pasado, la NASA anunció que Starship era elegible para la iniciativa Commercial Lunar Payload Services (CLPS), para entregar cargas útiles entre la Tierra y la Luna y permitir que los humanos regresen a la Luna.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12} lg={4}>
                        <Interes />
                    </Col>
                </Row>
                <Row className="p-1">
                    <Col xs={12} md={8}>
                        <hr/>
                        <h2 className="titulos">Comentarios:</h2>
                        <CommentPost />
                        <br/>
                        <br/>

                        <div className="media mb-5">
                            <img src="../img/user.svg" width="50" height="50" className="mr-3" alt="..." />
                            <div className="media-body">
                                <h5 className="mt-0">Mark jordan</h5>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </div>
                        </div>

                        <div className="media mb-5">
                            <img src="../img/user.svg" width="50" height="50" className="mr-3" alt="..." />
                            <div className="media-body">
                                <h5 className="mt-0">Mark jordan</h5>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </>
    );
}

export default Articulo;