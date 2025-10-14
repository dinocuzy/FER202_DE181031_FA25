import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AccountWizard from "../components/Account/AccountWizard";

export default function AccountPage() {
    return (
        <div className="bg-dark text-light min-vh-100 py-5">
            <Container>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <AccountWizard />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
