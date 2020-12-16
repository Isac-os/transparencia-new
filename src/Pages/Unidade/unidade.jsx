import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Image, Breadcrumb, Card, Alert } from 'react-bootstrap';
import UnidadesService from '../../Services/UnidadesService';

import './unidade.css';

export default function Unidade(props) {
  const [unit, setUnit] = useState([]);
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const id = props.match.params.id;
    UnidadesService.get(id).then(results => {
      setUnit(results.data);
    })
    /* const fetchData = async () => {
      const url = await UnidadesService.get('/units/' + props.match.params.id);
      setUnit(url.data);
      // setLoading(false);
    };
    fetchData(); */
  }, [props]);

  const {
    accountability,
    accounting_docs,
    contacts,
    public_call,
    selection_approval,
    management_contracts,
    selective_proccess,
    people,
    servers,
    mat_med,
    politics,
    contractThirdParties,
    historic } = unit;

  const newArray = [
    {
      id: 1,
      name: " Prestação de contas",
      data: accountability
    },
    {
      id: 2,
      name: " Documentos de contabilidade",
      data: accounting_docs
    },
    {
      id: 3,
      name: " Contatos",
      data: contacts
    },
    {
      id: 4,
      name: " Chamada pública",
      data: public_call
    },
    {
      id: 5,
      name: " Aprovação da seleção",
      data: selection_approval
    },
    {
      id: 6,
      name: " Contratos de gestão",
      data: management_contracts
    },
    {
      id: 7,
      name: " Processo seletivo",
      data: selective_proccess
    },
    {
      id: 8,
      name: " Pessoas",
      data: people
    },
    {
      id: 9,
      name: " Servidores",
      data: servers
    },
    {
      id: 10,
      name: " Material médico",
      data: mat_med
    },
    {
      id: 11,
      name: " Política",
      data: politics
    },
    {
      id: 12,
      name: " Contrato de partidos terceiros ",
      data: contractThirdParties
    },
    {
      id: 13,
      name: " Histórico",
      data: historic
    }
  ]
  function handleChange(event) {
    const id = +event.target.value - 1;
    const finalData = newArray[id].data;
    if (finalData !== null) {
      setDocs(finalData)
    } else {
      setDocs("")
    }
    return;
  }
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
                <Form.Control className="seletor" as="select" size="lg" onChange={handleChange}>
                  <option value="">Selecione uma opção</option>
                  {newArray.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
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

    </>

  )
}