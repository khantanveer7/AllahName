import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Allah Name</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Hello Dev</h1>
        <a href="/api/name">
          <button className={styles.button}>API</button>
        </a>
      </main>
    </div>
  );
}
