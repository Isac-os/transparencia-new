import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'
import { FaLock } from "react-icons/fa";

import './header.css';

export default function Header() {
  return (
    <>
      <Navbar className="color_header" collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Link to="/">
            <Image src="/logo-horizontal-white.svg" fluid
              width="170px"
              className="d-inline-block align-top logo-isac"
              alt="isac-logo"
            />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="link" href="#unidade-matriz">
                <h6>Unidade Matriz</h6>
              </Nav.Link>
              <Nav.Link className="link" href="#unidades-geridas">
                <h6>Unidades Geridas</h6>
              </Nav.Link>
              <Nav.Link className="link" href="https://isac.org.br">
                <h6>Site ISAC</h6>
              </Nav.Link>
              <Form className="ml-4" inline>
                <FormControl type="text" placeholder="O que você procura?" className="mr-sm-2" />
                <Link to="/login">
                  <Button className='color-button ml-2'><span className="mr-2"><FaLock /></span>Área Restrita</Button>
                </Link>

              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}