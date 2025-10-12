import { Form } from "react-bootstrap";

export default function Step1Personal({ formData, handleChange }) {
  return (
    <>
      <h5 className="fw-bold mb-3">Bước 1: Thông tin cá nhân</h5>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Họ tên</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Nhập họ tên"
            value={formData.name}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">Phải nhập ≥ 5 ký tự</Form.Text>
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
        </Form.Group>
      </Form>
    </>
  );
}
