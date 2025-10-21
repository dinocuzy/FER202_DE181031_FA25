import React, { useReducer } from "react";
import { Form, Button, Row, Col, Card, Container, Modal, Toast } from "react-bootstrap";
const initialState = { username: "", password: "", showModal: false, error: {}, showToast: false };
function reducer(state, action) {
    switch (action.type) {
        case 'changeUsername':
            return { ...state, username: action.payload };
        case 'changePassword':
            return { ...state, password: action.payload };
        case 'setError':
            return { ...state, error: action.payload };
        case 'showModal':
            return { ...state, showModal: true };
        case 'hideModal':
            return { ...state, showModal: false, username: "", password: "", error: {} };
        case 'showToast':
            return { ...state, showToast: true };
        case 'hideToast':
            return { ...state, showToast: false };
        default:
            return initialState;
    }
}
const LoginForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleUsernameChange = (e) => {
        dispatch({ type: 'changeUsername', payload: e.target.value });
        if (e.target.value.trim() === '') {
            dispatch({ type: 'setError', payload: { ...state.error, username: 'Username is required' } });
        } else {
            const { username, ...rest } = state.error;
            dispatch({ type: 'setError', payload: rest });
        }
    };

    const handlePasswordChange = (e) => {
        dispatch({ type: 'changePassword', payload: e.target.value });
        if (e.target.value.trim() === '') {
            dispatch({ type: 'setError', payload: { ...state.error, password: 'Password is required' } });
        } else {
            const { password, ...rest } = state.error;
            dispatch({ type: 'setError', payload: rest });
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (state.username.trim() === '') {
            newErrors.username = 'Username is required';
        }
        if (state.password.trim() === '') {
            newErrors.password = 'Password is required';
        }
        dispatch({ type: 'setError', payload: newErrors });
        if (Object.keys(newErrors).length === 0) {
            dispatch({ type: 'showModal' });
            dispatch({ type: 'showToast' });
        }
    };
    const handleCloseModal = () => {
        dispatch({ type: 'hideModal' });
    };
    const handleCloseToast = () => {
        dispatch({ type: 'hideToast' });
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
                                        value={state.username}
                                        onChange={handleUsernameChange}
                                        isInvalid={!!state.error.username}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {state.error.username}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter password"
                                        value={state.password}
                                        onChange={handlePasswordChange}
                                        isInvalid={!!state.error.password}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {state.error.password}
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

            <Modal show={state.showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Login Successful</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Welcome, {state.username}!</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Toast
                onClose={handleCloseToast}
                show={state.showToast}
                delay={3000}
                autohide
                style={{ position: 'fixed', top: 20, right: 20, minWidth: '200px', color: '#155724', backgroundColor: '#d4edda', borderColor: '#c3e6cb' }}
            >
                <Toast.Header>
                    <strong className="mr-auto">Login Result </strong>
                    <small>Just now</small>
                </Toast.Header>
                <Toast.Body>
                    Login successful! Welcome, {state.username}.
                </Toast.Body>
            </Toast>
        </Container>
    );
};
export default LoginForm;



