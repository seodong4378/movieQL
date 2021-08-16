import axios from "axios"
import { response } from "express";

let MOIVE_URL = "https://yts.mx/api/v2/list_movies.json?";

export const getMovies = async (limit, rating) => {
    let REQ_URL = MOIVE_URL;

    if (limit > 0) {
        REQ_URL += `limit=${limit}`
    }

    if (rating > 0) {
        REQ_URL += `&minimum_rating=${rating}`
    }

    const {
        data: {
            data: {movies}
        }
    } = await axios.get(REQ_URL);
    
    console.log(`URL : ${REQ_URL}`);

    return movies;
}

export const getMovie = async (id) => {
    let REQ_URL = MOIVE_URL;

    //console.log(id);

    const {
        data: {
            data: {movies}
        }
    } = await axios.get(REQ_URL);

    const movie = movies.filter(m => m.id === id);
    //console.log(movie[0]);

    return movie[0];
}



