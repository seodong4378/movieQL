export let movies = [
    {
        id: 0,
        name: "Star Wars-Last jadai",
        score: 7.1
    },
    {
        id: 1,
        name: "Dark night",
        score: 9.0
    },
    {
        id: 2,
        name: "Soul",
        score: 9.9
    },
    {
        id: 3,
        name: "007-Skyfall",
        score: 8.7,
    },
    {
        id: 4,
        name: "Misson-impossible",
        score: 8.9,
    },
    {
        id: 5,
        name: "Parasite",
        score: 8.3,
    }
]

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length,
        name,
        score
    };

    movies.push(newMovie);
    return newMovie;
}

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);

    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}



