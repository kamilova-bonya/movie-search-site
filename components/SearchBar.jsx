import { useState } from 'react';
import styles from '../styles/SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return <>
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Введите название фильма"
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchButton}>
        Найти
      </button>
    </form>
  </>
}
