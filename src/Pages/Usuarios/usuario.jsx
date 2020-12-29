import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { Breadcrumb, Button, Col, Form, Image, Card, Row } from 'react-bootstrap';
import { FaUserPlus } from 'react-icons/fa';
import {Link} from 'react-router-dom';

import UsuarioService from '../../Services/UsuarioService';


import PageTemplate from '../../Components/Dashboard/PageTemplate';
import validator from "../../validators/unidadeFormValidator";

// import './unidade.css';

export default function Usuarios(props) {
    const [users, setUsers] = useState([]);
  useEffect(() => {
    UsuarioService.getAll().then(results => {
      setUsers(results.data);
      console.log(results.data);
    })
  }, [])

  return (
    <>
      <PageTemplate>
        <Link to="unidade/nova" className="btn btn-primary mb-4"><FaUserPlus /> Cadastrar Usuário</Link>
        <h1>Usuários cadastrados</h1>
        <div className="d-flex align-items-center justify-content-start mt-4 search-input">
          <Form.Group controlId="exampleForm.ControlSelect1" className="mr-4">
            <Form.Label>Selecione a Unidade</Form.Label>
            <Form.Control as="select">
              <option>1</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1" className="mr-4">
            <Form.Label>Status do usuário</Form.Label>
            <Form.Control as="select">
              <option>1</option>
            </Form.Control>
          </Form.Group>
        </div>
        <div>
            {users.map(item=>{
                return(
        <Card className="mb-4">
                    <Card.Body>
                        <Row>
                    <>
                    <Col md={2}>
                        Nome: {item.nome}
                    </Col>
                    <Col md={2}>
                        Unidade: {item.unidade.nome}
                    </Col>
                    <Col md={2}>
                        Função: {item.funcao}
                    </Col>
                    <Link>
                    <Button className="ml-6">Editar</Button>
                    </Link>
                    
                    </>
                
            </Row>
            </Card.Body>
            
        </Card>
                )
                
            })}
        </div>

       
       
      </PageTemplate>
    </>
  )
}