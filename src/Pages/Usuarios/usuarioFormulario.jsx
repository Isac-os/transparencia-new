import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { Breadcrumb, Button, Col, Form, Image } from 'react-bootstrap';


import Input from '../../Components/Forms/Input';
import Select from '../../Components/Forms/Select';
import Textarea from '../../Components/Forms/Textarea';
import PageTemplate from '../../Components/Dashboard/PageTemplate';
import UsuarioService from '../../Services/UsuarioService';
import validator from "../../validators/unidadeFormValidator";
import S3Client from '../../Services/S3Client';

import api from '../../Services/api';



export default function UsuarioFormulario(props) {

  const { register, handleSubmit, errors } = useForm();
  const reference = { register, validator, errors };


  function onSubmit(data) {
    const response =  UsuarioService.create(data)
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
            <Input label="Nome da Unidade" name="nome" placeholder="Nome público da unidade" reference={reference} size={12}  />
          </Form.Row>
          <Form.Row>
            <Input label="CPF" name="cpf" placeholder="Digite o CPF do usuário" reference={reference} size={4}  />
            <Input label="E-mail" name="email" placeholder="Digite o CPF do usuário" reference={reference} size={4}  />
          </Form.Row>
          <Form.Row>
            <Input label="Senha" name="senha" placeholder="Senha" reference={reference} size={3} />
            <Input label="Tipo de usuário" name="tipoUsuario" placeholder="Tipo de usuário" reference={reference} size={3} />
          </Form.Row>
          <Form.Row>
          <Input label="Curriculo" name="curriculo" placeholder="Curriculo" reference={reference} size={3} />
          <Input label="Função" name="idFuncaoAtual" placeholder="Função" reference={reference} size={3} />
          <Input label="Unidade" name="idUnidadeAtual" placeholder="Unidade" reference={reference} size={3} />
          <Input label="Estado" name="idEstadoAtual" placeholder="Estado" reference={reference} size={3} />
          </Form.Row>
          <Button variant="primary" type="submit">Cadastrar Unidade</Button>
     </Form>
      </PageTemplate>
    </>
  )
}