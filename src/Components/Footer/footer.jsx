import React from 'react';

import './footer.css';
import { Row, Col, Image, Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Row>
          <Container>
            <Col md={4} className="d-flex align-items-center">
              <Image src="/logo-horizontal-white.svg" fluid
                width="170px"
                className="d-inline-block align-top logo-isac"
                alt="isac-logo"
              />
            </Col>
          </Container>
        </Row>
      </div>
    </>
  );
}

export default Footer;