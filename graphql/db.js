import axios from "axios"
import { response } from "express";

let MOIVE_URL = "https://yts.mx/api/v2/list_movies.json?";

export const getMovie = async (limit, rating) => {
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



