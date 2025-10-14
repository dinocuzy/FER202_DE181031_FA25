import React, { useState } from "react";
import HomeCarousel from "../components/Home/HomeCarousel";
import MoviePage from "./MoviePage";
import Filter from "../components/Filter/Filter";
import WebNavbar from "../components/Navbar/Navbar";

export default function HomePage() {
    const [searchText, setSearchText] = useState("");
    const [filterYear, setFilterYear] = useState("");
    const [sortOption, setSortOption] = useState("");

    return (
        <div className="bg-dark text-light">
            <WebNavbar />
            <HomeCarousel />
            <div className="container py-5 bg">
                <h4
                    className="text-warning mb-3 text-center fw-bold"
                    style={{ fontSize: "3rem" }}
                >
                    Featured Movies Collections
                </h4>

                <Filter
                    onSearch={setSearchText}
                    onFilter={setFilterYear}
                    onSort={setSortOption}
                />

                <MoviePage
                    searchText={searchText}
                    filterYear={filterYear}
                    sortOption={sortOption}
                />
            </div>
        </div>
    );
}
