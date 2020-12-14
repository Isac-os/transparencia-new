import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaBell, FaClinicMedical, FaUserAlt } from 'react-icons/fa';

import './sidebar.css'
export default function Sidebar() {
  return (
    <>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home"><FaClinicMedical /> Unidades</Nav.Link>
        <Nav.Link eventKey="link-1"><FaUserAlt /> Usuários</Nav.Link>
        <Nav.Link eventKey="link-2"><FaBell />Solicitações</Nav.Link>
      </Nav>
    </>
  )
}