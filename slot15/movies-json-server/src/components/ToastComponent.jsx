import React from "react";
import { Toast, Button } from "react-bootstrap";
function ModalComponent({ show, handleClose, title, body }) {
    return (
        <Toast show={show} onHide={handleClose} delay={3000} autohide style={{ position: 'fixed', top: 20, right: 20, minWidth: '200px', color: '#000000ff', backgroundColor: '#ffffffff', borderColor: '#c3e6cb' }}>
            <Toast.Header>
                <strong className="me-auto">{title}</strong>
                <small>Just now</small>
                </Toast.Header>
            <Toast.Body>{body}</Toast.Body>

            <Button variant="outline-danger" onClick={handleClose}>
                Close
            </Button>
        </Toast>
    );
}

export default ModalComponent;