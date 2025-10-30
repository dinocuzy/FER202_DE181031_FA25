import React from "react";
import { Form, Button, Row, Col, Card, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import ModalComponent from "./ModalComponent";
import ToastComponent from "./ToastComponent";

const LoginForm = () => {
    const { state, dispatch, login } = useAuth();
    const { username, password, error, message, user, showModal, showToast } = state;
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await login();
        if (success) {
            setTimeout(() => dispatch({ type: "showModal" }), 300);
        }
    };

    const handleCloseModal = () => {
        dispatch({ type: "hideModal" });
        if (user) navigate("/movies");
    };

    return (
        <>
            <Container className="mt-5">
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <Card className="p-4 shadow">
                            <Card.Header>
                                <h2 className="text-center">Login Form</h2>
                            </Card.Header>
                            <Card.Body>
                                {message && (
                                    <p
                                        className={
                                            message.includes("failed")
                                                ? "text-danger text-center fw-semibold"
                                                : "text-success text-center fw-semibold"
                                        }
                                    >
                                        {message}
                                    </p>
                                )}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formUsername">
                                        <Form.Label>Username or Email</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter username or email"
                                            value={username}
                                            onChange={(e) =>
                                                dispatch({
                                                    type: "changeUsername",
                                                    payload: e.target.value,
                                                })
                                            }
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
                                            onChange={(e) =>
                                                dispatch({
                                                    type: "changePassword",
                                                    payload: e.target.value,
                                                })
                                            }
                                            isInvalid={!!error.password}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {error.password}
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
                                            onClick={() => dispatch({ type: "LOGOUT" })}
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* ✅ Toast + Modal */}
            <ModalComponent
                show={showModal && user}
                handleClose={handleCloseModal} // chỉ navigate khi đóng
                title="Login Successful"
                body={`Welcome, ${user?.username || username}!`}
            />
        </>
    );
};

export default LoginForm;
