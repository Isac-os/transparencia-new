import React, { useState } from 'react';
import Brazil from '@svg-maps/brazil';
import { CheckboxSVGMap } from 'react-svg-map';
import { getLocationName } from './utils';

import './teste.css';
import { Row, Col, Container, Form, Image, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Teste() {
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
            {teste.focusedLocation === "Distrito Federal" ? (
              <div>
                <Row className="mt-4">
                  <Col md={6}>
                    <label>Selecione o tipo de unidade</label>
                    <Form.Group>
                      <Form.Control className="seletor" as="select" size="lg">
                        <option>Selecionar</option>
                      </Form.Control>
                    </Form.Group>
                    <Col>
                      <Image src="/logo-horizontal.svg" fluid
                        width="200rem"
                        className="d-inline-block align-top logo-isac mt-4"
                        alt="isac-logo"
                      />
                      <h5 className="mt-4">ISAC - Instituto Saúde e Cidadania</h5>
                      <Badge pill variant="primary">
                        Brasilia/DF
                      </Badge>
                      <Link to="/unidade">
                        <Badge className="ml-2" pill variant="success">
                          Visualizar
                      </Badge>
                      </Link>
                    </Col>
                  </Col>
                </Row>
              </div>
            ) : null}
          </div>
          <div>
            {teste.focusedLocation === "São Paulo" ? (
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
