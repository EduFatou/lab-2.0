import React, { useState } from 'react';
import { Card as BootstrapCard, Modal, Button } from 'react-bootstrap';
import imgCoronaZirconio from '../../../../assets/corona-zirconio.jpg';
import imgCoronaDisilicato from '../../../../assets/corona-disilicato.jpg';
import imgCoronaMetalSintetizado from '../../../../assets/corona-metal-sintetizado.jpg';
import imgEstructuraEsqueletica from '../../../../assets/estructura-esqueletica.jpg';
import imgDentaduraParcial from '../../../../assets/dentadura-parcial.jpg';
import imgDentaduraCompleta from '../../../../assets/dentadura-completa.jpg';
import imgProtesisHibrida from '../../../../assets/protesis-hibrida.jpg';
import imgAtornillado from '../../../../assets/atornillado.jpg';
import imgSobreDentadura from '../../../../assets/sobre-dentadura.jpg';
import imgFerulaDescarga from '../../../../assets/ferula-descarga.jpg';
import imgFerulaBlanqueamiento from '../../../../assets/ferula-blanqueamiento.jpg';
import imgFerulaMantenimiento from '../../../../assets/ferula-mantenimiento.jpg';

const CardList = ({ category }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setSelectedProduct(product);
    setShow(true);
  };

  const productList = [
    { product_id: 1, product_name: 'Corona de zirconio', price: 100, description: 'Descubre la resistencia del zirconio monolítico, perfecto para restauraciones impecables tanto en el sector posterior como anterior.', category: 'Fijas', url_photo: imgCoronaZirconio },
    { product_id: 2, product_name: 'Corona de disilicato', price: 100, description: 'Una prótesis que se adhiere con precisión al pilar mediante cementos dentales avanzados.', category: 'Fijas', url_photo: imgCoronaDisilicato },
    { product_id: 3, product_name: 'Corona de metal sintetizado', price: 100, description: 'La durabilidad superior de la corona de metal sintetizado, hecha de una innovadora aleación perfecta para pacientes alérgicos al cobalto.', category: 'Fijas', url_photo: imgCoronaMetalSintetizado },
    { product_id: 4, product_name: 'Estructura esquelética', price: 100, description: 'Resistencia y ligereza en la estructura esquelética de cromo cobalto, combinada con un montaje en resina de alta calidad.', category: 'Removibles', url_photo: imgEstructuraEsqueletica },
    { product_id: 5, product_name: 'Dentadura parcial', price: 100, description: 'Las dentaduras parciales mucosoportadas están diseñadas para reemplazar con naturalidad parte de los dientes.', category: 'Removibles', url_photo: imgDentaduraParcial },
    { product_id: 6, product_name: 'Dentadura completa', price: 100, description: 'dentadura completa hecha de acrílico rígido, reemplazando la totalidad de tus dientes con comodidad.', category: 'Removibles', url_photo: imgDentaduraCompleta },
    { product_id: 7, product_name: 'Prótesis Híbrida', price: 100, description: 'Estabilidad y funcionalidad en las prótesis híbridas sobre implantes, fusionando lo mejor de ambos mundos.', category: 'Implantes', url_photo: imgProtesisHibrida },
    { product_id: 8, product_name: 'Atornillado', price: 100, description: 'Las prótesis atornilladas, sustituyen la raíz que falta, se fijan con precisión al pilar mediante una rosca o tornillo, asegurando un ajuste perfecto.', category: 'Implantes', url_photo: imgAtornillado },
    { product_id: 9, product_name: 'Sobre Dentadura', price: 100, description: 'La Sobre Dentadura, una solución mixta que cubre los implantes dentales osteo-integrados con una base de resina.', category: 'Implantes', url_photo: imgSobreDentadura },
    { product_id: 10, product_name: 'Férula de descarga', price: 100, description: 'Protege tus dientes y alivia la tensión muscular con nuestras férulas de descarga, diseñadas para evitar desgastes y promover la relajación mandibular.', category: 'Férulas', url_photo: imgFerulaDescarga },
    { product_id: 11, product_name: 'Férula de blanqueamiento', price: 100, description: 'Logra una sonrisa brillante con nuestras férulas de blanqueamiento, adaptadas a las necesidades mandibulares y maxilares de cada paciente.', category: 'Férulas', url_photo: imgFerulaBlanqueamiento },
    { product_id: 12, product_name: 'Férula de mantenimiento', price: 100, description: 'Mantén tu sonrisa perfecta con nuestras férulas de mantenimiento, diseñadas para prolongar los resultados de tus tratamientos dentales.', category: 'Férulas', url_photo: imgFerulaMantenimiento },
  ];

  const filteredProducts = productList.filter(product => product.category === category);

  return (
    <section className='card-list'>
      {filteredProducts.map(product => (
        <BootstrapCard key={product.product_id} className="mb-4 shadow" onClick={() => handleShow(product)}>
          <BootstrapCard.Img variant="top" src={product.url_photo} />
          <BootstrapCard.Body>
            <BootstrapCard.Title>{product.product_name}</BootstrapCard.Title>
            <BootstrapCard.Text>{product.description}</BootstrapCard.Text>
            <BootstrapCard.Text>Precio: {product.price}</BootstrapCard.Text>
          </BootstrapCard.Body>
        </BootstrapCard>
      ))}

      {selectedProduct && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.product_name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedProduct.url_photo} alt={selectedProduct.product_name} style={{ width: '100%' }} />
            <p>{selectedProduct.description}</p>
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