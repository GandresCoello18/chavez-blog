import React, { useState, useEffect } from "react";
import moment from "moment";
import Footer from "../../component/footer";
import { Interes } from '../../component/de-interes';
import Nav from "../../component/nav";
import CommentPost from "../../component/comment-post"
import { Container, Row, Col, Breadcrumb, Badge, Image } from "react-bootstrap";

const CrewDragonArticle = () => {

    const [url, setUrl] = useState('');

    useEffect( () => {
        setUrl(window.location.href);
    });

    return(
        <>
            <Nav title="Crew dragon regresa de la estacion espacial |  Vista al mundo" />
            <Container className="p-5 bg-light">
                <Row className="justify-content-center">
                    <Col sm={12} lg={8}>
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
                            <Breadcrumb.Item href="/articulos">Articulos</Breadcrumb.Item>
                            <Breadcrumb.Item active>Crew Dragon regresa...</Breadcrumb.Item>
                        </Breadcrumb>

                        <h2 className="titulos">Crew dragon regresa de la estacion espacial.</h2>
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
                                <Image src="../img/blog/crew-dragon.jpg" fluid />
                            </Col>
                            <Col xs="12" className="p-2" style={{fontSize: 16, letterSpacing: -0.23, lineHeight: 1.7}}>
                                <p className="p-1">
                                    La cápsula Crew Dragon de SpaceX abandonó este sábado la Estación Espacial Internacional para emprender su regreso a la Tierra con dos astronautas estadounidenses a bordo, según un vídeo de la NASA.
                                </p>
                                <p className="p-1">
                                    "Separación confirmada. Dragon encendió cuatro propulsores de salida para alejarse de la @Space_Station", tuiteó SpaceX después de que la cápsula se desacoplara aparentemente sin problemas de la ISS.
                                </p>
                                <p className='p-1'>
                                    La partida se realizó a las 18:34, dos meses después de la llegada de los dos hombres a bordo de la cápsula creada por la compañía del excéntrico empresario Elon Musk, precisó la agencia espacial estadounidense.
                                </p>
                                <p>
                                    Unas horas antes, ambos astronautas se habían despedido de los tres colegas que dejaron en la ISS aunque había aún cierta incertidumbre respecto a su viaje teniendo en cuenta las condiciones meteorológicas en Florida.
                                </p>

                                <iframe style={{ width: '100%', height: 500 }} src="https://www.youtube.com/embed/sl2jo1bSxl8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                                <h2 className="titulos">Plan de cronograma de la fase de regreso - Horario del este de Estados Unidos</h2>
                                <p className="p-2">
                                    <strong>Viernes 31 de julio</strong>
                                    <br/>
                                    10.45 AM- Conferencia desde la Estación Espacial Internacional con los astronautas Bob Behnken, Doug Hurley and Chris Cassidy.
                                </p>

                                <p className="p-2">
                                    <strong>Sábado 1 de agosto</strong>
                                    <br/>
                                    9.10 AM- Ceremonia de despedida del Demo-2 en la Estación Espacial Internacional
                                    5.15 PM- Proceso de desacoplamiento. La cobertura de NASA TV comienza a las 7.34 PM
                                </p>

                                <p className='p-2'>
                                    <strong>Domingo 2 de agosto</strong>
                                    <br/>
                                    2.42 PM – Amerizaje
                                    5 PM – Conferencia de prensa post-amerizaje con representantes de NASA y SpaceX
                                </p>

                                <p className='p-2'>
                                    <strong>Martes 4 de agosto</strong>
                                    <br/>
                                    4.30- Conferencia de prensa en el Centro Espacial Lyndon B. Johnson con los astronautas Bob Benhken y Doug Hurley.
                                </p>

                                <p className='text-center'>
                                    <Image src="../img/blog/2-crew-dragon.jpg" fluid />
                                </p>

                                <p className='p-1'>
                                    "Lo más difícil fue ponernos en órbita, pero lo más importante es regresar a casa", dijo Behnken unas horas antes de la partida.
                                </p>

                                <p className='p-1'>
                                    La operación es delicada, aun si el año pasado la cápsula Dragon cumplió esta misión sin problemas. El regreso atmosférico probará la resistencia del escudo térmico. Luego, grandes paracaídas ralentizarán el descenso hacia el océano.
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

export default CrewDragonArticle;