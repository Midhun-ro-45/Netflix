import { useState, useEffect } from "react";
import axios from "../../../libs/axios";
import Input from "../../../components/input/Input";
import NavigationBar from "../../../components/navbar/Navbar";
import "./searchList.css"
import Button from "../../../components/button/Button";
import MovieCard from "../../../components/movieCard/MovieCard";

const SearchList = () => {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    // const [isSearching, setIsSearching] = useState(false);

    const getMovies = async (query) => {
        try {
            const response = await axios.get(
                `search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`
            );
            const results = response.data.results;
            console.log(response);
            return results;
        } catch (err) {
            console.log(err);
            return [];
        }
    };

    useEffect(() => {
        if (search) {
            getMovies(search).then((results) => {
                setMovies(results);
            });
        }
    }, [search]);

    return (
        <>
            <div className="searchpage-container">

                <NavigationBar isUser />


                <div className="searchpage-input">
                    <Input
                        height={"2.5rem"}
                        borderRadius={"8px"}
                        width={"15rem"}
                        type="search"
                        backgroundColor={"gray"}
                        placeholder="Search Movies"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <Button content={"search"} padding={"10px 20px"} backgroundColor={"red"} fontSize={"1rem"} color={"white"} borderRadius={"8px"} />


                </div>

                <div className="search-content-container">{movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}</div>


            </div>
        </>
    );
};

export default SearchList;