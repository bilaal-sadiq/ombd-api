// https://www.omdbapi.com/?i=tt3896198&apikey=ba7312e3

// https://www.omdbapi.com/?s=spider&page=1&apikey=ba7312e3

// http://www.omdbapi.com/?apikey=[ba7312e3]&

// http://img.omdbapi.com/?apikey=[ba7312e3]&

// async function main() {
//     const movies = await fetch("https://www.omdbapi.com/?s=spider&page=1&apikey=ba7312e3");
//     const movieData = await movies.json();
//     const movieListEl = document.querySelector(".movie-card")
//     console.log(movieData);

//     movieListEl.innerHTML =
//        ` <div class="movie-card">
//     <img src="${movieData.Poster}" alt="">
//     <h3>${movieData.Title}</h3>
//     <p>${movieData.year}</p>
// </div>`

// }

// main();

// Array to store fetched movies data
let moviesData = [];

// Function to fetch movie data from OMDB API
function fetchMovieData(apiKey, movieTitle) {
    return new Promise((resolve, reject) => {
        const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(movieTitle)}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.Response === "False") {
                    reject(new Error(data.Error));
                } else {
                    resolve(data.Search);
                }
            })
            .catch(error => {
                reject(error);
            });
    });
}

// Function to search for movies based on the input
function searchMovie() {
    const apiKey = 'ba7312e3';  // OMDB API key
    const movieTitle = document.getElementById('movieTitle').value;

    fetchMovieData(apiKey, movieTitle)
        .then(data => {
            moviesData = data.slice(0, 6); // Limiting to 6 results
            displayMovies(moviesData);
        })
        .catch(error => {
            const resultContainer = document.getElementById('resultContainer');
            resultContainer.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        });
}

// Function to display movie data as cards
function displayMovies(movies) {
    const movieGrid = document.getElementById('movieGrid');
    movieGrid.innerHTML = ''; // Clear previous results

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <img src="${movie.Poster}" alt="Poster of ${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>${movie.imdbRating}</p>
        `;
        movieGrid.appendChild(movieCard);
    });
}


