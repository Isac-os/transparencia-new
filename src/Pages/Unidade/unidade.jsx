import React from 'react';
import { Container, Row, Col, Form, Image } from 'react-bootstrap';

export default function Unidade() {
  return (
    <Container>
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
          <h1>ISAC - Instituto Saúde e Cidadania</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={12}>
          <h5>Nulla vel vestibulum tortor, id sodales erat. Nulla facilisi. Proin mollis felis aliquam scelerisque molestie. Suspendisse semper justo sem, et accumsan lorem sollicitudin a. Donec posuere ligula est, eu placerat diam eleifend eget. In id tincidunt justo. Etiam interdum arcu sed ex tincidunt, cursus lacinia arcu finibus. Nunc pulvinar viverra mi in elementum. Pellentesque varius elit id orci semper suscipit. Sed dignissim vitae enim interdum interdum. Duis dapibus lobortis semper. Aliquam rhoncus, augue blandit tincidunt mattis, diam velit suscipit arcu, commodo mollis tortor ligula sed nibh. Sed ac consectetur nisi. Phasellus volutpat lacus eget risus efficitur cursus at at lectus. Quisque bibendum leo eget ex fringilla vehicula.</h5>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className="line mt-4"></div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <h5>CNPJ: </h5>
          <h5>Endereço: </h5>
          <h5>Cidade: </h5>
        </Col>
        <Col md={6}>
          <h5>CEP: </h5>
          <h5>Telefone: </h5>
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
  )
}