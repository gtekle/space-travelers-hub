import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, Row, Col, Badge, Button,
} from 'react-bootstrap';

const Rocket = ({ rocket }) => {
  const {
    id, rocketName, description, rocketImage, reserved,
  } = rocket;
  const handleReserve = () => {
    if (!reserved) {
      console.log('reserved...');
    } else {
      console.log('canceled...');
    }
  };
  return (
    <Card className="d-flex border-0">
      <Row>
        <Col md={4}>
          <Card.Img
            src={rocketImage}
            alt="rocket"
            height="auto"
          />
        </Col>
        <Col>
          <Card.Body className="d-flex flex-column">
            <Card.Title>{ rocketName }</Card.Title>
            <Card.Text>
              {reserved ? <Badge bg="info" className="me-2">Reserved</Badge> : ''}
              { description }
            </Card.Text>
            <Button className="align-self-start" variant={reserved ? 'outline-secondary' : 'primary'} id={id} onClick={handleReserve}>
              {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rocketName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rocketImage: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Rocket;
