import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './home.css';

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

      <div className="unit-matriz">
        <Container>
          <Row>

          </Row>
        </Container>
      </div>

    </>
  )
}