import Head from 'next/head';
import styles from '../styles/Home.module.css';

/**
 * Home page component
 * This is the main landing page of the application
 */
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Finances</title>
        <meta name="description" content="My Finances application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.highlight}>My Finances</span>
        </h1>

        <p className={styles.description}>
          Manage your personal finances with ease
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Accounts &rarr;</h2>
            <p>View and manage your bank accounts</p>
          </div>

          <div className={styles.card}>
            <h2>Transactions &rarr;</h2>
            <p>Track your income and expenses</p>
          </div>

          <div className={styles.card}>
            <h2>Budget &rarr;</h2>
            <p>Create and manage your budget</p>
          </div>

          <div className={styles.card}>
            <h2>Reports &rarr;</h2>
            <p>Analyze your financial data</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>My Finances &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}