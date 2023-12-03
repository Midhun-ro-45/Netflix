import { useEffect, useState } from "react";
import { getWishlist } from "../../../api/getMovies";
import MovieCard from "../../../components/movieCard/MovieCard";
import "./page.css"

const FavoriteListPage = () => {
    const [movies, SetMovies] = useState([])
    useEffect(() => {
        getWishlist().then((data) => SetMovies(data));
    }, []);
    return <div className="fav-container">
        <h1 style={{ color: "white", fontWeight: "800" }}>My list:</h1>
        <div className="favourite-movie-list">{movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}</div>

    </div>;
};
export default FavoriteListPage