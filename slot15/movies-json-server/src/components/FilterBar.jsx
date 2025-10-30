import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useMovieState, useMovieDispatch } from "../contexts/MovieContext";

export default function FilterBar() {
    const { genres, movies } = useMovieState();
    const { dispatch, fetchMovies } = useMovieDispatch();
    const [search, setSearch] = useState("");
    const [genre, setGenre] = useState("");
    const [duration, setDuration] = useState("");
    const [sort, setSort] = useState("");

    // ✅ useRef để lưu dữ liệu gốc (cache)
    const originalMoviesRef = useRef([]);

    // Lưu danh sách gốc ngay khi fetch lần đầu
    useEffect(() => {
        if (movies.length > 0 && originalMoviesRef.current.length === 0) {
            originalMoviesRef.current = movies;
        }
    }, [movies]);

    // Lọc khi các giá trị thay đổi
    useEffect(() => {
        let list = [...originalMoviesRef.current]; // 👈 luôn lọc từ danh sách gốc

        if (search.trim()) {
            list = list.filter((m) =>
                m.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (genre) {
            list = list.filter((m) => {
                if (Array.isArray(m.genreIds))
                    return m.genreIds.map(String).includes(String(genre));
                return String(m.genreId) === String(genre);
            });
        }

        if (duration === "<=90") list = list.filter((m) => m.duration <= 90);
        if (duration === "90-120")
            list = list.filter((m) => m.duration >= 90 && m.duration <= 120);
        if (duration === ">=120") list = list.filter((m) => m.duration >= 120);

        if (sort === "asc") list.sort((a, b) => a.title.localeCompare(b.title));
        if (sort === "desc") list.sort((a, b) => b.title.localeCompare(a.title));

        dispatch({ type: "SET_MOVIES", payload: list });
    }, [search, genre, duration, sort]);

    // Xóa lọc → reset lại danh sách hiển thị gốc
    const handleReset = () => {
        setSearch("");
        setGenre("");
        setDuration("");
        setSort("");
        dispatch({ type: "SET_MOVIES", payload: originalMoviesRef.current });
    };

    return (
        <Row className="g-2 mb-3 align-items-center">
            <Col md={3}>
                <Form.Control
                    placeholder="Tìm theo tên..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Col>
            <Col md={3}>
                <Form.Select value={genre} onChange={(e) => setGenre(e.target.value)}>
                    <option value="">-- Thể loại --</option>
                    {genres.map((g) => (
                        <option key={g.id} value={g.id}>
                            {g.name}
                        </option>
                    ))}
                </Form.Select>
            </Col>
            <Col md={3}>
                <Form.Select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                >
                    <option value="">-- Thời lượng --</option>
                    <option value="<=90">≤ 90 phút</option>
                    <option value="90-120">90–120 phút</option>
                    <option value=">=120">≥ 120 phút</option>
                </Form.Select>
            </Col>
            <Col md={2}>
                <Form.Select value={sort} onChange={(e) => setSort(e.target.value)}>
                    <option value="">-- Sắp xếp --</option>
                    <option value="asc">Tên A → Z</option>
                    <option value="desc">Tên Z → A</option>
                </Form.Select>
            </Col>
            <Col md={1}>
                <Button variant="secondary" onClick={handleReset}>
                    Xóa lọc
                </Button>
            </Col>
        </Row>
    );
}
