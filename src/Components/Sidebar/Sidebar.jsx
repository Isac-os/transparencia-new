import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaBell, FaClinicMedical, FaUserAlt } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';

import './sidebar.css'
export default function Sidebar() {
  return (
    <>
      <Nav className="flex-column d-md-block pt-3">
        <LinkContainer to="/unidades">
          <Nav.Item className="nav-link">
            <FaClinicMedical className="mr-1" />
            Unidades
          </Nav.Item>
        </LinkContainer>
        <LinkContainer to="/usuarios">
          <Nav.Item className="nav-link">
            <FaUserAlt className="mr-1" />
            Usuários
          </Nav.Item>
        </LinkContainer>

        <LinkContainer to="/mensagens">
          <Nav.Item className="nav-link">
            <FaBell className="mr-1" />
            Solicitações
          </Nav.Item>
        </LinkContainer>
      </Nav>
    </>
  )
}