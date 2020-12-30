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
        alert('usuário cadastrado')
        props.history.push("/usuarios");
      })
      .catch(function (error) {
        alert('deu errado')
        console.log(error)
      });
    console.log(data)
  }

  const funcao = [
    { id: "1", name: "Presidente" },
    { id: "2", name: "Diretor" },
    { id: "3", name: "Superintendente" },
    { id: "4", name: "Gerente" },
    { id: "5", name: "Coordenador" },
    { id: "6", name: "Assessor" },
    { id: "7", name: "Compliance" }
  ]

  const tipoUsuario = [
    { id: "1", name: "Administrador" },
    { id: "2", name: "Usuário Portal" },
  ]

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
            <Input label="Nome do Usuário" name="nome" placeholder="Digite o nome do usuário" reference={reference} size={6} />
          </Form.Row>
          <Form.Row>
            <Input label="CPF" name="cpf" placeholder="Digite o CPF do usuário" reference={reference} size={4} mask={"999.999.999-99"} />
            <Input label="E-mail" name="email" placeholder="Digite o Email do usuário" reference={reference} size={4} />
          </Form.Row>
          <Form.Row>
            <Select firstoption="Selecione a função" label="Função" name="idFuncaoAtual" placeholder="Função" data={funcao} reference={reference} size={3} description="name" />
            <Select firstoption="Selecione a tipo de usuário" label="Tipo de usuário" name="tipoUsuario" placeholder="Tipo de usuário" data={tipoUsuario} reference={reference} size={3} description="name" />
            <Select label="Unidade" name="idUnidadeAtual" firstoption="Selecione a unidade" reference={reference} size={3} data={units} description="nome" />
          </Form.Row>
          <Form.Row>
            <Input as="textarea" row={10} label="Curriculo" name="curriculo" placeholder="Curriculo" reference={reference} />
          </Form.Row>
          <Button variant="primary" type="submit">Cadastrar Usuário</Button>
        </Form>
      </PageTemplate>
    </>
  )
}