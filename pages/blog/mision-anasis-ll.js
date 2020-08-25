import React, { useState, useEffect } from "react";
import moment from "moment";
import Footer from "../../component/footer";
import Nav from "../../component/nav";
import { Interes } from '../../component/de-interes';
import CommentPost from "../../component/comment-post"
import { Container, Row, Col, Breadcrumb, Badge, Image } from "react-bootstrap";

const MisionAnasisArticle = () => {

    const [url, setUrl] = useState('');

    useEffect( () => {
        setUrl(window.location.href);
    });

    return(
        <>
            <Nav title="MISIÓN ANASIS-II | Vista al mundo" />
            <Container className="p-5 bg-light">
                <Row className="justify-content-center">
                    <Col sm={12} lg={8}>
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
                            <Breadcrumb.Item href="/articulos">Articulos</Breadcrumb.Item>
                            <Breadcrumb.Item active>mision anasis...</Breadcrumb.Item>
                        </Breadcrumb>

                        <h2 className="titulos">MISIÓN ANASIS-II</h2>
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
                                <Image src="../img/blog/segundo.jpg" fluid />
                            </Col>
                            <Col xs="12" className="p-2" style={{fontSize: 16, letterSpacing: -0.23, lineHeight: 1.7}}>
                                <p className="p-1">
                                    SpaceX lanzó el 20 de julio con éxito el satélite de comunicaciones militares geoestacionario ANASIS-II para la Agencia de Desarrollo para la Defensa (ADD) de Corea del Sur. El satélite fue transportado a la Órbita de Transferencia Geoestacionaria (GTO) mediante un vehículo Falcon-9 que despegó desde el Complejo de Lanzamientos Espaciales 40 (SLC-40) ubicado en base de la Fuerza Aérea de los Estados Unidos en Cabo Cañaveral, Florida. El satélite fue desplegado en órbita luego de 32 minutos de vuelo tras el despegue.
                                </p>
                                <p className="p-1">
                                    El lanzamiento de ANASIS-II fue la misión orbital número 12 de SpaceX en lo que va del 2020, el vuelo número 90 del Falcon-9 y el aterrizaje número 57 de la primera etapa del cohete.
                                </p>

                                <iframe style={{ width: '100%', height: 500 }} src="https://www.youtube.com/embed/JehAH1T5bpQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                                <p className='p-1'>
                                    <strong>ANASIS-II</strong>
                                    <br/>
                                    En el año 2014 la defensa de Corea del Sur adquirió a Lockheed Martin 40 aviones de combate F-35 por un monto cercano a los USD7 mil millones. Dentro de esta compra de material bélico fue incorporado un satélite de comunicaciones militares que Lockheed Martin tercerizó en la europea Airbus Defence & Space (ADS) en 2016.
                                </p>

                                <p className='p-1'>
                                    El nombre de ANASIS-II proviene de: Army/Navy/Air Force Satellite Information System. La misión, la primera dedicada completamente a comunicaciones militares de Corea del Sur, fue integrada en las facilidades de ADS en Toulouse, Francia, sobre la plataforma Eurostar E3000.
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

export default MisionAnasisArticle;