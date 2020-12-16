import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Image, Breadcrumb } from 'react-bootstrap';

import api from '../../Services/api';
import './unidade.css';

export default function Unidade(props) {
  const [unit, setUnit] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = await api.get('/units/' + props.match.params.id);
      setUnit(url.data);
      // setLoading(false);
    };
    fetchData();
  }, [props.match.params.id]);

  console.log("Unidade", unit)

  return (
    <>
      <div className="unit">
        <Container>
          <div className="mt-4">
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active href="">
                {unit.name}
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Row>
            <Col md={6}>
              <Image src="/logo-horizontal.svg" fluid
                width="250rem"
                className="d-inline-block align-top logo-isac mt-4"
                alt="isac-logo"
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={12}>
              <h1>{unit.name}</h1>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={12}>
              <h5>{unit.resume}</h5>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="line mt-4"></div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={6}>
              <h5>CNPJ: {unit.cnpj}</h5>
              <h5>Endereço: {unit.address}</h5>
              <h5>Cidade: {unit.city}/{unit.uf}</h5>
            </Col>
            <Col md={6}>
              <h5>CEP: {unit.cep}</h5>
              <h5>Telefone: {unit.phone}</h5>
            </Col>
          </Row>
          <Row className="infos">
            <Col md={12}>
              <h2>Informações</h2>
            </Col>
          </Row>
          <Row className="mt-2 select">
            <Col md={4}>
              <label>Selecione o tipo de informação</label>
              <Form.Group>
                <Form.Control className="seletor" as="select" size="lg">
                  <option>Selecionar</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

        </Container>
      </div>

    </>

  )
}