import React, { useState, useEffect } from 'react';
import { Card as BootstrapCard, Modal, Carousel } from 'react-bootstrap';
import { Hourglass } from 'react-loader-spinner';
import { productList } from '../../../../../../constants';

const CardList = ({ category }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setSelectedProduct(product);
    setShow(true);
  };

  const filteredProducts = productList.filter(product => product.category === category);

  useEffect(() => {
    const imagePromises = filteredProducts.flatMap(product => 
      product.images.map(src => 
        new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        })
      )
    );

    Promise.all(imagePromises)
      .then(() => setLoading(false))
      .catch(error => {
        console.error('Error loading images:', error);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return (
      <div className="spinner-overlay">
        <div className="spinner-container">
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            colors={['#306cce', '#72a1ed']}
          />
        </div>
      </div>
    );
  }

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
        </Modal>
      )}
    </section>
  );
};

export default CardList;