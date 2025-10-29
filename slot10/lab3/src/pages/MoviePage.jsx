import React, { useState } from "react";
import { Row, Col, Toast, Modal, Button } from "react-bootstrap";
import MovieCard from "../components/Movie/MovieCard";
import { cardMovies } from "../data/card";

function MoviePage({ searchText = "", filterYear = "all", sortOption = "" }) {
    const [showToast, setShowToast] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selected, setSelected] = useState(null);

    const handleAddFavourite = (movie) => {
        let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
        const isFavourite = favourites.some((fav) => String(fav.id) === String(movie.id));

        if (!isFavourite) {
            favourites.push(movie);
            localStorage.setItem("favourites", JSON.stringify(favourites));
        }
        setShowToast(true);
    };

    const handleView = (movie) => {
        setSelected(movie);
        setShowModal(true);
    };

    let filteredMovies = cardMovies.filter((movie) => {
        const title = movie?.title?.toLowerCase() || "";
        const desc = movie?.description?.toLowerCase() || "";
        const search = searchText?.toLowerCase() || "";

        const matchSearch = title.includes(search) || desc.includes(search);

        let matchFilter = true;
        if (filterYear === "<=2000") matchFilter = movie.year <= 2000;
        else if (filterYear === "2001-2015") matchFilter = movie.year >= 2001 && movie.year <= 2015;
        else if (filterYear === ">2015") matchFilter = movie.year > 2015;

        return matchSearch && matchFilter;
    });

    switch (sortOption) {
        case "year-asc":
            filteredMovies.sort((a, b) => a.year - b.year);
            break;
        case "year-desc":
            filteredMovies.sort((a, b) => b.year - a.year);
            break;
        case "title-asc":
            filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case "title-desc":
            filteredMovies.sort((a, b) => b.title.localeCompare(a.title));
            break;
        case "duration-asc":
            filteredMovies.sort((a, b) => a.duration - b.duration);
            break;
        case "duration-desc":
            filteredMovies.sort((a, b) => b.duration - a.duration);
            break;
        default:
            break;
    }

    if (filteredMovies.length === 0)
        return <p className="text-center text-muted">No movies found.</p>;

    return (
        <div className="p-3">
            <Row xs={1} sm={2} lg={3} md={3} className="g-4">
                {filteredMovies.map((movie) => (
                    <Col key={movie.id}>
                        <MovieCard
                            movie={movie}
                            onAddFavourite={handleAddFavourite}
                            onView={handleView}
                        />
                    </Col>
                ))}
            </Row>

            <Toast
                show={showToast}
                onClose={() => setShowToast(false)}
                delay={1500}
                autohide
                bg="success"
                className="position-fixed bottom-0 end-0 p-3 text-light"
            >
                <Toast.Body>Success added to favourites!</Toast.Body>
            </Toast>

            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                centered
                size="lg"
                className="text-dark"
            >
                {selected && (
                    <div className="bg-dark text-light p-3 rounded">
                        <Modal.Header closeButton>
                            <Modal.Title>{selected.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img
                                src={selected.img}
                                alt={selected.title}
                                className="img-fluid rounded mb-3 d-block mx-auto"
                            />
                            <p><strong>Country:</strong> {selected.country}</p>
                            <p><strong>Duration:</strong> {selected.duration}</p>
                            <p><strong>Genre:</strong> {selected.genre}</p>
                            <p><strong>Year:</strong> {selected.year}</p>
                            <p><strong>Description:</strong> {selected.description}</p>
                            <Button
                                variant="warning"
                                onClick={() => handleAddFavourite(selected)}
                            >
                                Add To Favourites
                            </Button>
                        </Modal.Body>
                    </div>
                )}
            </Modal>
            <Button>
                Back to Home
            </Button>
        </div>
    );
}

export default MoviePage;
