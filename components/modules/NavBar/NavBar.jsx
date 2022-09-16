import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { AiOutlineHome } from "react-icons/ai";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/"><AiOutlineHome /></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/registro">Registro</Nav.Link>
          <Nav.Link href="/acerca">Acerca</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar