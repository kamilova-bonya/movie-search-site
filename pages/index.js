import { useState } from 'react';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import { searchMovies } from '../utils/api';

export default function Home() {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchMovies(query);
    setMovies(results);
  };

  return <>
    <Layout>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </Layout>
  </>
}
