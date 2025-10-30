import React, { useState, useEffect } from "react";
import { Navbar, Container, Button, Badge } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const { state, logout } = useAuth();
    const { user } = state;
    const [showLogin, setShowLogin] = useState(false);
    const navigate = useNavigate();

    // 👉 Khi user bị logout (user === null), tự quay lại trang login
    useEffect(() => {
        if (!user) navigate("/login");
    }, [user, navigate]);

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>🎬 Movie System</Navbar.Brand>
                    <div className="ms-auto">
                        {user ? (
                            <>
                                <span className="me-2 text-light">
                                    Xin chào, <strong>{user.username}</strong>
                                </span>
                                <Button
                                    variant="outline-danger"
                                    size="sm"
                                    onClick={() => {
                                        logout();
                                        navigate("/login"); // 👈 đảm bảo điều hướng ngay lập tức
                                    }}
                                >
                                    Đăng xuất
                                </Button>
                            </>
                        ) : (
                            <Button
                                variant="outline-light"
                                size="sm"
                                onClick={() => setShowLogin(true)}
                            >
                                Đăng nhập
                            </Button>
                        )}
                    </div>
                </Container>
            </Navbar>

            {showLogin && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        background: "rgba(0,0,0,0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 9999,
                    }}
                    onClick={() => setShowLogin(false)}
                >
                    <div onClick={(e) => e.stopPropagation()}>
                        <LoginForm />
                    </div>
                </div>
            )}
        </>
    );
}
