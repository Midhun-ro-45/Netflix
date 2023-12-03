import { getPageData } from "../../../api/getMovies";
import { useState, useEffect } from "react";
import "./page.css"
import Button from "../../../components/button/Button";
// import MovieCard from "../../../components/movieCard/MovieCard";
import Row from "../../../components/row/Row"
// import Heading from "../../../components/heading/Heading";
import NavigationBar from "../../../components/navbar/Navbar";

const baseUrl = "https://image.tmdb.org/t/p/original";

const HomePage = () => {
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        const getMovie = () => {
            getPageData().then((response) => setMovie(
                response?.netflixOriginals?.results[
                Math.floor(Math.random() * (response?.netflixOriginals?.results.length - 1))
                ]
            ));
        }
        getMovie()
        const key = setInterval(() => getMovie(), 5000);

        return () => {
            clearInterval(key);
        };

    }, []);


    const handleDescription = (data, n) => {
        return data?.length > n ? data.substring(0, n) + "..." : data;
    };

    console.log(movie);

    // card functionalities:

    const [data, setData] = useState(null);
    useEffect(() => {
        getPageData().then((response) => {
            setData(response);
            console.log(response);
        });
    }, []);



    return (
        <>
            <div className="homepage-container">
                <NavigationBar />



                <img
                    src={`${baseUrl + movie?.backdrop_path}`}
                    alt="Poster"
                    className=" w-full h-full object-cover"
                    loading="lazy"
                />


                <div className="homepage-content">

                    <h1 style={{ color: "white" }}>{movie?.name}</h1>

                    <div className="homepage-buttons">
                        <Button content={"play"} width={"8rem"} height={"3rem"} color={"black"} backgroundColor={"white"} fontWeight={'600'} />
                        <Button color={"white"} content={"watch later"} width={"8rem"} height={"3rem"} backgroundColor={"inherit"} />
                    </div>

                    <p style={{ color: "white" }} >
                        {handleDescription(movie?.overview, 200)}
                    </p>
                </div>

            </div>

            <main className="cards-container">
                <Row title="NETFLIX ORIGINALS" data={data?.netflixOriginals?.results} />
                {/* <Row title="trending now" data={data?.trendingNow.results} /> */}
                <Row title="topRated" data={data?.topRated?.results} />
                <Row title="actionMovies" data={data?.actionMovies?.results} />
                <Row title="comedyMoives" data={data?.comedyMovies?.results} />
                <Row title="horrorMovies" data={data?.horrorMovies?.results} />
                <Row title="romanceMovies" data={data?.romanceMovies?.results} />
                <Row title="warMovies" data={data?.warMovies?.results} />
                <Row
                    title="scienceFictionMovies"
                    data={data?.scienceFictionMovies?.results}
                />
                <Row title="documentaries" data={data?.documentaries?.results} />
            </main>


        </>


    );
};
export default HomePage;