// https://www.omdbapi.com/?i=tt3896198&apikey=ba7312e3

// https://www.omdbapi.com/?s=tt3896198&apikey=ba7312e3

// http://www.omdbapi.com/?apikey=[ba7312e3]&

// http://img.omdbapi.com/?apikey=[ba7312e3]&


async function main() {
    const movies = await fetch ("https://www.omdbapi.com/?i=tt3896198&apikey=ba7312e3")
    const movieData = await movies.json();
    const movieListEl = document.querySelector(".movie-card");


    movieListEl.innerHTML =  

    movieData.map((movie) => `<div class="movie-card">
        <img src="./assets/medium-cover.jpg" alt="">
        <h3>Movie Name</h3>
        <p>Movie year</p>
        </div>`
    ).join("");

        
       
}

main();

