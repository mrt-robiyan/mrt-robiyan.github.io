import React from "react";
import { Form, Nav, Navbar, Button, FormControl, Container, Table, Row, Col } from "react-bootstrap";
import "../../assets/css/scss/landing.css";
import Logo from "../../assets/img/IXC.png";

const MyLanding = () => {
  return (
    <React.Fragment>
      <Navbar fixed="top" className="bg-transparent custom-nav" colapseOnSelect expand="sm">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="costum-collaspse" id="responsive-navbar-nav">
            <Navbar.Brand className="custom-brand" href="#home">
              <img src={Logo} alt="ixc" />
              <span>IXC</span>
            </Navbar.Brand>
            <Nav className="mr-auto justify-content-end" id="navbarNav">
              <Nav.Link className="nav-link" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="nav-link" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="nav-link" href="#features">
                Portfolio
              </Nav.Link>
              <Nav.Link className="nav-link" href="#pricing">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row className="custom-sect" xs={1} md={2}>
          <Col />
          <Col>
            <h1>Iyan X-Code</h1>
            <h2>About</h2>
            <p>
              I am is a junior programmer, I like science in technology. my background is not from IT. Like things
              technology and information. often study in his spare time. Programming languages ​​that I have studied are
              PHP, JavaScript. as well as exploring the laravel framework and React js. I am understand databases like
              mySql, postgreSql
            </p>
          </Col>
        </Row>
      </Container>
      <Container></Container>
      <footer>
        Created by <a href="https://www.instagram.com/iyan.xcode/">Iyan X-Code</a>
      </footer>
    </React.Fragment>
  );
};

export default MyLanding;
