import React, { useState, useEffect } from 'react';
import Brazil from '@svg-maps/brazil';
import { CheckboxSVGMap } from 'react-svg-map';
import { getLocationName } from './utils';

import './teste.css';
import { Row, Col, Container, Form } from 'react-bootstrap';

export default function Map() {
  const [teste, setTeste] = useState("")


  function handleLocationFocus(event) {
    const focusedLocation = getLocationName(event);
    setTeste({ focusedLocation: focusedLocation });
  }


  return (
    <Container>
      <Row>
        <Col md={6}>
          <CheckboxSVGMap
            map={Brazil}
            onLocationFocus={handleLocationFocus} />
        </Col>
        <Col md={6}>
          <div>
            {teste.focusedLocation === "Tocantins" ? (
              <div>
                <Row className="mt-4">
                  <Col md={6}>
                    <label>Selecione o tipo de informação</label>
                    <Form.Group>
                      <Form.Control className="seletor" as="select" size="lg">
                        <option>Selecionar</option>
                      </Form.Control>
                    </Form.Group></Col>
                </Row>
              </div>
            ) : null}
          </div>
        </Col>
      </Row>
    </Container >


  )

}
