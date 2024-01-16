// const express = require("express");
// const app = express();

// const port = 5000;

// const welcome = (req, res) => {
//     res.send("Welcome to Express");
// };

// app.get("/", welcome);

// const welcomeName = (req, res) => {
//     res.send(`Welcome ${req.params.name}`);
// };

// app.get("/users/:name", welcomeName);

// app
//     .listen(port, () => {
//         console.info(`Server is listening on port ${port}`);
//     })
//     .on("error", (err) => {
//         console.error("Error:", err.message);
//     });

const express = require("express");

const app = express();

const port = 5000;

const movies = [
    {
        id: 1,
        title: "Citizen Kane",
        director: "Orson Wells",
        year: "1941",
        color: false,
        duration: 120,
    },
    {
        id: 2,
        title: "The Godfather",
        director: "Francis Ford Coppola",
        year: "1972",
        color: true,
        duration: 180,
    },
    {
        id: 3,
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        year: "1994",
        color: true,
        duration: 180,
    },
];

app
    .listen(port, () => {
        console.info(`Server is listening on port ${port}`);
    })
    .on("error", (err) => {
        console.error("Error:", err.message);
    });

const welcome = (req, res) => {
    res.send("Welcome to my favourite movie list");
};

app.get("/", welcome);

const getMovies = (req, res) => {
    res.status(200).json(movies);
};

app.get("/api/movies", getMovies);

app.get('/api/movies/:id', (req, res) => {
    const movieId = parseInt(req.params.id);
    const findMovie = movies.find(movie => movie.id === movieId);
    console.info('req.params.id', req.params.id);
    if (findMovie) {
        res.status(200).json(findMovie);
    } else {
        res.status(404).json({ message: 'Not Found' });
    }
});


