import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './Footer.module.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={3}>
                        <a href="#">Informazioni</a>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <a href="#">Linee guida della community</a>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <a href="#">Privacy e condizioni</a>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <a href="#">Sales solutions</a>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} lg={3}>
                        <a href="#">Centro sicurezza</a>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <a href="#">Accessibilità</a>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <a href="#">Carriera</a>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <a href="#">Opzioni di annuncio</a>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} lg={3}>
                        <a href="#">Mobile</a>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <a href="#">Talent Solutions</a>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <a href="#">Soluzioni di marketing</a>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <a href="#">Pubblicità</a>
                    </Col>
                </Row>
                <Row className="footer-settings">
                    <Col xs={12} md={6} lg={3} className="d-flex flex-row">
                        <i className="bi bi-question-circle-fill mx-0 mt-2"></i>
                        <div className="ml-2">
                            <a href="#">Domande?</a>
                            <p>Visita il nostro Centro assistenza.</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3} className="d-flex flex-row">
                        <i className="bi bi-gear-fill mx-0 mt-2"></i>
                        <div className="ml-2">
                            <a href="#">Gestisci il tuo account e la tua privacy</a>
                            <p>Vai alle impostazioni</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="mt-4 text-center">
                        <Form>
                            <Form.Group controlId="languages">
                                <Form.Label>Seleziona lingua</Form.Label>
                                <Form.Control as="select">
                                    <option>Inglese (English)</option>
                                    <option>Italiano (Italian)</option>
                                    <option>Russo (Russian)</option>
                                    <option>Francese (French)</option>
                                    <option>Tedesco (German)</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-4 text-center">
                        <p>linkedin corporation &copy; {new Date().getFullYear()}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
