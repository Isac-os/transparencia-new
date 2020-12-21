import React from 'react';

import './footer.css';
import { Row, Col, Image, Container } from 'react-bootstrap';
import logoImg from '../../assets/img/logo-horizontal-white.svg'
const Footer = () => {
  return (
    <>
      <div className="footer">
        <Row>
          <Container>
            <Image src={logoImg} fluid
              width="170px"
              className="mt-2"
              alt="isac-logo"
            />
          </Container>
        </Row>
      </div>
    </>
  );
}

export default Footer;