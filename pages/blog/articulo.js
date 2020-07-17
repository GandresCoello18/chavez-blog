import React, { useState, useEffect } from "react";
import moment from "moment";
import Footer from "../../component/footer";
import Nav from "../../component/nav";
import CommentPost from "../../component/comment-post"
import { Container, Row, Col, Breadcrumb, Badge, Image } from "react-bootstrap";

const Articulo = () => {

    const [url, setUrl] = useState('');

    useEffect( () => {
        setUrl(window.location.href);
    });

    return(
        <>
            <Nav title="Oferta del día: barra de sonido Samsung hoy por 109 euros | Reinaldo Chavez" />
            <Container className="p-5 bg-light">
                <Row className="justify-content-center">
                    <Col sm={12} lg={8}>
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
                            <Breadcrumb.Item href="/articulos">Articulos</Breadcrumb.Item>
                            <Breadcrumb.Item active>Oferta del día...</Breadcrumb.Item>
                        </Breadcrumb>

                        <h2 className="titulos">Oferta del día: barra de sonido Samsung hoy por 109 euros</h2>
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
                                <Image src="https://topesdegama.com/app/uploads-topesdegama.com/2020/07/Uso-salon-Samsung-HW-N300-800x419.jpg" fluid />
                            </Col>
                            <Col xs="12" className="p-2" style={{fontSize: 16, letterSpacing: -0.23, lineHeight: 1.7}}>
                                <p className="p-1">
                                    El modelo del que hablamos es de los que sólo incluye un elemento, por lo que no tiene subwoofer. Esto, entre otras cosas, hace que la compatibilidad en lo referente al
                                    sonido sea 2.0, lo que no evita que se consiga una más que adecuada localización ya que en el interior de la Samsung HW-N300 existen cuatro altavoces.
                                    Por cierto, las dimensiones no son especialmente grandes en este accesorio, ya que sólo ocupa lo siguiente: 641 x 65 x 107 milímetros. Por lo tanto, cabe en casi cualquier hueco del salón.
                                </p>
                                <p className="p-1">
                                    La conectividad que ofrece esta barra de sonido es bastante buena, ya que incluye opciones físicas como por ejemplo la tradicional denominada Auxiliar y, además, tampoco le falta la posibilidad
                                    de dar uso a un puerto Óptico que es muy habitual en las Smart TV y que ofrece una alta calidad de sonido. Aparte de todos esto el accesorio del que hablamos incluye Bluetooth, lo que evita utilizar
                                    cables para sincronizarse con los televisores que soporten esta opción y, también, con los smartphones. Un detalle adicional: existe un puerto USB que permite el uso tanto de pendrives como de <b>discos de almacenamiento externo</b>.
                                </p>

                                <h2 className="titulos">Control de esta barra de sonido y su oferta</h2>
                                <p className="p-1">
                                    Aparte de incluir un mando a distancia que ofrece una comodidad innegable a la hora de gestionar las reproducciones, la Samsung HW-N300 incluye un pequeño panel táctil que incluye todo lo necesario para que sea posible realizar cualquier
                                    acción de forma muy cómoda. Interesante también son los LEDs frontales (concretamente cuatro), que permiten conocer desde la entrada de sonido que se utiliza hasta los diferentes modos preconfigurados que existen en la barra de sonido.
                                </p>

                                <Image src="https://topesdegama.com/app/uploads-topesdegama.com/2020/07/Controles-Samsung-HW-N300-1024x594.jpg" fluid />
                                <p className="p-1">
                                    La oferta que existe en estos momentos para hacerse con este accesorio es bastante interesante, ya que permite aprovechar un descuento del 15%, por lo que es una buena oportunidad por una barra de sonido compatible con Dolby. Este modelo,
                                    que es compatible con una aplicación para iOS y Android que permite utilizar los teléfonos como si de un mando a distancia se tratase, es posible conseguir ahora mismo en el siguiente enlace de Amazon:
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12} lg={4}>
                        <hr/>
                        <h2 className="titulos mb-4">Te puede interesar</h2>
                        {[0,0,0,0,0,0].map(item => (
                            <div className="card mb-3">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src="https://topesdegama.com/app/uploads-topesdegama.com/2020/07/dron-4k-800x420.jpg" className="card-img rounded" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <p className="card-text">This is a wider card with supporting text below as a natural.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
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