import { Form, Row, Col, Button, Card, Container, Modal, Toast } from 'react-bootstrap';
import React, { useReducer } from 'react';
const initialState = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    showModal: false,
    error: {},
    showToast: false
};
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
function reducer(state, action) {
    switch (action.type) {
        case 'changeUsername':
            return { ...state, username: action.payload };
        case 'changeEmail':
            return { ...state, email: action.payload };
        case 'changePassword':
            return { ...state, password: action.payload };
        case 'changeConfirmPassword':
            return { ...state, confirmPassword: action.payload };
        case 'setError':
            return { ...state, error: action.payload };
        case 'showModal':
            return { ...state, showModal: true };
        case 'hideModal':
            return { ...state, showModal: false, username: "", email: "", password: "", confirmPassword: "", error: {} };
        case 'showToast':
            return { ...state, showToast: true };
        case 'hideToast':
            return { ...state, showToast: false };
        default:
            return initialState;
    }
}
const SignUpForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleUsernameChange = (e) => {
        dispatch({ type: 'changeUsername', payload: e.target.value });
        if (!isUsernameValid(e.target.value)) {
            dispatch({ type: 'setError', payload: { ...state.error, username: 'Username must be at least 3 characters long' } });
        } else {
            const { username, ...rest } = state.error;
            dispatch({ type: 'setError', payload: rest });
        }
    };
    const handleEmailChange = (e) => {
        dispatch({ type: 'changeEmail', payload: e.target.value });
        if (!isEmailValid(e.target.value)) {
            dispatch({ type: 'setError', payload: { ...state.error, email: 'Invalid email format' } });
        } else {
            const { email, ...rest } = state.error;
            dispatch({ type: 'setError', payload: rest });
        }
    };
    const handlePasswordChange = (e) => {
        dispatch({ type: 'changePassword', payload: e.target.value });
        if (!isPasswordValid(e.target.value)) {
            dispatch({ type: 'setError', payload: { ...state.error, password: 'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character' } });
        } else {
            const { password, ...rest } = state.error;
            dispatch({ type: 'setError', payload: rest });
        }
    };
    const handleConfirmPasswordChange = (e) => {
        dispatch({ type: 'changeConfirmPassword', payload: e.target.value });
        if (e.target.value !== state.password) {
            dispatch({ type: 'setError', payload: { ...state.error, confirmPassword: 'Passwords do not match' } });
        } else {
            const { confirmPassword, ...rest } = state.error;
            dispatch({ type: 'setError', payload: rest });
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!isUsernameValid(state.username)) {
            newErrors.username = 'Username must be at least 3 characters long';
        }
        if (!isEmailValid(state.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!isPasswordValid(state.password)) {
            newErrors.password = 'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character';
        }
        if (state.confirmPassword !== state.password) {
            newErrors.confirmPassword = 'Passwords do not match';
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
    }
    return (
        <Container className="mt-5">
            <Card className="mx-auto" style={{ maxWidth: '700px' }}>
                <Card.Header>
                    <h2 className="text-center">Sign Up Form</h2>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Row} className="mb-3" controlId="formUsername">
                            <Form.Label column sm={3}>Username</Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    type="text"
                                    value={state.username}
                                    onChange={handleUsernameChange}
                                    isInvalid={!!state.error.username}
                                    placeholder="Enter username"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {state.error.username}
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formEmail">
                            <Form.Label column sm={3}>Email</Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    type="email"
                                    value={state.email}
                                    onChange={handleEmailChange}
                                    isInvalid={!!state.error.email}
                                    placeholder="Enter email"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {state.error.email}
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPassword">
                            <Form.Label column sm={3}>Password</Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    type="password"
                                    value={state.password}
                                    onChange={handlePasswordChange}
                                    isInvalid={!!state.error.password}
                                    placeholder="Enter password"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {state.error.password}
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formConfirmPassword">
                            <Form.Label column sm={3}>Confirm Password</Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    type="password"
                                    value={state.confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                    isInvalid={!!state.error.confirmPassword}
                                    placeholder="Confirm password"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {state.error.confirmPassword}
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <div className="text-center">
                            <Button variant="primary" type="submit">
                                Sign Up
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
            <Modal show={state.showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up Successful</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Welcome, {state.username}! Your account has been created successfully.</p>
                    <p>Your username is: {state.username}</p>
                    <p>Your email is: {state.email}</p>
                    <p>Your password is: {state.password}</p>
                </Modal.Body>
            </Modal>
            <Toast
                onClose={handleCloseToast}
                show={state.showToast}
                delay={3000}
                autohide
                style={{ position: 'fixed', bottom: '20px', right: '20px' }}
                className="bg-success text-white"
            >
                <Toast.Header>
                    <strong className="mr-auto">Sign Up Result</strong>
                    <small>Just now</small>
                </Toast.Header>
                <Toast.Body>
                    Sign up successful! Welcome, {state.username}.
                </Toast.Body>
            </Toast>
        </Container>
    );
};
export default SignUpForm;