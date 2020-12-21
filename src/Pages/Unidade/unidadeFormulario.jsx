import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { Breadcrumb, Button, Form } from 'react-bootstrap';

import validator from "../../validators/unidadeFormValidator";

import Input from '../../Components/Forms/Input';
/* import Select from '../../Components/Forms/Select'; */
/* import Textarea from '../../Components/Forms/Textarea';*/
import PageTemplate from '../../Components/Dashboard/PageTemplate';
import UnidadeService from '../../Services/UnidadeService';

import './unidade.css';

export default function UnidadeFormulario(props) {
  const [unitValue, setUnitValue] = React.useState({});

  const { register, handleSubmit, errors } = useForm();
  const reference = { register, validator, errors };

  React.useEffect(() => {
    const id = props.match.params.id;

    if (id) {
      UnidadeService.get(id).then((results) => {
        setUnitValue(results.data);
      });
    }
  }, [props])

  function onSubmit(data) {
    const res = unitValue.id
      ? UnidadeService.update(unitValue.id, data)
      : UnidadeService.create(data)

    res.then(results => {
      alert('Operação realizada com sucesso.')
    }).catch(error => {
      console.log(error);
    })
  }
  return (
    <>
      <PageTemplate>
        <Breadcrumb>
          <Breadcrumb.Item href="/unidade">
            Unidades
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Cadastrar Unidades </Breadcrumb.Item>
        </Breadcrumb>

        <Form onSubmit={handleSubmit(onSubmit)}>

          <Form.Row>
            <Input label="Nome da Unidade" name="nome" placeholder="Nome público da unidade" reference={reference} size={4} val={unitValue.nome} />
          </Form.Row>
          <Form.Row>
            <Input label="E-mail" name="email" placeholder="E-mail da unidade" reference={reference} size={2} val={unitValue.email} />
            <Input label="Telefone" name="telefone" placeholder="Telefone da unidade" reference={reference} size={2} val={unitValue.telefone} />
          </Form.Row>
          <Form.Row>
            <Input label="Trata COVID" name="trataCovid" placeholder="Trata COVID" reference={reference} size={2} val={unitValue.trataCovid} />
            <Input label="Tipo de Unidade" name="tipoUnidade" placeholder="Tipo de Unidade" reference={reference} size={2} val={unitValue.tipoUnidade} />
          </Form.Row>
          <Form.Row>
            <Input label="TS Registro" name="tsRegistro" placeholder="TS Registro" reference={reference} size={2} val={unitValue.tsRegistro} />
            <Input label="CNES" name="codigoCnes" placeholder="CNES da unidade" reference={reference} size={2} val={unitValue.codigoCnes} />
          </Form.Row>
          <Form.Row>
            <Input label="UF" name="uf" placeholder="UF da unidade" reference={reference} size={1} val={unitValue.uf} />
            <Input label="Estado atual" name="idEstadoAtual" placeholder="Estado atual" reference={reference} size={1} val={unitValue.idEstadoAtual} />
            <Input label="CEP" name="cep" placeholder="CEP da unidade" reference={reference} size={2} mask={"99.999-999"} val={unitValue.cep} />
          </Form.Row>
          <Form.Row>
            <Input label="Endereço" name="endereco" placeholder="Digite o endereço" reference={reference} size={4} val={unitValue.endereco} />
          </Form.Row>

          {/* <Input label="Fazer upload" type="file" name="logo" placeholder="Logo" legend="*Formato PNG, tamanho 1080x1080" reference={reference} size={12} />*/}
          {/* <Input label="CNPJ" name="cnpj" placeholder="Digite o CNPJ da unidade" reference={reference} size={3} mask={"99.999.999/9999-99"} val={unitValue.cnpj}/>*/}
          {/*  <Select label="Tipo de Unidade" name="unit_type_id" reference={reference} data={[]} size={2} val={unitValue.unit_type_id} firstoption="Selecione a unidade" /> */}
          {/*<Input label="Cidade" name="city" placeholder="Selecione a cidade" reference={reference} size={3} val={unitValue.city} />*/}
          {/*<Textarea label="Descrição da unidade" name="summary" placeholder="Escreva um breve resumo sobre a unidade" reference={reference} size={12} rows={6} />*/}



          <Button variant="primary" type="submit">Cadastrar ou atualizar</Button>
        </Form>
      </PageTemplate>
    </>
  )
}