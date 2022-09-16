import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Footer.module.scss'
const Footer = () => {
  return (
    <Container className={styles.generalFooter + ' g-0'} fluid>
      <Row className="justify-content-center align-items-center g-0">
        <Col xs="auto">
          <p> &copy; 2022</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer