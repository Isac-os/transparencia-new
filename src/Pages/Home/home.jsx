import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';

import './home.css';
import Map from '../Teste/teste';

export default function Home() {
  return (
    <>
      <div className="intro">
        <Container>
          <Row>
            <Col md={6}>
              <h1>Seja bem vindo ao portal de transparência</h1>
            </Col>
            <Col md={6}>
              <h6>O Portal de Transparência do Instituto Saúde e Cidadania (ISAC)
              possibilita acesso ágil e simples às informações contábeis e de prestação de contas,
              entre outras, das Unidades de Saúde administradas pelo ISAC.  As informações constantes
              do Portal estão aderentes às disposições previstas na Lei Federal nº 12.527/2011
              (Lei de Acesso à  Informação-LAI), no Decreto Federal nº 7.724/2012
              (regulamentação da LAI), na Lei Federal nº 12.846/2013 (Lei Anticorrupção),
              no Decreto nº 8.420/2015, na Lei nº 9.637/1998 e nos Contratos de Gestão firmados
              com os Entes Públicos. A estruturação das informações foi sistematizada de forma
Institucional e também por Unidades, considerando as suas respectivas tipologias.</h6>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="unit-matriz" id="unidade-matriz">
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
          <div className="map">
            <h1 className="mb-4">Unidades Geridas</h1>
            <Row className="mt-4">
              <Map />
            </Row>
          </div>

        </Container>
      </div>

    </>
  )
}