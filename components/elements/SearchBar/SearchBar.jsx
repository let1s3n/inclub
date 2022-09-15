import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

const SearchBar = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    handleSearch(searchText);
  }

  const handleSearchChange = e => {
    setSearchText(e.target.value);

  }
  return (
    <Form onSubmit={handleSubmit} className="mb-5">
      <Row>
        <Col sm="10">
          <Form.Control size="lg" type="text" placeholder="Ingrese nombre de película" name="searchText" value={searchText} onChange={handleSearchChange} />
        </Col>
        <Col sm="2">

          <Button variant="primary" type="submit">
            Buscar
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchBar
