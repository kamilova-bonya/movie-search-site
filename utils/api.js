const API_KEY = 'a2b07930';

export async function searchMovies(query) {
  const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
  const data = await response.json();
  return data.Search || [];
}

export async function getMovieDetails(id) {
  const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
  const data = await response.json();
  return data;
}
