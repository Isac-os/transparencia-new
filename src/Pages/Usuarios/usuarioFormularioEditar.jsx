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
  const [usuario, setUsuario] = useState({});

  const { register, handleSubmit, errors } = useForm();
  const reference = { register, validator, errors };

  useEffect(() => {
    UnidadeService.getAll().then(results => {
      setUnist(results.data);
    })
  }, [props])

  useEffect(() => {
    const id = props.match.params.id;
    UsuarioService.get(id).then(results => {
      setUsuario(results.data);
    })
  }, [props])

  console.log(usuario)

  function onSubmit(data) {
    const response = UsuarioService.update(usuario.id, data)
      .then(function (response) {
        alert('usuário atualizado')
        props.history.push("/usuarios");
      })
      .catch(function (error) {
        alert('deu errado')
        console.log(error)
      });
    console.log(data)
  }

  function deletarUsuario() {
    const response = UsuarioService.delete(usuario.id)
      .then(function (response) {
        alert('usuário deletado')
        props.history.push("/usuarios");
      })
      .catch(function (error) {
        alert('deu errado')
        console.log(error)
      });
  }

  function ativarUsuario() {
    const response = UsuarioService.activeUser(usuario.id)
      .then(function (response) {
        alert('usuário ativado')
        props.history.push("/usuarios");
      })
      .catch(function (error) {
        alert('deu errado')
        console.log(error)
      });
  }

  function desligarUsuario() {
    const response = UsuarioService.disableUser(usuario.id)
      .then(function (response) {
        alert('usuário desativado')
        props.history.push("/usuarios");
      })
      .catch(function (error) {
        alert('deu errado')
        console.log(error)
      });
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
            Usuários
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Editar Usuário</Breadcrumb.Item>
        </Breadcrumb>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Row>
            <Input label="Nome do Usuário" name="nome" placeholder="Digite o nome do usuário" reference={reference} size={6} val={usuario.nome} />
          </Form.Row>
          <Form.Row>
            <Input label="CPF" name="cpf" placeholder="Digite o CPF do usuário" reference={reference} size={4} mask={"999.999.999-99"} val={usuario.cpf} />
            <Input label="E-mail" name="email" placeholder="Digite o Email do usuário" reference={reference} size={4} val={usuario.email} />
          </Form.Row>
          <Form.Row>
            <Select firstoption="Selecione a função" label="Função" name="idFuncaoAtual" placeholder="Função" data={funcao} reference={reference} size={3} description="name" val={usuario.idFuncaoAtual} />
            <Select firstoption="Selecione a tipo de usuário" label="Tipo de usuário" name="tipoUsuario" placeholder="Tipo de usuário" data={tipoUsuario} reference={reference} size={3} description="name" val={usuario.tipoUsuario} />
            <Select label="Unidade" name="idUnidadeAtual" firstoption="Selecione a unidade" reference={reference} size={3} data={units} description="nome" val={usuario.idUnidadeAtual} />
          </Form.Row>
          <Form.Row>
            <Input as="textarea" row={10} label="Curriculo" name="curriculo" placeholder="Curriculo" reference={reference} val={usuario.curriculo} />
          </Form.Row>
          <Button variant="primary" type="submit">Atualizar Usuário</Button>
          <Button className="ml-2" variant="success" onClick={() => ativarUsuario()}>Ativar Usuário</Button>
          <Button className="ml-2" variant="secondary" onClick={() => desligarUsuario()}>Desligar Usuário</Button>
          <Button className="ml-2" variant="danger" onClick={() => deletarUsuario()}>Deletar Usuário</Button>
        </Form>
      </PageTemplate>
    </>
  )
}