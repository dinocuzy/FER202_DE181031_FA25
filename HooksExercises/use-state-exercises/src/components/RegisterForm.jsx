import { Form, Button, Row, Col, Card, Container, Modal, Toast } from 'react-bootstrap';
import { useState } from 'react';
const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [toast, setToast] = useState(false);
    const [error, setError] = useState({});
    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    const isUsernameValid = (username) => {
        return username.trim() !== '' && username.length >= 3;
    }
    const isPasswordValid = (password) => {
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
        const upperCaseRegex = /[A-Z]/;
        const lowerCaseRegex = /[a-z]/;
        const numberRegex = /[0-9]/;
        return password.length >= 8 && specialCharRegex.test(password) &&
            upperCaseRegex.test(password) && lowerCaseRegex.test(password) &&
            numberRegex.test(password);
    }
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        if (!isUsernameValid(e.target.value)) {
            setError((prev) => ({ ...prev, username: 'Username must be at least 3 characters long' }));
        } else {
            setError((prev) => {
                const { username, ...rest } = prev;
                return rest;
            });
        }
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!isEmailValid(e.target.value)) {
            setError((prev) => ({ ...prev, email: 'Invalid email format' }));
        } else {
            setError((prev) => {
                const { email, ...rest } = prev;
                return rest;
            });
        }
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (!isPasswordValid(e.target.value)) {
            setError((prev) => ({
                ...prev,
                password: 'Password must be at least 8 characters long and contain at least one special character, one uppercase letter, one lowercase letter, and one number'
            }));
        } else {
            setError((prev) => {
                const { password, ...rest } = prev;
                return rest;
            });
        }
        if (confirmPassword && e.target.value !== confirmPassword) {
            setError((prev) => ({ ...prev, confirmPassword: 'Passwords do not match' }));
        }
        else {
            setError((prev) => {
                const { confirmPassword, ...rest } = prev;
                return rest;
            });
        }
    }
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        if (password !== e.target.value) {
            setError((prev) => ({ ...prev, confirmPassword: 'Passwords do not match' }));
        }
        else {
            setError((prev) => {
                const { confirmPassword, ...rest } = prev;
                return rest;
            });
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!isUsernameValid(username)) {
            newErrors.username = 'Username must be at least 3 characters long';
        }
        if (!isEmailValid(email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!isPasswordValid(password)) {
            newErrors.password = 'Password must be at least 8 characters long and contain at least one special character, one uppercase letter, one lowercase letter, and one number';
        }
        if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        setError(newErrors);
        if (Object.keys(newErrors).length === 0) {
            setToast(true);
            setTimeout(() => {
                setToast(false);
            }, 3000);
            setShowModal(true);
        }
    };
    const handleCloseModal = () => {
        setShowModal(false);
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setError({});
    }
    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={6} >
                    <Card className="p-4">
                        <Card.Header>
                            <h2 className="text-center">Register Form</h2>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={username}
                                        onChange={handleUsernameChange}
                                        isInvalid={!!error.username}
                                        placeholder="Enter username"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {error.username}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        isInvalid={!!error.email}
                                        placeholder="Enter email"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {error.email}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        isInvalid={!!error.password}
                                        placeholder="Enter password"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {error.password}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formConfirmPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={confirmPassword}
                                        onChange={handleConfirmPasswordChange}
                                        isInvalid={!!error.confirmPassword}
                                        placeholder="Confirm password"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {error.confirmPassword}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <div className="d-flex justify-content-center gap-2 mt-3">
                                    <Button variant="outline-success" type="submit" >
                                        Register
                                    </Button>
                                    <Button variant="outline-secondary" type="reset" onClick={() => {
                                        setUsername("");
                                        setEmail("");
                                        setPassword("");
                                        setConfirmPassword("");
                                        setError({});
                                    }}>
                                        Reset
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Registration Successful</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>!Username: {username}</p>
                    <p>!Email: {email}</p>
                    <p>!Password: {password}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Toast onClose={() => setToast(false)} show={toast} delay={3000} autohide
                style={{ position: 'fixed', top: 20, right: 20, minWidth: '200px', color: '#155724', backgroundColor: '#d4edda', borderColor: '#c3e6cb' }}>
                <Toast.Header>
                    <strong className="me-auto">Notification</strong>
                    <small>Just now</small>
                </Toast.Header>
                <Toast.Body>Registration Successful!</Toast.Body>
            </Toast>
        </Container>
    );
};
export default RegisterForm;