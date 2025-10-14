import React from "react";
import { Form, Row, Col } from "react-bootstrap";

function AddressForm() {
  const countries = [
    "Vietnam",
    "Japan",
    "Thailand",
    "USA",
    "France",
    "Germany",
    "Canada",
  ];

  return (
    <Form>
      <h5 className="mb-3">
        <i className="bi bi-geo-alt me-2 text-warning"></i>
        Address Information
      </h5>

      <Row className="mb-3">
        <Col md={12}>
          <Form.Group controlId="street">
            <Form.Label>Street *</Form.Label>
            <Form.Control type="text" placeholder="Enter street" isInvalid />
            <Form.Control.Feedback type="invalid">
              Street is required.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="city">
            <Form.Label>City *</Form.Label>
            <Form.Control type="text" placeholder="Enter city" />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="country">
            <Form.Label>Country *</Form.Label>
            <Form.Select defaultValue="">
              <option value="">Select Country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="zipCode">
        <Form.Label>Zip Code *</Form.Label>
        <Form.Control type="text" placeholder="Enter zip code" />
      </Form.Group>
    </Form>
  );
}

export default AddressForm;
