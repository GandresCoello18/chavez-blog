import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import Nav from '../../component/nav';
import Footer from '../../component/footer';


function Podcats(){
    return(
        <>
            <Nav title="Spacex y sus misiones espaciales | Vista al mundo" />
            <Container fluid>
                <Row className='justify-content-center'>
                    <Col xs={12} md={10}>
                        <Image src='../img/podcats/PodCast.png' style={{ borderLeft: 1, borderStyle: 'solid', borderColor: '#006773', width: '100%', height: 600 }} fluid />
                    </Col>
                    <Col xs={12} md={10}>
                        <audio controls preload="metadata" src='../mp3/mus.mp3'>
                            <source src="../mp3/fff.mp3" type="audio/mpeg" />
                        </audio>
                    </Col>
                </Row>
            </Container>

            <Footer />

            <style jsx>{`
                .img-podcats {
                    border: 2px solid #006773 !important;
                }
                audio {
                    width: 100%;
                    border: 2px solid #006773;
                    -webkit-transition:all 0.5s linear;
                    -moz-transition:all 0.5s linear;
                    -o-transition:all 0.5s linear;
                    transition:all 0.5s linear;
                    -moz-box-shadow: 2px 2px 4px 0px #006773;
                    -webkit-box-shadow:  2px 2px 4px 0px #006773;
                    box-shadow: 2px 2px 4px 0px #006773;
                    -moz-border-radius:7px 7px 7px 7px;
                    -webkit-border-radius:7px 7px 7px 7px;
                    border-radius:0px 0px 0px 0px;
                }
            `}</style>
        </>
    );
}

export default Podcats;