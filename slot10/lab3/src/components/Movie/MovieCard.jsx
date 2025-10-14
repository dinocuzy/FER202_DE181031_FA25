import React from "react";
import { Card, Button, Badge } from "react-bootstrap";

function MovieCard({ movie, onAddFavourite, onView }) {
    return (
        <Card
            className="bg-dark text-light h-100 shadow-sm border-1 border-secondary"
            style={{
                borderRadius: 12,
                transition: "0.3s",
            }}
        >
            <Card.Img
                variant="top"
                src={movie.img}
                alt={movie.title}
                style={{
                    height: 300,
                    objectFit: "cover",
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                }}
                onError={(e) => (e.target.src = "../images/placeholder.jpg")}
            />
            <Card.Body>
                <h5 className="fw-bold mb-2">
                    {movie.title}{" "}
                    <div>
                        <Badge bg="info" className="text-light">
                            {movie.genre}
                        </Badge>{" "}
                        <Badge bg="secondary">{movie.year}</Badge>
                    </div>
                </h5>
                <p
                    className="text-light"
                    style={{ fontSize: "0.9rem", opacity: 0.8 }}
                >
                    {movie.description.length > 100
                        ? movie.description.slice(0, 100) + "..."
                        : movie.description}
                </p>
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <small className="text-light fw-bold">{movie.country}</small>
                    <Badge bg="danger">Duration: {movie.duration}</Badge>
                </div>
                <div className="d-flex gap-2 mt-3">
                    <Button
                        size="sm"
                        variant="outline-warning"
                        onClick={() => onAddFavourite(movie)}
                    >
                        Add To Favourites
                    </Button>
                    <Button
                        size="sm"
                        variant="warning"
                        onClick={() => onView(movie)}
                    >
                        View Details
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default MovieCard;
