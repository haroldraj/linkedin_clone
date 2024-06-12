import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.module.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col>
                        <p>LinkedIn Corporation &copy; {new Date().getFullYear()}</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} lg={3}>
                        <a href="/">About</a>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <a href="/">Community Guidelines</a>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <a href="/">Privacy & Terms</a>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <a href="/">Sales Solutions</a>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <a href="/">Safety Center</a>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <a href="/">Careers</a>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <a href="/">Advertising</a>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <a href="/">Small Business</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
