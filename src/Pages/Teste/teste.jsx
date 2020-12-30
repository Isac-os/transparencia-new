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



export default function Teste(props) {
  const [unitValue, setUnitValue] = useState({});

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

  function onSubmit(data) {
    

  }


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
         
          <Button variant="primary" type="submit">Cadastrar Unidade</Button>       </Form>
      </PageTemplate>
    </>
  )
}