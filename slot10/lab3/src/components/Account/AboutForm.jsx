import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

function AboutForm() {
    return (
        <Form>
            <h5 className="mb-3">
                <i className="bi bi-person-circle me-2 text-warning"></i>
                About Information
            </h5>

            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group controlId="firstName">
                        <Form.Label>First Name *</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" isInvalid />
                        <Form.Control.Feedback type="invalid">
                            First name is required.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="lastName">
                        <Form.Label>Last Name *</Form.Label>
                        <Form.Control type="text" placeholder="Enter last name" />
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group controlId="email">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" isInvalid />
                        <Form.Control.Feedback type="invalid">
                            Valid email is required.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="phone">
                        <Form.Label>Phone *</Form.Label>
                        <Form.Control type="text" placeholder="Enter phone number" />
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group controlId="age">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="Enter age" />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="avatar">
                        <Form.Label>Avatar</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    );
}

export default AboutForm;
