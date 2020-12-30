import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Image, Breadcrumb, Card, Alert } from 'react-bootstrap';
import { FaRegEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PageTemplate from '../../Components/Dashboard/PageTemplate';
import UnidadeService from '../../Services/UnidadeService';

import './unidade.css';

export default function Unidade(props) {
  const [unit, setUnit] = useState([]);
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const id = props.match.params.id;
    UnidadeService.get(id).then(results => {
      setUnit(results.data);
    })
    // /* const fetchData = async () => {
    //   const url = await UnidadesService.get('/units/' + props.match.params.id);
    //   setUnit(url.data);
    //   // setLoading(false);
    // };
    // fetchData(); */
  }, [props]);



  /* function handleChange(event) {
    const id = +event.target.value - 1;
    const finalData = newArray[id].data;
    if (finalData !== null) {
      setDocs(finalData)
    } else {
      setDocs("")
    }
    return;
  } */
  return (
    <> <PageTemplate>
      <div className="unit">
        <Container>
          <div className="mt-4">
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active href="">
                {unit.nome}
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Row>
            <Col md={12} className="d-flex align-items-center justify-content-between">
              <Image src={unit.urlLogo}
                width="250"
                className=""
                alt="isac-logo"
              />
              <Link className="btn btn-primary" to={`${unit.id}/editar`}><FaRegEdit /> Editar Unidade</Link>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={12}>
              <h1>{unit.nome}</h1>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={12}>
              {unit.resumo && <h5>{unit.resumo}</h5>}
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="line mt-4"></div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={6}>
              {unit.cnpj && <h5>CNPJ: {unit.cnpj}</h5>}
              <h5>Endereço: {unit.endereco}</h5>
              <h5>Cidade: {unit.city}/{unit.uf}</h5>
            </Col>
            <Col md={6}>
              <h5>CEP: {unit.cep}</h5>
              <h5>Telefone: {unit.telefone}</h5>
            </Col>
          </Row>
          <Row className="infos d-none">
            <Col md={12}>
              <h2>Informações</h2>
            </Col>
          </Row>
          {/*  <Row className="mt-2 select">
            <Col md={4}>
              <label>Selecione o tipo de informação</label>
              <Form.Group>
                <Form.Control className="seletor" as="select" size="lg" onChange={handleChange}>
                  <option value="">Selecione uma opção</option>
                  {newArray.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row> */}
          <Row className="d-none">
            <Container>
              <>
                {docs.length === 0 ? <>
                  <Alert variant="secondary">
                    Não existem documentos cadastrados nessa categoria.
                  </Alert>
                </> :
                  docs.map(item => (
                    <Card key={item.id} className="mb-2">
                      <Card.Body className="d-flex align-items-center justify-content-between">
                        <p className="w-50"><small><strong>Documento</strong></small><br />
                          {item.document || item.name}</p>
                        <p><small><strong>Última atualização</strong></small><br />
                          {item.update_date || "Sem data de atualização"}</p>
                        <a href={item.url_document || item.data} className="btn btn-primary" rel="noreferrer" target="_blank">Download</a>
                      </Card.Body>
                    </Card>
                  ))
                }
              </>
            </Container>
          </Row>

        </Container>
      </div>

    </PageTemplate>

    </>

  )
}