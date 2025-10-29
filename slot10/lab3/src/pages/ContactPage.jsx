import ContactForm from "../components/Other/ContactForm";
import { Container, Row, Col } from "react-bootstrap";
function ContactPage(){
    return( 
        <div className="bg-dark text-light min-vh-100 py-5">
            <Container>
                <h2 className="text-center mb-4">Contact Us</h2>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <ContactForm />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default ContactPage;
