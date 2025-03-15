import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/MovieDetails.module.css';
import { getMovieDetails } from '../utils/api';

export default function MovieDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (id) {
      getMovieDetails(id).then((data) => setMovie(data));
    }
  }, [id]);

  if (!movie) return <p>Загрузка...</p>;

  return <>
    <div className={styles.detailsContainer}>
      <h1 className={styles.title}>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} className={styles.poster} />
      <p className={styles.plot}>{movie.Plot}</p>
      <p className={styles.info}>Год: {movie.Year}</p>
      <p className={styles.info}>Рейтинг: {movie.imdbRating}</p>
      <p className={styles.info}>Жанр: {movie.Genre}</p>
      <p className={styles.info}>Режиссер: {movie.Director}</p>
      <p className={styles.info}>Актеры: {movie.Actors}</p>
    </div>
  </>
}

