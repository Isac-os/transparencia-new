import React from 'react';
import { Link } from 'react-router-dom';
import { FaClinicMedical, FaRegEdit } from 'react-icons/fa';
import { Badge, Card, Col, Form, Image, Row } from 'react-bootstrap';

import PageTemplate from '../../Components/Dashboard/PageTemplate';

import UnidadeService from '../../Services/UnidadeService';

import logoImg from '../../assets/img/logo-horizontal.svg'

import './unidade.css';

export default function UnidadeLista() {
  const [units, setUnits] = React.useState([]);
  React.useEffect(() => {
    UnidadeService.getAll().then(results => {
      setUnits(results.data);
      console.log(results.data);
    })
  }, [])


  return (
    <>
      <PageTemplate>
        <Link to="unidade/nova" className="btn btn-primary mb-4"><FaClinicMedical /> Cadastrar Unidade</Link>
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

        <Row className="unit-list">
          {units.map(item => (
            <Col md={4} className="mt-4" key={item.id}>
              <Card>
                <Link className="btn btn-light position-absolute" to={`unidade/${item.id}/editar`}><FaRegEdit /></Link>
                <Card.Img variant="top" src={item.urlLogo} />
                <Card.Footer className="bg-white">
                  <h4 className="mb-0">{item.nome}</h4>
                  <small className="text-muted">{item.tipoUnidadeEnum}</small>
                  <div className="d-flex align-items-center justify-content-between mt-3">
                    <Badge pill variant="primary" className="py-2 px-2">{item.uf}</Badge>
                    <span className={`position-relative ${item.idEstadoAtual === 1 ? 'status-edit' : item.idEstadoAtual === 2 ? 'status-publish' : item.idEstadoAtual === 3 ? 'status-disabled' : ''}`}>
                      {
                        item.idEstadoAtual === 1 ? 'Em edição' :
                          item.idEstadoAtual === 2 ? 'Publicado' :
                            item.idEstadoAtual === 3 ? 'Desativado' : ''
                      }
                    </span>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </PageTemplate>
    </>
  )
}