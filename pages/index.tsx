import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Grid from '../components/Grid';
import Hero from '../components/Hero';
import Offers from '../components/Offers';
import PersonHero from '../components/PersonHero';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Law</title>
        <meta name="description" content="The Law | Landing Page made with Next.js" />
        <meta name="author" content="Nelson Carvalho"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <main className={styles.main} style={{ backgroundColor: "#f4f4f4" }}>
        <Hero />

        <div className={styles.container}>
          <Grid />
        </div>

        <PersonHero />

        <div className={styles.container}>
          <Offers />
          <About />
        </div>
        
        <Contact />
      </main>
    </>
  )
}

export default Home
