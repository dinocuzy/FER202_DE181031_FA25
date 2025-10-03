import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

const pizzas = [
    {
        name: "Margheritan Pizza",
        price: 40.00,
        priceSale: 24.00,
        img: "https://cdn.foodfaithfitness.com/uploads/2023/08/A_FEATURE2_Homemade-Margharita-Pizza-FFF-1-683x1024.jpg",
        isNew: false
    },
    {
        name: "Mushroom Pizza",
        price: 25.00,
        priceSale: 25.00,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFZbF4vUsB75gUYnhm9F0vuGFNUdG4jiMXbw&s",
        isNew: false
    },
    {
        name: "Hawaiian Pizza",
        price: 30.00,
        priceSale: 30.00,
        img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1170&q=80",
        isNew: true
    },
    {
        name: "Pesto Pizza",
        price: 40.00,
        priceSale: 10.00,
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1170&q=80"
        , isNew: false
    }
];

function AppMenu() {
    return (
        <Container className="my-5" style={{maxWidth: "80%"}}>
            <h2 className="text-center mb-4">Our Menu</h2>
            <Row>
                {pizzas.map((   pizza, index) => {
                    const hasSale = pizza.priceSale < pizza.price;
                    const discount = Math.round(
                        ((pizza.price - pizza.priceSale) / pizza.price) * 100
                    );

                    return (
                        <Col key={index} md={3} className="mb-4">
                            <Card className="position-relative" style={{ width: '17rem', height: '100%' }}>
                                {/* Badge hiển thị giảm giá */}
                                {hasSale && (
                                    <Badge
                                        bg="warning"
                                        className="position-absolute top-0 end-0 m-2 text-dark"
                                    >
                                        SALE -{discount}%
                                    </Badge>
                                )}
                                {/* Badge NEW chỉ cho pizza.isNew */}
                                {pizza.isNew && (
                                    <Badge bg="warning" className="position-absolute top-0 end-0 m-2 text-dark">
                                        NEW
                                    </Badge>
                                )}

                                <Card.Img
                                    variant="top"
                                    src={pizza.img}
                                    style={{ height: "300px", objectFit: "cover" }}
                                />
                                <Card.Body>
                                    <Card.Title>{pizza.name}</Card.Title>
                                    <Card.Text>
                                        {hasSale ? (
                                            <>
                                                <span className="text-muted text-decoration-line-through me-2">
                                                    ${pizza.price.toFixed(2)}
                                                </span>
                                                <span className="text-warning fw-bold">
                                                    ${pizza.priceSale.toFixed(2)}
                                                </span>
                                            </>
                                        ) : (
                                            <span>${pizza.price.toFixed(2)}</span>
                                        )}
                                    </Card.Text>
                                    <div className="d-flex justify-content-center">
                                        <Button
                                            variant="dark"
                                            style={{ width: "200px", height: "40px" }}
                                        >
                                            Buy
                                        </Button>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}

export default AppMenu;
