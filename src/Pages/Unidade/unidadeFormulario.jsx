import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { Breadcrumb, Button, Form } from 'react-bootstrap';

import validator from "../../validators/unidadeFormValidator";

import Input from '../../Components/Forms/Input';
import Select from '../../Components/Forms/Select';
import PageTemplate from '../../Components/Dashboard/PageTemplate';

import UnidadeService from '../../Services/UnidadeService';


import './unidade.css';
import Textarea from '../../Components/Forms/Textarea';

export default function UnidadeFormulario() {
  const { register, handleSubmit, errors } = useForm();
  const reference = { register, validator, errors };

  React.useEffect(() => {
    UnidadeService.get().then(results => {
      console.log(results);
    })
  }, [])

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <>
      <PageTemplate>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/unidade">Unidades</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Cadastrar Unidades </Breadcrumb.Item>
        </Breadcrumb>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Row>
            <Input label="Fazer upload" type="file" name="logo" placeholder="Logo" legend="*Formato PNG, tamanho 1080x1080" reference={reference} size={12} />
            <Input label="Nome da Unidade" name="name" placeholder="Nome público da unidade" reference={reference} size={12} />
            <Input label="CNPJ" name="cnpj" placeholder="Digite o CNPJ da unidade" reference={reference} size={3} mask={"99.999.999/9999-99"} />
            <Select label="Tipo de Unidade" name="unit_type_id" reference={reference} data={[]} size={3} />
            <Input label="CNES" name="cnes" placeholder="Informe o CNES da unidade" reference={reference} size={3} />
            <Input label="CEP" name="cep" placeholder="Informe o CEP da unidade" reference={reference} size={3} mask={"99.999-999"} />
            <Input label="Cidade" name="city" placeholder="Selecione a cidade" reference={reference} size={3} />
            <Input label="Endereço" name="address" placeholder="Digite o endereço conforme o CNPJ" reference={reference} size={8} />
            <Select label="UF" name="uf" reference={reference} data={[]} size={3} />
            <Input label="Telefone" name="phone" placeholder="Informe o telefone da unidade" reference={reference} size={3} />
            <Textarea label="Descrição da unidade" name="summary" placeholder="Escreva um breve resumo sobre a unidade" reference={reference} size={12} rows={6} />
            <Button variant="primary" type="submit">Solicitar cadastro</Button>
          </Form.Row>
        </Form>
      </PageTemplate>
    </>
  )
}