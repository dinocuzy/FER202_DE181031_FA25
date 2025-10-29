import React, { useReducer } from "react";
import { Form, Button, Row, Col, Card, Container } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import ModalComponent from "./ModalComponent";
import ToastComponent from "./ToastComponent";

const initialState = {
    username: "",
    password: "",
    showModal: false,
    error: {},
    showToast: false,
};

function reducer(state, action) {
    switch (action.type) {
        case "changeUsername":
            return { ...state, username: action.payload };
        case "changePassword":
            return { ...state, password: action.payload };
        case "setError":
            return { ...state, error: action.payload };
        case "showModal":
            return { ...state, showModal: true };
        case "hideModal":
            return { ...state, showModal: false };
        case "showToast":
            return { ...state, showToast: true };
        case "hideToast":
            return { ...state, showToast: false };
        case "reset":
            return initialState;
        default:
            return state;
    }
}

const LoginForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { login, error: authError, user } = useAuth();

    const handleUsernameChange = (e) => {
        dispatch({ type: "changeUsername", payload: e.target.value });
    };

    const handlePasswordChange = (e) => {
        dispatch({ type: "changePassword", payload: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (state.username.trim() === "") newErrors.username = "Username or Email is required";
        if (state.password.trim() === "") newErrors.password = "Password is required";

        dispatch({ type: "setError", payload: newErrors });

        if (Object.keys(newErrors).length === 0) {
            login(state.username, state.password);
            dispatch({ type: "showToast" });
            setTimeout(() => {
                dispatch({ type: "showModal" });
            }, 300);
        }
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <Card className="p-4 shadow">
                        <Card.Header>
                            <h2 className="text-center">Login Form</h2>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                
                                <Form.Group className="mb-3" controlId="formUsername">
                                    <Form.Label>Username or Email</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter username or email"
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
                                <div className="d-flex justify-content-center gap-2">
                                    <Button variant="primary" type="submit" className="mt-2 w-100">
                                        Login
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        type="button"
                                        className="mt-2 w-100"
                                        onClick={() => {
                                            dispatch({ type: "reset" });
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <ModalComponent
                show={state.showModal && user}
                handleClose={() => dispatch({ type: "hideModal" })}
                title="Login Successful"
                body={`Welcome, ${user?.username || state.username}!`}
            />

            <ToastComponent
                show={state.showToast}
                handleClose={() => dispatch({ type: "hideToast" })}
                title="Login Result"
                body={
                    user
                        ? `Login successful! Welcome, ${user.username}.`
                        : `Login failed: ${authError}`
                }
            />
        </Container>
    );
};

export default LoginForm;
