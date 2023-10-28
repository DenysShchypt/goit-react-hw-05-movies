import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const fetchTrendingMovies = async () => {
    const response = await axios.get(`/trending/all/day?api_key=020a69ea7370c77aa06eca2a5130dadb&language=en-US`)
    return response.data.results
};

const fetchDetailsMovie = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}?api_key=020a69ea7370c77aa06eca2a5130dadb&language=en-US`)
    return response
};

const fetchSearchMovies = async (query) => {
    const response = await axios.get(`/search/movie?query
=${query}&include_adult=false&api_key=020a69ea7370c77aa06eca2a5130dadb&language=en-US&page=1`)
    return response.data.results
};

const fetchReviews = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/reviews?api_key=020a69ea7370c77aa06eca2a5130dadb&language=en-US&page=1`)
    return response.data.results[0]
};

const fetchCredits = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/credits?api_key=020a69ea7370c77aa06eca2a5130dadb&language=en-US`)
    return response.data.cast
};


export { fetchTrendingMovies, fetchDetailsMovie, fetchSearchMovies, fetchReviews, fetchCredits };