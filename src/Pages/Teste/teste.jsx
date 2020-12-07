import React from 'react';
import Container from 'react-bootstrap/Container';
import Map from './checkbox-map copy';
// import Brazil from "@svg-maps/brazil";
// import { CheckboxSVGMap } from "react-svg-map";
// import "react-svg-map/lib/index.css";

import CheckboxSVGMap from './checkbox-map';

import './teste.css';
import { Col, Row } from 'react-bootstrap';


export default function Teste() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <Map />
          </Col>
        </Row>
      </Container>
    </div>
  )
}