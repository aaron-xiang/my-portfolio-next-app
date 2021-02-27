import Head from "next/head";
// import styles from "../styles/Home.module.css";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Aaron's Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="heading-content text-center">
        <h5>Hello, I'm</h5>
        <h1>Aaron Xiang</h1>
      </div>
    </Container>
  );
}
