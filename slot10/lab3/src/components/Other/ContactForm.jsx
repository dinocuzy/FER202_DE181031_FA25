import React from "react";
import { Form, Button } from "react-bootstrap";

const ContactForm = () => {
    return (
        <Form className="p-3 bg-light rounded shadow-sm">
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Write your message..."
                />
            </Form.Group>

            <div className="text-center">
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </div>
        </Form>
    );
};

export default ContactForm;
