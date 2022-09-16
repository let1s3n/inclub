import React, { useState, useEffect } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import axios from 'axios'
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const Registro = () => {
  const [id, setID] = useState('');
  const [imagen, setImagen] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [register, setRegister] = useState({});


  const onChangeID = (e) => {
    setID(e.target.value);
  }

  const onChangeImagen = (e) => {
    setImagen(e.target.value);
  }

  const onChangeNombre = (e) => {
    setNombre(e.target.value);
  }

  const onChangeDescripcion = (e) => {
    setDescripcion(e.target.value);
  }


  const onSubmit = async e => {
    e.preventDefault();
    setRegister(await axios.post('api/registro', {
      id,
      imagen,
      nombre,
      descripcion
    }))
  }

  useEffect(() => {
    if (Object.keys(register).length > 0) {
      console.log(register);
      sessionStorage.setItem("nombre", register.data.payload.nombre)
      window.location.href = '/';
    }
  }, [register])

  const createPDF = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf"));
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("example.pdf");
  }

  return (
    <Container className="mt-3">
      <Form id="pdf" onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="imagenID">
          <Form.Label>
            ID
          </Form.Label>
          <Form.Control type="text" placeholder="Ingresa ID" onChange={onChangeID} value={id} />

        </Form.Group>

        <Form.Group className="mb-3" controlId="imagenRuta">
          <Form.Label>
            Imagen
          </Form.Label>
          <Form.Control type="text" placeholder="Ingresa ruta de imagen" onChange={onChangeImagen} value={imagen} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="imagenNombre">
          <Form.Label>
            Nombre
          </Form.Label>
          <Form.Control type="text" placeholder="Ingresa nombre de imagen" onChange={onChangeNombre} value={nombre} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="imagenDescripcion">
          <Form.Label>
            Descripción
          </Form.Label>
          <Form.Control type="text" placeholder="Ingresa descripción de imagen" onChange={onChangeDescripcion} value={descripcion} />
        </Form.Group>
        <div className="d-flex" style={{ columnGap: 1 + 'rem' }}>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
          <Button variant="success" onClick={createPDF} >PDF</Button>

        </div>
      </Form>

    </Container >
  )
}

export default Registro