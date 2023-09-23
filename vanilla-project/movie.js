const urlGenres = "https://moviesminidatabase.p.rapidapi.com/genres/";
const urlMoviesByGenre =
  "https://moviesminidatabase.p.rapidapi.com/movie/byGen/";

const urlMovieDetail = "https://moviesminidatabase.p.rapidapi.com/movie/id/";

const options = {
  headers: {
    "X-RapidAPI-Key": "8103e65f91mshdcca4457e4ce1d6p1e36a0jsn81cc350aecdc",
    "X-RapidAPI-Host": "moviesminidatabase.p.rapidapi.com",
  },
};

function getTextGenreByURL() {
  return location.search.split("=")[1];
}

function renderItemList(genre) {
  const genreFromURL = getTextGenreByURL();

  const classToElement =
    genreFromURL === genre
      ? "text-blue-800 font-semibold"
      : "hover:text-blue-800 hover:font-semibold";

  return `
    <p class="my-2 ${classToElement}">
      <a href="?genre=${genre}" class="cursor-pointer">${genre}</a>
    </p>
  `;
}

async function fetchData(url) {
  //   const response = await fetch(url, options);
  //   return await response.json();
  return await (await fetch(url, options)).json();
}

export async function getGenres(element) {
  const data = await fetchData(urlGenres);

  //   data.results.forEach((item) => {
  //     element.innerHTML += renderItemList(item.genre);
  //   });

  data.results.forEach(
    ({ genre }) => (element.innerHTML += renderItemList(item.genre))
  );
}

async function renderMovie(movie) {
  const data = await fetchData(`${urlMovieDetail}${movie.imdb_id}`);
  const movieData = data.results;

  return `
    <div>
      <img class="w-[200px] h-[300px] object-cover" src="${movieData.banner}" />
      <h2 class="font-semibold text-xl mt-2">${movie.title}</h2>
      <p class="truncate">${movieData.plot}</p>
    </div>
  `;
}

export async function getGenreByURL() {
  const genre = getTextGenreByURL();

  // caso1: si hay un error
  if (!genre) return;

  // caso2: cuando no hay error (hacemos la busqueda)
  // https://moviesminidatabase.p.rapidapi.com/movie/byGen/genre
  const data = await fetchData(`${urlMoviesByGenre}${genre}`);
  const containerMovies = document.querySelector("#grid-movies");

  data.results.slice(0, 6).forEach(async (movie) => {
    // insertar la informacion en el HTML
    const movieData = await renderMovie(movie);
    containerMovies.innerHTML += movieData;
  });
}
