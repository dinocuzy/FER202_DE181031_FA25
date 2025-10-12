import { Form, Row, Col } from "react-bootstrap";

function Step2Flight({ formData, handleChange }) {
  const address = ["Hà Nội", "TP.HCM", "Đà Nẵng"];

  return (
    <>
      <h5 className="fw-bold mb-3">Bước 2: Thông tin chuyến bay</h5>
      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Label>Đi từ</Form.Label>
            <Form.Select name="from" value={formData.from} onChange={handleChange}>
              <option value="">-- Chọn --</option>
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
              <option value="">-- Chọn --</option>
              {address.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Ngày khởi hành</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Loại vé</Form.Label>
          <Form.Select name="type" value={formData.type} onChange={handleChange}>
            <option>Một chiều</option>
            <option>Khứ hồi</option>
          </Form.Select>
        </Form.Group>
      </Form>
    </>
  );
}

export default Step2Flight;
