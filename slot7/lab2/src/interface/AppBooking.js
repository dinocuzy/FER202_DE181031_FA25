import { Container, Form, Button, Row, Col } from 'react-bootstrap';

function AppBooking() {
  return (
    <Container className="my-5" style={{maxWidth: "80%"}}>
      <h2 className="text-center mb-4">Book a Table</h2>
      <Form>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name*" />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Your Email*" />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="formSelect">
              <Form.Label>Service</Form.Label>
              <Form.Select>
                <option>Select a Service</option>
                <option>Dine In</option>
                <option>Take Away</option>
                <option>Delivery</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        {/* Description */}
        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Please write your description..."
          />
        </Form.Group>

        {/* Nút ở bên phải, chữ in đậm và căn giữa trong nút */}
        <div className="d-flex justify-content-start">
          <Button 
            variant="warning" 
            className="text-light fw-bold text-center"
            style={{ height: "40px", width: "200px", fontSize: "18px" }}
          >
            Send Message
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default AppBooking;
