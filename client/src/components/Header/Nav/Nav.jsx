import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, Offcanvas, ListGroup, Modal, Carousel } from 'react-bootstrap';
import logo from '../../../../public/diente.png';
import { productList } from "../../../constants";

const Navigation = () => {
  const [show, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleSearch = () => setShowSearch(!showSearch);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
    setSearchResults([]);
  };

  useEffect(() => {
    if (searchTerm) {
      const results = productList.filter(item => 
        item.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchTerm}`);
    setSearchTerm("");
    setSearchResults([]);
  };

  return (
    <>
      <Navbar className="navbar custom-navbar" expand={false}>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top d-md-none"
            alt="Logo"
          />
          <span className="d-none d-md-inline">Laboratorio Dental Monzón</span>
        </Navbar.Brand>
        <div className="d-flex ms-auto me-2 align-items-center">
          <Form className="d-none d-md-flex align-items-center" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Buscar"
              className="me-2"
              size="sm"
              aria-label="Search"
              style={{height: '38px'}}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outline-light" type="submit">Buscar</Button>
          </Form>
          <Button
            variant="outline-light"
            className="d-md-none me-2"
            onClick={toggleSearch}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </Button>
        </div>
        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} className="custom-toggler" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={show}
          onHide={handleClose}
          className="custom-offcanvas"
        >
          <Offcanvas.Header closeButton className="custom-offcanvas-header">
            <Offcanvas.Title id="offcanvasNavbarLabel" className="w-100 text-center">
              Menú
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="d-flex flex-column justify-content-center">
            <Nav className="text-center flex-grow-1">
              <Nav.Link as={Link} to="/" onClick={handleClose}>Home</Nav.Link>
              <Nav.Link as={Link} to="/categorias" onClick={handleClose}>Categorías</Nav.Link>
              <Nav.Link as={Link} to="/equipo" onClick={handleClose}>Equipo</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
      
      {showSearch && (
        <Form className="d-md-none p-2 form" onSubmit={handleSearch}>
          <FormControl
            type="search"
            placeholder="Buscar"
            className="me-2 mb-2"
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="outline-primary" type="submit">Buscar</Button>
        </Form>
      )}
      
      {searchResults.length > 0 && (
        <ListGroup 
          className="position-absolute w-100 mt-1 search-results-list" 
          style={{ zIndex: 1050 }}
        >
          {searchResults.map(result => (
            <ListGroup.Item 
              key={result.product_id} 
              action 
              onClick={() => handleShowModal(result)}
            >
              {result.product_name} - {result.category}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      
      {selectedProduct && (
        <Modal show={showModal} onHide={handleCloseModal} className='modal'>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.product_name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Carousel>
              {selectedProduct.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100 fixed-size-img"
                    src={image}
                    alt={`${selectedProduct.product_name} - imagen ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            <p className="mt-3">{selectedProduct.description}</p>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default Navigation;
