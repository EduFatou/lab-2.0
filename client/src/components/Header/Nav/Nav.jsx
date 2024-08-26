import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, Offcanvas, ListGroup } from 'react-bootstrap';
import logo from '../../../../public/diente.png';

const data = [
  { id: 1, name: "Producto 1", category: "Categoria 1", keywords: ["dental", "limpieza"] },
  { id: 2, name: "Producto 2", category: "Categoria 2", keywords: ["ortodoncia", "brackets"] },
];

const Navigation = () => {
  const [show, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleSearch = () => setShowSearch(!showSearch);

  useEffect(() => {
    if (searchTerm) {
      const results = data.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
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
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
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
        <ListGroup className="position-absolute w-100 mt-1">
          {searchResults.map(result => (
            <ListGroup.Item key={result.id} action onClick={() => {
              navigate(`/product/${result.id}`);
              setSearchTerm("");
              setSearchResults([]);
            }}>
              {result.name} - {result.category}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </>
  );
};

export default Navigation;