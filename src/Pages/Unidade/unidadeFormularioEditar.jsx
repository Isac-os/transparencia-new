import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { Breadcrumb, Button, Col, Form, Image } from 'react-bootstrap';


import Input from '../../Components/Forms/Input';
import Select from '../../Components/Forms/Select';
import Textarea from '../../Components/Forms/Textarea';
import PageTemplate from '../../Components/Dashboard/PageTemplate';
import UnidadeService from '../../Services/UnidadeService';
import validator from "../../validators/unidadeFormValidator";
import S3Client from '../../Services/S3Client';

import './unidade.css';
import api from '../../Services/api';

export default function UnidadeFormularioEditar(props) {
  const [unitValue, setUnitValue] = useState({});
  const [file, setFile] = useState();

  const { register, handleSubmit, errors } = useForm();
  const reference = { register, validator, errors };

  useEffect(() => {
    const id = props.match.params.id;

    if (id) {
      UnidadeService.get(id).then((results) => {
        setUnitValue(results.data);
      });
    }
  }, [props])



  function publicaUnidade() {
    const res = api.put(`/unidade/alteraSituacao/${unitValue.id}/2`)
      .then(function (res) {
        alert('Operação realizada com sucesso.')
      props.history.push("/unidades");
      })
      .catch(function (error) {
        alert('deu errado')
      });
  }

  function desativaUnidade() {
    const res = api.put(`/unidade/alteraSituacao/${unitValue.id}/3`)
      .then(function (res) {
        alert('Operação realizada com sucesso.')
        props.history.push("/unidades");
      })
      .catch(function (error) {
        alert('deu errado')
      });
  }

  function onSubmit(data) {
    const imageUrl = unitValue.urlLogo;
    const res = unitValue.id
      ? UnidadeService.update(unitValue.id, { ...data, urlLogo: imageUrl }) : S3Client.uploadFile(file).then(image => {
        const newData = { ...data, urlLogo: image.location }
        UnidadeService.create(newData)
      }).catch(err => {
        console.log(err);
      });
    res.then(results => {
      alert('Operação realizada com sucesso.')
      console.log(data)
      props.history.push("/unidades");
    }).catch(error => {
      console.log(error.response.data);
    })

  }

  function handleFile(event) {
    setFile(event.target.files[0]);
  }

  const tiposUnidades = [
    { id: 1, name: "Gestora" },
    { id: 2, name: "UPA" },
    { id: 3, name: "Ambulatório" },
    { id: 4, name: "Serviço Próprio" },
    { id: 5, name: "Hospital" },
    { id: 6, name: "UTI" },
  ]

  const estados = [
    { id: "AC", name: "Acre (AC)" },
    { id: "AL", name: "Alagoas (AL)" },
    { id: "AP", name: "Amapá (AP)" },
    { id: "AM", name: "Amazonas (AM)" },
    { id: "BA", name: "Bahia (BA)" },
    { id: "CE", name: "Ceará (CE)" },
    { id: "DF", name: "Distrito Federal (DF)" },
    { id: "ES", name: "Espírito Santo (ES)" },
    { id: "GO", name: "Goiás (GO)" },
    { id: "MA", name: "Maranhão (MA)" },
    { id: "MT", name: "Mato Grosso (MT)" },
    { id: "MS", name: "Mato Grosso do Sul (MS)" },
    { id: "MG", name: "Minas Gerais (MG)" },
    { id: "PA", name: "Pará (PA)" },
    { id: "PB", name: "Paraíba (PB)" },
    { id: "PR", name: "Paraná (PR)" },
    { id: "PE", name: "Pernambuco (PE)" },
    { id: "PI", name: "Piauí (PI)" },
    { id: "RJ", name: "Rio de Janeiro (RJ)" },
    { id: "RN", name: "Rio Grande do Norte (RN)" },
    { id: "RS", name: "Rio Grande do Sul (RS)" },
    { id: "RO", name: "Rondônia (RO)" },
    { id: "RR", name: "Roraima (RR)" },
    { id: "SC", name: "Santa Catarina (SC)" },
    { id: "SP", name: "São Paulo (SP)" },
    { id: "SE", name: "Sergipe (SE)" },
    { id: "TO", name: "Tocantins (TO)" },
  ]

  return (
    <>
      <PageTemplate>
        <Breadcrumb>
          <Breadcrumb.Item href="/unidades">
            Unidades
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Cadastrar Unidades </Breadcrumb.Item>
        </Breadcrumb>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Row className="mb-4">
            {unitValue.urlLogo &&
              <Col md={2}>
                <Image src={unitValue.urlLogo} alt={unitValue.nome} fluid />
              </Col>
            }
            <Input label="Logo da unidade" type="file" name="logo" placeholder="Logo" legend="*Formato PNG, tamanho 1080x1080" reference={reference} size={10} onChange={handleFile} />
          </Form.Row>
          <Form.Row>
            <Input label="Nome da Unidade" name="nome" placeholder="Nome público da unidade" reference={reference} size={12} val={unitValue.nome} />
          </Form.Row>
          <Form.Row>
            <Input label="CNPJ" name="cnpj" placeholder="Digite o CNPJ da unidade" mask={"99.999.999/9999-99"} reference={reference} size={4} val={unitValue.cnpj} />
            <Select label="Tipo de Unidade" name="tipoUnidade" firstoption="Selecione o tipo da unidade" data={tiposUnidades} description="name" reference={reference} size={4} val={unitValue.tipoUnidade} />
          </Form.Row>
          <Form.Row>
            <Input label="CEP" name="cep" placeholder="CEP da unidade" reference={reference} size={3} mask={"99.999-999"} val={unitValue.cep} />
            <Select label="UF" name="uf" placeholder="UF da unidade" firstoption="Selecione a UF" reference={reference} size={2} val={unitValue.uf} data={estados} description="name" />
          </Form.Row>
          <Form.Row>
            <Input label="Endereço" name="endereco" placeholder="Digite o endereço" reference={reference} size={12} val={unitValue.endereco} />
          </Form.Row>
          <Form.Row>
            <Select label="Trata COVID" name="trataCovid" placeholder="Trata COVID" firstoption="Selecione o uma opção" reference={reference} size={3} val={unitValue.trataCovid} data={[{ id: 1, name: 'Sim' }, { id: 2, name: 'Não' }]} description="name" />
            {/* <Select label="Estado atual" name="idEstadoAtual" placeholder="Estado atual" reference={reference} size={2} val={unitValue.idEstadoAtual} firstoption='Selecione um estado' description="name" data={[{ id: 1, name: "Publicada" }, { id: 2, name: "Em edição" }, { id: 3, name: "Desativada" }]} /> */}
            <Input label="Código CNES" name="codigoCnes" placeholder="Digite o código CNES" reference={reference} size={2} val={unitValue.codigoCnes} />
          </Form.Row>
          <Form.Row>
            <Input label="E-mail" name="email" placeholder="E-mail da unidade" reference={reference} size={4} val={unitValue.email} />
            <Input label="Telefone" name="telefone" placeholder="Telefone da unidade" mask={["(99) 9999-9999", "(99) 99999-9999"]} reference={reference} size={2} val={unitValue.telefone} />
          </Form.Row>
          <Form.Row>
            <Textarea label="Descrição da unidade" name="resumo" placeholder="Escreva um breve resumo sobre a unidade" reference={reference} size={12} rows={6} val={unitValue.resumo} />
          </Form.Row>
          <Button variant="primary" type="submit">Atualizar Informações</Button>
          <Button className="ml-4" onClick={() => publicaUnidade()} variant="success">Publicar Unidade</Button>
          <Button className="ml-4" onClick={() => desativaUnidade()} variant="secondary" >Desativar Unidade</Button>
          {/*           <Input name="tsRegistro" reference={reference} size={2} val={unitValue.tsRegistro} hidden />
 */}        </Form>
      </PageTemplate>
    </>
  )
}