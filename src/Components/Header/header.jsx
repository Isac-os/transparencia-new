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
          <Image src="/logo-horizontal-white.svg" fluid
            width="170px"
            className="d-inline-block align-top logo-isac"
            alt="isac-logo"
          />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav>
                <Nav.Link>
                  <Link to="#unidade-matriz" className="link">
                    <h6>Unidade Matriz</h6>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/unidades" className="link">
                    <h6>Unidades Geridas</h6>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/covid" className="link">
                    <h6>Site do ISAC</h6>
                  </Link>
                </Nav.Link>
              </Nav>
              <Form className="ml-4" inline>
                <FormControl type="text" placeholder="O que você procura?" className="mr-sm-2" />
                <Button className='color-button ml-2'><span className="mr-2"><FaLock /></span>Área Restrita</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}