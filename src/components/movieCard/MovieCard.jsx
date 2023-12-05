// MovieCard.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as filledHeart } from "@fortawesome/free-solid-svg-icons";
import "./movieCard.css";
import { addToWishlist } from "../../api/getMovies";

const baseUrl = "https://image.tmdb.org/t/p/w500";
const MovieCard = ({ movie }) => {
    const [isHovered, setIsHovered] = useState(false);

    const [isWishlistSelected, setIsWishlistSelected] = useState(false);
    const [isPlayBtnSelected, setIsPlayBtnSelected] = useState(false);

    const handleWishBtnClick = () => {
        setIsWishlistSelected(!isWishlistSelected);
        // alert("u clicked btn");
    };
    const handlePlayBtnClick = () => {
        setIsPlayBtnSelected(!isPlayBtnSelected);
        //alert("u clicked btn");
    };

    return (
        <div
            className="movie-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className="movie-image"
                style={{ backgroundImage: `url(${baseUrl}${movie.backdrop_path})` }}
            >
                {isHovered && (
                    <div className="overlay">
                        <div>
                            <h3>{movie.name || movie.title}</h3>
                        </div>
                        <div className="fav-buff">
                            <button
                                className={`wishlist-button ${isWishlistSelected ? "wishlist-selected" : ""
                                    }`}
                                onClick={handleWishBtnClick}
                            >
                                {!isWishlistSelected && <FontAwesomeIcon icon={farHeart} onClick={() => addToWishlist(movie?.id)} />}
                                {isWishlistSelected && <FontAwesomeIcon icon={filledHeart} />}
                            </button>
                            <button
                                className={`wishlist-button `}
                                onClick={handlePlayBtnClick}
                            >
                                {!isPlayBtnSelected && <FontAwesomeIcon icon={faPlay} />}
                                {isPlayBtnSelected && <FontAwesomeIcon icon={faSpinner} spin />}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MovieCard;
