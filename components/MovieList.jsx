import Link from 'next/link';
import styles from '../styles/MovieList.module.css';

export default function MovieList({ movies }) {
  if (!movies || movies.length === 0) {
    return <p className={styles.noResults}>Фильмы не найдены</p>;
  }

  return <>
    <div className={styles.movieList}>
      {movies.map((movie) => (
        <Link href={`/movie/${movie.imdbID}`} key={movie.imdbID}>
          <div className={styles.movieCard}>
            <img src={movie.Poster} alt={movie.Title} className={styles.poster} />
            <h3 className={styles.title}>{movie.Title}</h3>
            <p className={styles.year}>{movie.Year}</p>
          </div>
        </Link>
      ))}
    </div>
  </>
}
