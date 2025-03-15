import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return <>
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Поиск фильмов</h1>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  </>
}