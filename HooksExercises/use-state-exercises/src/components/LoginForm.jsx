import { Form, Button, Container, Row, Col, Modal, Card } from "react-bootstrap";
import { useState } from "react";
const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        if (e.target.value.trim() === '') {
            setError((prev) => ({ ...prev, username: 'Username is required' }));
        } else {
            setError((prev) => {
                const { username, ...rest } = prev;
                return rest;
            });
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (e.target.value.trim() === '') {
            setError((prev) => ({ ...prev, password: 'Password is required' }));
        } else {
            setError((prev) => {
                const { password, ...rest } = prev;
                return rest;
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (username.trim() === '') {
            newErrors.username = 'Username is required';
        }
        if (password.trim() === '') {
            newErrors.password = 'Password is required';
        }
        setError(newErrors);
        if (Object.keys(newErrors).length === 0) {
            setShowModal(true);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setUsername("");
        setPassword("");
        setError({});
    };
    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={6} >
                    <Card className="p-4">
                        <Card.Header>
                        <h2 className="text-center">Login Form</h2>
                        </Card.Header>
                        <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter username"
                                    value={username}
                                    onChange={handleUsernameChange}
                                    isInvalid={!!error.username}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {error.username}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    isInvalid={!!error.password}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {error.password}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button variant="primary" type="submit" className="w-100">
                                Login
                            </Button>
                        </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Login Successful</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Welcome, {username}!</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};
export default LoginForm;
