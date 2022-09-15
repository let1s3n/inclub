import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Button} from 'react-bootstrap'
import placeholder from '../assets/img/placeholder.jpg'

const List = ({ search }) => {

  const [res, setRes] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [activeObject, setActiveObject] = useState(null);

  const API_KEY = process.env.REACT_APP_API_KEY || process.env.API_KEY;

  function getClass(index) {
    return index === activeObject?.id ? "active" : "inactive";
  }


  useEffect(() => {
    const fetchData = async () => {
      await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}&page=${pageNum}`).then(response => response.json())
        .then(data => {
          setRes(data.results)
        });
    }
    try {
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, [search, pageNum])

  const handleClick = e => {
    if (res) {
      e.target.name === 'next' ? setPageNum(pageNum + 1) : setPageNum(pageNum - 1);
    }
  }

  const Modal = ({ object: { original_title, original_language } }) => (
    <div style={{width:'18rem',height:'650px'}} className="active position-fixed top-50 start-50 translate-middle rounded border border-primary bg-light bg-gradient">
      <h2>{original_title}</h2>
      <span className="description">{original_language}</span>
      <button onClick={() => setShowModal(false)}>Close me</button>
    </div>
  );

  return (
    <Row className="gy-4">
      <h2>{`Page ${pageNum}`}</h2>
      {res ? res.map(item => {
        return (
          <Col key={item.id}  onClick={() => {setActiveObject(item);setShowModal(true);}}
          className={`${getClass(item.id)} col-lg-3`}>
            <Card className="position-relative rounded" style={{ backgroundColor: '#f8f8f8', width: '18rem', height: '650px' }}>

              <Card.Img className="rounded-top" style={{ height: '350px', width: '100%' }} variant="top" src={item.poster_path ? `http://image.tmdb.org/t/p/w500/${item.poster_path}` : placeholder} />

              <Card.Body style={{ padding: '10px', height: '300px' }}>
                <Card.Title style={{ height: '70px' }}>{item.original_title}</Card.Title>
                <Card.Text style={{ height: '150px' }}>
                  {item.overview ? item.overview.length < 200 ? item.overview : item.overview.substr(0, 200) + '...' : 'No description'}

                </Card.Text>
                <Button variant="primary">Ver más</Button>
              </Card.Body>
            </Card>
          </Col>)
      }) : <h1>{`No se encontraron resultados para ${search}`}</h1>}
      <Button onClick={handleClick} name="next">Next Page</Button>
      <Button onClick={handleClick} name="previous">Previous Page</Button>

      {showModal ? <Modal object={activeObject} /> : null}
    </Row>

  )
}

export default List;


