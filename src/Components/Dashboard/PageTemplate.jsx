import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar'

import './pageTemplate.css'
export default function PageTemplate({ children }) {
  return (
    <>
      <Container fluid className="bg-light">
        <Row>
          <Col md={2} className="sidebar border-right d-flex justify-content-between">
            <Sidebar />
          </Col>
          <Col md={10} className="pt-3 pb-5 mb-5 h-100">
            {children}
          </Col>
        </Row>
      </Container>
    </>
  )
}