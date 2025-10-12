import React, { useState } from "react";
import { Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";


export default function BookingForm() {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        from: "Hà Nội",
        to: "Hà Nội",
        go: false,
        back: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name.trim().length < 5) {
            alert("❌ Họ tên phải có ít nhất 5 ký tự và viết hoa!");
            return;
        }
        alert(`✅ Đặt vé thành công cho ${formData.name}`);
    };
    const address = [
        "Quảng Trị",
        "Đà Nẵng",
        "Hà Nội",
        "TP.HCM",
        "Hải Phòng",
        "Hải Dương",
        "Bắc Ninh",
        "Huế"
    ]

    return (
        <div className="p-4 bg-light min-vh-100">
            <Row className="justify-content-center align-items-center " style={{ maxWidth: "70%", maxHeight: "90%", margin: "auto" }}>
                <Col md={6} className="bg-white p-4 rounded shadow-sm">
                    <div className="d-flex justify-content-between align-items-center ">
                        <h3 className="fw-bold">Form đặt vé máy bay</h3>
                        <Button variant="light" size="sm" className="border-0">✖</Button>
                    </div>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Họ tên</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>
                                    <i className="bi bi-person"></i>
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Họ tên"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <InputGroup.Text>vnd</InputGroup.Text>
                            </InputGroup>
                            <Form.Text className="text-muted">
                                Phải nhập ≥ 5 ký tự, in hoa...
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Địa chỉ</Form.Label>
                            <Form.Control
                                type="text"
                                name="address"
                                placeholder="Nhập địa chỉ"
                                value={formData.address}
                                onChange={handleChange}
                            />
                            <Form.Text className="text-muted">
                                Phải nhập ≥ 5 ký tự, in hoa...
                            </Form.Text>
                        </Form.Group>

                        <Row className="mb-3">
                            <Col>
                                <Form.Label>Đi từ</Form.Label>
                                <Form.Select name="from" value={formData.from} onChange={handleChange}>
                                    {address.map((city, index) => (
                                        <option key={index} value={city}>
                                            {city}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Col>
                            <Col>
                                <Form.Label>Đến</Form.Label>
                                <Form.Select name="to" value={formData.to} onChange={handleChange}>
                                    {address.map((city, index) => (
                                        <option key={index} value={city}>
                                            {city}
                                        </option>
                                    ))
                                    }
                                </Form.Select>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Label>Chọn chiều đi (Khứ hồi)</Form.Label>
                            <div>
                                <Form.Check
                                    inline
                                    label="Đi"
                                    type="checkbox"
                                    name="go"
                                    checked={formData.go}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <Form.Check
                                    inline
                                    label="Về"
                                    type="checkbox"
                                    name="back"
                                    checked={formData.back}
                                    onChange={handleChange}
                                />
                            </div>
                        </Form.Group>

                        <Button type="submit" variant="primary" className="w-100">
                            Đặt vé
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}
