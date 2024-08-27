import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import videoCabecera from '../../../assets/implantes.mp4';
import { equipoData } from '../../../constants';

const Equipo = () => {
  return (
    <Container fluid className="p-0">
      <div className="video-container mb-4">
        <video
          src={videoCabecera}
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="overlay"></div>
        <h2 className="video-title">Equipo</h2>
      </div>
      <Container>
        <Row>
          {equipoData.map((member, index) => (
            <Col md={12} key={member.id} className="mb-4">
              <Card className={`shadow ${index % 2 === 0 ? 'left' : 'right'}`}>
                <Row nogutters="true" className={`align-items-center ${index % 2 === 0 ? 'flex-md-row' : 'flex-md-row-reverse'}`}>
                  <Col md={4} className={`text-center`}>
                    <img src={member.imgUrl} alt={member.name} className="rounded-circle shadow mb-3 equipo-img" />
                  </Col>
                  <Col md={8} className={`text-center`}>
                    <Card.Body>
                      <Card.Title>{member.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                      <Card.Text>{member.description}</Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Equipo;