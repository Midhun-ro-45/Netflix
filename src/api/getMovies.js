import axios from "./../libs/axios";
import requests from "./../libs/request";



export const getFetchActionMovies = async () => {
    try {
        const { data } = await axios.get(requests.fetchActionMovies);
        return data;
    } catch (error) {
        alert(JSON.stringify(error));
        return null;
    }
};
export const getFetchAdventureMovies = async () => {
    try {
        const { data } = await axios.get(requests.fetchAdventureMovies);
        return data;
    } catch (error) {
        alert(JSON.stringify(error));
        return null;
    }
};
export const getFetchTrending = async () => {
    try {
        const { data } = await axios.get(requests.fetchTrending);
        return data;
    } catch (error) {
        alert(JSON.stringify(error));
        return null;
    }
};
export const getFetchNetflixOriginals = async () => {
    try {
        const { data } = await axios.get(requests.fetchNetflixOriginals);
        return data;
    } catch (error) {
        alert(JSON.stringify(error));
        return null;
    }
};
export const getFetchTopRated = async () => {
    try {
        const { data } = await axios.get(requests.fetchTopRated);
        return data;
    } catch (error) {
        alert(JSON.stringify(error));
        return null;
    }
};
export const getFetchComedyMovies = async () => {
    try {
        const { data } = await axios.get(requests.fetchComedyMovies);
        return data;
    } catch (error) {
        alert(JSON.stringify(error));
        return null;
    }
};
export const getFetchDocumentaries = async () => {
    try {
        const { data } = await axios.get(requests.fetchDocumentaries);
        return data;
    } catch (error) {
        alert(JSON.stringify(error));
        return null;
    }
};
export const getFetchHorrorMovies = async () => {
    try {
        const { data } = await axios.get(requests.fetchHorrorMovies);
        return data;
    } catch (error) {
        alert(JSON.stringify(error));
        return null;
    }
};
export const getFetchScienceFictionMovies = async () => {
    try {
        const { data } = await axios.get(requests.fetchScienceFictionMovies);
        return data;
    } catch (error) {
        alert(JSON.stringify(error));
        return null;
    }
};
export const getFetchWarMovies = async () => {
    try {
        const { data } = await axios.get(requests.fetchWarMovies);
        return data;
    } catch (error) {
        alert(JSON.stringify(error));
        return null;
    }
};
export const getFetchSearchUrl = async () => {
    try {
        const { data } = await axios.get(requests.searchUrl);
        return data;
    } catch (error) {
        alert(JSON.stringify(error));
        return null;
    }
};
export const getFetchRomanceMovies = async () => {
    try {
        const { data } = await axios.get(requests.fetchRomanceMovies);
        return data;
    } catch (error) {
        alert(JSON.stringify(error));
        return null;
    }
};

export const getPageData = async () => {
    const actionMovies = await getFetchActionMovies();
    const fetchTrending = await getFetchTrending();
    const netflixOriginals = await getFetchNetflixOriginals();
    const adventureMovies = await getFetchAdventureMovies();
    const comedyMovies = await getFetchComedyMovies();
    const documentaries = await getFetchDocumentaries();
    const horrorMovies = await getFetchHorrorMovies();
    const romanceMovies = await getFetchRomanceMovies();
    const scienceFictionMovies = await getFetchScienceFictionMovies();
    const topRated = await getFetchTopRated();
    const warMovies = await getFetchWarMovies();

    return {
        actionMovies,
        fetchTrending,
        netflixOriginals,
        adventureMovies,
        comedyMovies,
        documentaries,
        horrorMovies,
        romanceMovies,
        scienceFictionMovies,
        topRated,
        warMovies,
    };
};

export const addToWishlist = async (media_id) => {
    const options = {
        headers: {
            accept: "application/json",
            "content-type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWEwODkyMzgwODZhZjQyZGNhYThkOGYwY2Y3Mjk1MCIsInN1YiI6IjY1NjVlNzQzM2Q3NDU0MDBjOWM0ZDc0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-LyTJhsp3ayx3leEniBRwZGVYNiTcEJM2seiZPpXobI`,
        },
    };

    const { data } = await axios.post(
        `account/20765029/favorite`,
        {
            media_type: "movie",
            media_id,
            favorite: true,
        },
        options
    );
    return data;
};


export const getWishlist = async () => {


    const options = {
        headers: {
            accept: "application/json",
            Authorization:
                `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWEwODkyMzgwODZhZjQyZGNhYThkOGYwY2Y3Mjk1MCIsInN1YiI6IjY1NjVlNzQzM2Q3NDU0MDBjOWM0ZDc0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-LyTJhsp3ayx3leEniBRwZGVYNiTcEJM2seiZPpXobI`,
        },
    };

    const response = await axios.get(
        `account/20765029/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`,
        options
    );
    return response.data.results;
};
