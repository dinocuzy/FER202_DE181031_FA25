import React from "react";
import { Form, InputGroup } from "react-bootstrap";

function AccountForm() {
    const secretQuestions = [
        "What is your mother's maiden name?",
        "What was the name of your first pet?",
        "What city were you born in?",
        "What is your favorite color?",
    ];

    return (
        <Form>
            <h5 className="mb-3">
                <i className="bi bi-lock me-2 text-warning"></i>
                Account Setup
            </h5>

            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username *</Form.Label>
                <InputGroup>
                    <InputGroup.Text>
                        <i className="bi bi-person"></i>
                    </InputGroup.Text>
                    <Form.Control type="text" placeholder="Enter username" isInvalid />
                    <Form.Control.Feedback type="invalid">
                        Username is required.
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password *</Form.Label>
                <InputGroup>
                    <InputGroup.Text>
                        <i className="bi bi-key"></i>
                    </InputGroup.Text>
                    <Form.Control type="password" placeholder="Enter password" />
                </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label>Confirm Password *</Form.Label>
                <InputGroup>
                    <InputGroup.Text>
                        <i className="bi bi-shield-lock"></i>
                    </InputGroup.Text>
                    <Form.Control type="password" placeholder="Confirm password" />
                </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="secretQuestion">
                <Form.Label>Secret Question *</Form.Label>
                <Form.Select defaultValue="">
                    <option value="">Select a question</option>
                    {secretQuestions.map((q, index) => (
                        <option key={index} value={q}>
                            {q}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="answer">
                <Form.Label>Answer *</Form.Label>
                <Form.Control type="text" placeholder="Enter answer" />
            </Form.Group>
        </Form>
    );
}

export default AccountForm;
