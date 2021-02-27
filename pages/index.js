import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aaron's Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="heading-content text-center">
        <h5>Hello, I'm</h5>
        <h1>Aaron Xiang</h1>
      </div>
    </div>
  );
}
