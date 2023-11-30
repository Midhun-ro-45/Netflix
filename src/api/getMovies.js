import axios from "./../libs/axios";
import requests from "./../libs/request";



export const getFetchActionMovies = async () => {
    try {
        const { data } = await axios.get(requests.fetchActionMovies);
        console.log(data);
        return data;
    } catch (error) {
        alert(JSON.stringify(error));
        return null;
    }
};
export const getFetchAdventureMovies = async () => {
    try {
        const { data } = await axios.get(requests.fetchAdventureMovies);
        console.log(data);
        return data;
    } catch (error) {
        alert(JSON.stringify(error));
        return null;
    }
};
export const getFetchTrending = async () => {
    try {
        const { data } = await axios.get(requests.fetchTrending);
        console.log(data);
        return data;
    } catch (error) {
        alert(JSON.stringify(error));
        return null;
    }
};
export const getFetchNetflixOriginals = async () => {
    try {
        const { data } = await axios.get(requests.fetchNetflixOriginals);
        console.log(data);
        return data;
    } catch (error) {
        alert(JSON.stringify(error));
        return null;
    }
};
export const getFetchTopRated = async () => {
    try {
        const { data } = await axios.get(requests.fetchTopRated);
        console.log(data);
        return data;
    } catch (error) {
        alert(JSON.stringify(error));
        return null;
    }
};
export const getFetchComedyMovies = async () => {
    try {
        const { data } = await axios.get(requests.fetchComedyMovies);
        console.log(data);
        return data;
    } catch (error) {
        alert(JSON.stringify(error));
        return null;
    }
};
export const getFetchDocumentaries = async () => {
    try {
        const { data } = await axios.get(requests.fetchDocumentaries);
        console.log(data);
        return data;
    } catch (error) {
        alert(JSON.stringify(error));
        return null;
    }
};
export const getFetchHorrorMovies = async () => {
    try {
        const { data } = await axios.get(requests.fetchHorrorMovies);
        console.log(data);
        return data;
    } catch (error) {
        alert(JSON.stringify(error));
        return null;
    }
};
export const getFetchScienceFictionMovies = async () => {
    try {
        const { data } = await axios.get(requests.fetchScienceFictionMovies);
        console.log(data);
        return data;
    } catch (error) {
        alert(JSON.stringify(error));
        return null;
    }
};
export const getFetchWarMovies = async () => {
    try {
        const { data } = await axios.get(requests.fetchWarMovies);
        console.log(data);
        return data;
    } catch (error) {
        alert(JSON.stringify(error));
        return null;
    }
};
export const getFetchSearchUrl = async () => {
    try {
        const { data } = await axios.get(requests.searchUrl);
        console.log(data);
        return data;
    } catch (error) {
        alert(JSON.stringify(error));
        return null;
    }
};
export const getFetchRomanceMovies = async () => {
    try {
        const { data } = await axios.get(requests.fetchRomanceMovies);
        console.log(data);
        return data;
    } catch (error) {
        alert(JSON.stringify(error));
        return null;
    }
};
