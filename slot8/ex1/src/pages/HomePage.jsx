import HomeCarousel from "../components/Home/HomeCarousel";
import MovieCard from "../components/Movie/MovieCard";


export default function HomePage() {
    return (
        <div className="bg-dark text-light">
            <HomeCarousel />
            <div className="container py-5 bg">
                <h4 className="text-warning mb-3 text-center fw-bold" style={{ fontSize: "3rem" }}>Featured Movies Collections</h4>
                <p className="text-secondary text-center mb-4 ">
                    Thêm thông tin về các bộ sưu tập phim nổi bật ở đây.
                </p>

                <MovieCard />
            </div>
        </div>
    );
}