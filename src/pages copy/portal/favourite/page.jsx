import { useEffect, useState } from "react";
import { getWishlist } from "../../../api/getMovies";
import MovieCard from "../../../components/movieCard/MovieCard";
import "./page.css"
import NavigationBar from "../../../components/navbar/Navbar";
import Button from "../../../components/button/Button";
import { Link } from "react-router-dom";

const FavoriteListPage = () => {
    const [movies, SetMovies] = useState([])
    useEffect(() => {
        getWishlist().then((data) => SetMovies(data));
    }, []);
    return <div className="fav-cont">
       
       <div className="fav-home">
        <div> <h1 style={{ color: "white", fontWeight: "800" }}>My List</h1> </div><div><Link to={"/home"}><Button width={"50px"} height={"35px"} content={"Home"} backgroundColor={"red"} color={"white"} padding={"4px"} borderRadius={"5px"} fontSize={"15px"}/></Link></div>
       </div>
        <div className="favourite-movie-list">{movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}</div>
    </div>;
};
export default FavoriteListPage