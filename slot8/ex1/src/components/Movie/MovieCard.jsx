import React, { useState } from "react";
import { Row, Col, Card, Button, Badge, Toast, Modal } from "react-bootstrap";
import { cardMovies } from "../../data/card";

function MovieCard() {
    const [showToast, setShowToast] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selected, setSelected] = useState(null);
    const handleView = (movie) => {
        setSelected(movie);
        setShowModal(true);
    };
    const handleAddFavourite = (movie) => {
        const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
        localStorage.setItem("favourites", JSON.stringify([...favourites, movie]));
        setShowToast(true);
    };

    if (!Array.isArray(cardMovies) || cardMovies.length === 0) return null;
    return (
        <div className="p-3">
            <Row xs={1} sm={2} lg={3} md={3} className="g-4">
                {cardMovies.map((Movie, index) => (
                    <Col key={index}>
                        <Card
                            className="bg-dark text-light h-100 shadow-sm border-1 border-secondary"
                            style={{
                                borderRadius: 12,
                                transition: "0.3s",
                            }}
                        >
                            <Card.Img
                                variant="top"
                                src={Movie.img}
                                alt={Movie.title}
                                style={{
                                    height: 300,
                                    objectFit: "cover",
                                    borderTopLeftRadius: 12,
                                    borderTopRightRadius: 12,
                                }}
                            />
                            <Card.Body>
                                <h5 className="fw-bold mb-2">
                                    {Movie.title}{""}
                                    <div>
                                        <Badge bg="info" className="text-light">
                                            {Movie.genre}
                                        </Badge>{" "}
                                        <Badge bg="secondary">{Movie.year}</Badge>
                                    </div>
                                </h5>
                                <p className="text-light"
                                    style={{ fontSize: "0.9rem", opacity: 0.8 }}
                                >
                                    {Movie.description.length > 100
                                        ? Movie.description.slice(0, 100) + "..."
                                        : Movie.description}
                                </p>
                                <div className="d-flex flex-wrap justify-content-between align-items-center">
                                    <small className="text-light fw-bold">{Movie.country}</small>
                                    <Badge bg="danger">Duration: {Movie.duration}</Badge>
                                </div>
                                <div className="d-flex gap-2 mt-3 ">
                                    <Button
                                        size="sm"
                                        variant="outline-warning"
                                        onClick={() => handleAddFavourite(Movie)}
                                    >
                                        Add To Favourites
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="warning"
                                        onClick={() => handleView(Movie)}
                                    >
                                        View Details
                                    </Button>
                                </div>

                            </Card.Body>

                        </Card>

                    </Col>
                )

                )

                }



            </Row>
            <Toast
                show={showToast}
                onClose={() => setShowToast(false)}
                delay={1500}
                autohide
                bg="success"
                className="position-fixed bottom-0 end-0 p-3 text-light"
            >
                <Toast.Body>
                    Success add to favourites!
                </Toast.Body>
            </Toast>
            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                centered
                size="lg"
                className="text-dark"
            >
                {selected &&
                    <div className="bg-dark text-light p-3 rounded  ">
                        <Modal.Header closeButton>
                            <Modal.Title>{selected.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img
                                src={selected.img}
                                alt={selected.title}
                                className="img-fluid rounded mb-3 d-block mx-auto"
                            />
                            <p>
                                <strong>Country: </strong> {selected.country}
                            </p>
                            <p>
                                <strong>Duration: </strong> {selected.duration}
                            </p>
                            <p>
                                <strong>Genre: </strong> {selected.genre}
                            </p>
                            <p>
                                <strong>Year: </strong> {selected.year}
                            </p>
                            <p>
                                <strong>Description: </strong> {selected.description}
                            </p>
                            <Button
                                variant="warning"
                                onClick={() => handleAddFavourite(selected)}
                            >
                                Add To Favourites
                            </Button>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowModal(false)}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </div>
                }
            </Modal>

        </div >

    );

}
export default MovieCard;