import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { Breadcrumb, Button, Form } from 'react-bootstrap';


import Input from '../../Components/Forms/Input';
import Select from '../../Components/Forms/Select';
import PageTemplate from '../../Components/Dashboard/PageTemplate';
import UsuarioService from '../../Services/UsuarioService';
import UnidadeService from '../../Services/UnidadeService';

import validator from "../../validators/unidadeFormValidator";

export default function UsuarioFormulario(props) {
  const [units, setUnist] = useState([]);

  const { register, handleSubmit, errors } = useForm();
  const reference = { register, validator, errors };

  useEffect(() => {
    UnidadeService.getAll().then(results => {
      setUnist(results.data);
    })
  }, [props])

  function onSubmit(data) {
    const response = UsuarioService.create(data)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        alert('deu errado')
        console.log(error)
      });
    console.log(data)
  }


  return (
    <>
      <PageTemplate>
        <Breadcrumb>
          <Breadcrumb.Item href="/usuarios">
            Usuarios
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Cadastrar Usuário </Breadcrumb.Item>
        </Breadcrumb>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Row>
            <Input label="Nome da Unidade" name="nome" placeholder="Nome público da unidade" reference={reference} size={12} />
          </Form.Row>
          <Form.Row>
            <Input label="CPF" name="cpf" placeholder="Digite o CPF do usuário" reference={reference} size={4} />
            <Input label="E-mail" name="email" placeholder="Digite o CPF do usuário" reference={reference} size={4} />
          </Form.Row>
          <Form.Row>
            <Input label="Senha" name="senha" placeholder="Senha" reference={reference} size={3} />
            <Input label="Tipo de usuário" name="tipoUsuario" placeholder="Tipo de usuário" reference={reference} size={3} />
          </Form.Row>
          <Form.Row>
            <Input label="Curriculo" name="curriculo" placeholder="Curriculo" reference={reference} size={3} />
            <Input label="Função" name="idFuncaoAtual" placeholder="Função" reference={reference} size={3} />
            <Input label="Unidade" name="idUnidadeAtual" placeholder="Unidade" reference={reference} size={3} />
            <Select label="Unidade" name="idUnidadeAtual" firstoption="Selecione a unidade" reference={reference} size={3} data={units} description="nome" />
            <Input label="Estado" name="idEstadoAtual" placeholder="Estado" reference={reference} size={3} />
          </Form.Row>
          <Button variant="primary" type="submit">Cadastrar Unidade</Button>
        </Form>
      </PageTemplate>
    </>
  )
}