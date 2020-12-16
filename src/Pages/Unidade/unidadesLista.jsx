import React from 'react';
import { Link } from 'react-router-dom';
import { FaClinicMedical } from 'react-icons/fa';
import { Badge, Card, Col, Form, Image, Row } from 'react-bootstrap';

import PageTemplate from '../../Components/Dashboard/PageTemplate';

import UnidadeService from '../../Services/UnidadeService';


import './unidade.css';

export default function UnidadeLista() {
  React.useEffect(() => {
    UnidadeService.getAll().then(results => {
      console.log(results.data);
    })
  }, [])


  return (
    <>
      <PageTemplate>
        <Link to="/" className="btn btn-primary mb-4"><FaClinicMedical /> Cadastrar Unidade</Link>
        <h1>Unidades Cadastradas</h1>

        <div className="d-flex align-items-center justify-content-start mt-4 search-input">
          <Form.Group controlId="exampleForm.ControlSelect1" className="mr-4">
            <Form.Label>Selecione o Estado</Form.Label>
            <Form.Control as="select">
              <option>1</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1" className="mr-4">
            <Form.Label>Tipo de Unidade</Form.Label>
            <Form.Control as="select">
              <option>1</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1" className="mr-4">
            <Form.Label>Status da Unidade</Form.Label>
            <Form.Control as="select">
              <option>1</option>
            </Form.Control>
          </Form.Group>
        </div>

        <Row className="units-list">
          <Col md={4} className="mt-4">
            <Card>
              <Card.Body>
                <Image src="" alt="" />
              </Card.Body>
              <Card.Footer>
                <h4 className="mb-0">UPA Benedito Bentes</h4>
                <small className="text-muted">Unidade de Pronto Atendimento</small>
                <div className="d-flex align-items-center justify-content-between mt-3">
                  <Badge pill variant="primary" className="py-2 px-4">Araguaína/TO</Badge>
                  <span className="status-publish position-relative">
                    Publicada
                  </span>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </PageTemplate>
    </>
  )
}