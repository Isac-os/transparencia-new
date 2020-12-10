import React from 'react';
import Button from 'react-bootstrap/Button';

import './login.css';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <div className="body">
        <div className="login">
          <div className="login-box">
            <form >
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
            </form>
          </div>
        </div>
      </div>
    </>

  )
}