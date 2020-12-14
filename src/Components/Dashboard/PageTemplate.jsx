import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar'


export default function PageTemplate({ children }) {
  return (
    <>
      <Container fluid className="bg-light">
        <Row>
          <Col md={2} className="sidebar">
            <Sidebar />
          </Col>
          <Col className="py-3">
            {children}
          </Col>
        </Row>
      </Container>
    </>
  )
}