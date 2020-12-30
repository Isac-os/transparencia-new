import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form'

import validator from '../../validators/loginFormValidator';
import LoginService from '../../Services/LoginService';

//import useLogin from '../../Hooks/useLogin';

import './login.css';
import { Link } from 'react-router-dom';

import Input from '../../Components/Forms/Input';

export default function Login(props) {
  const { register, handleSubmit, errors } = useForm();
  const reference = { register, validator, errors };
  function onSubmit(data) {
    LoginService.login(data).then(results => {
      console.log(results);
    }).catch((error) => {
      console.log(error.response.data.message);
    });

  }
  /*   const { register, errors } = useForm();
    const reference = { register, validator, errors };
  
    const [{ values }, handleChange, handleSubmit] = useLogin(); */

  // function onSubmit(data) {
  //   const res = LoginService.create(data)
  //     .then(function (res) {
  //       alert('Funcionou')
  //     })
  //     .catch(function (error) {
  //       alert('não funcionou')
  //     })
  //     console.log(data)
  // }

  /*  const sendLogin = async () => {
 
     const response = await api.post('/login', values)
       .then(function (response) {
         alert('deu certo')
         localStorage.setItem('token', JSON.stringify(response.data));
         // handleLogin();
       })
       .catch(function (error) {
         alert('usuário errado')
       });
 
   }; */

  return (
    <>
      <div className="body">
        <div className="login">
          <div className="login-box">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <h2>Login</h2>
              <Form.Row>
                <Input
                  label="CPF" name="cpf" placeholder="Digite o seu CPF" reference={reference} size={12} mask={"999.999.999-99"} />
              </Form.Row>
              <Form.Row>
                <Input
                  label="Senha" name="senha"
                  type="password"
                  placeholder="Digite a sua senha"
                  reference={reference} size={12} />
              </Form.Row>
              <Button variant="primary" type="submit" size="block">Entrar</Button>
              <Link to="/" className="mt-4">
                <h6>Esqueci a minha senha</h6>
              </Link>
            </Form>

            {/* <form >
              <div className="title-login">
                <h2>Login</h2>
              </div>
              <label className="title-login mt-2">
                <h5>Login</h5>
              </label><br></br>
              <input
                type="text"
                name="email"
                placeholder="Login"
              />
              <label className="title-login mt-2">
                <h5>Senha</h5>
              </label><br></br>
              <input
                type="password"
                name="password"
                placeholder="Senha"
              />
              <Button className="mt-4 mb-4" size="block" type="submit">Entrar</Button>
              <Link>
                <h6>Esqueci a minha senha</h6>
              </Link>
            </form> */}
          </div>
        </div>
      </div>
    </>

  )
}