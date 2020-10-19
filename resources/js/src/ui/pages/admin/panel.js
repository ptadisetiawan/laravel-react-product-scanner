import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import Sidebar from './sidebar';
import './style/dashboard.css';


const Panel = (props) => {
  return (
      <>
    <Container fluid>
    <Row>
        <Col xs={2} id="sidebar-wrapper">
          <Sidebar />
        </Col>
        <Col  xs={10} id="page-content-wrapper">
        <Navbar expand="xl" variant="light" bg="light">
        <Container>
            <Navbar.Brand href="#">Product Scanner Admin Panel</Navbar.Brand>
        </Container>
        </Navbar>
            {props.children}
        </Col>
    </Row>

</Container>
</>
  );
};

export default Panel;
