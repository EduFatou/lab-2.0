import React, { useState } from 'react';
import { Card as BootstrapCard, Modal, Button, Carousel } from 'react-bootstrap';
import { productList } from '../../../../../../constants';


const CardList = ({ category }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setSelectedProduct(product);
    setShow(true);
  };

  const filteredProducts = productList.filter(product => product.category === category);

  return (
    <section className='card-list'>
      {filteredProducts.map(product => (
        <BootstrapCard key={product.product_id} className="mb-4 shadow" onClick={() => handleShow(product)}>
          <BootstrapCard.Img variant="top" src={product.images[0]} className="card-img" />
          <BootstrapCard.Body>
            <BootstrapCard.Title>{product.product_name}</BootstrapCard.Title>
            <BootstrapCard.Text>{product.description}</BootstrapCard.Text>
            {/* <BootstrapCard.Text>Precio: {product.price}</BootstrapCard.Text> */}
          </BootstrapCard.Body>
        </BootstrapCard>
      ))}

      {selectedProduct && (
        <Modal show={show} onHide={handleClose} className='modal'>
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
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </section>
  );
};

export default CardList;
