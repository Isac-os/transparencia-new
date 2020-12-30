import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaClinicMedical, FaRegEdit } from 'react-icons/fa';
import { Badge, Card, Col, Form, Row, Alert } from 'react-bootstrap';

import PageTemplate from '../../Components/Dashboard/PageTemplate';

import UnidadeService from '../../Services/UnidadeService';

import './unidade.css';

export default function UnidadeLista() {
  const [units, setUnits] = useState([]);
  const [newUnits, setNewUnits] = useState([]);
  const [ufs, setUfs] = useState([]);
  const [types, setTypes] = useState([]);
  const [unitState, setUnitState] = useState([]);

  useEffect(() => {
    UnidadeService.getAll().then(results => {
      setUnits(results.data);
    })
  }, [])

  useEffect(() => {
    const getUfs = units.map(item => item.uf);
    const newUfs = [...new Set(getUfs)];
    setUfs(newUfs);

    const unitsType = units.map(item => item.tipoUnidadeEnum);
    const newUnitsType = [...new Set(unitsType)];
    setTypes(newUnitsType);

    const unitsState = units.map(item => item.tipoEstadoAtual);
    const newUnitsState = [...new Set(unitsState)];
    setUnitState(newUnitsState);
  }, [units])



  function handleChange(event) {
    const uf = event.target.value;
    const unitsNew = units.filter(item => item.uf == uf)
    setNewUnits(unitsNew);
  }

  return (
    <>
      <PageTemplate>
        <Link to="unidade/nova" className="btn btn-primary mb-4"><FaClinicMedical /> Cadastrar Unidade</Link>
        <h1>Unidades Cadastradas</h1>

        <div className="d-flex align-items-center justify-content-start mt-4 search-input">
          <Form.Group controlId="exampleForm.ControlSelect1" className="mr-4">
            <Form.Label>Selecione o Estado</Form.Label>
            <Form.Control as="select" onChange={handleChange}>
              <option>Selecione</option>
              {ufs.map(item => (<option key={item}>{item}</option>))}
            </Form.Control>
          </Form.Group>
          {/* <Form.Group controlId="exampleForm.ControlSelect1" className="mr-4">
            <Form.Label>Tipo de Unidade</Form.Label>
            <Form.Control as="select">
              <option>Selecione</option>
              {types.map(item => (<option key={item}>{item}</option>))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1" className="mr-4">
            <Form.Label>Status da Unidade</Form.Label>
            <Form.Control as="select">
              <option>Selecione</option>
              {unitState.map(item => (<option key={item}>{item}</option>))}
            </Form.Control>
          </Form.Group> */}
        </div>

        <Row className="unit-list">
          {newUnits.length === 0 ? <>
            {units.map(item => (
              <Col md={4} className="mt-4" key={item.id}>
                <Card>
                  <Link to={`unidade/${item.id}`}>
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
                  </Link>
                </Card>
              </Col>
            ))}
          </> : <>
              {newUnits.map(item => (
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
              ))}</>}
        </Row>
      </PageTemplate>
    </>
  )
}