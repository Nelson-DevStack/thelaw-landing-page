import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Grid from '../components/Grid'
import Hero from '../components/Hero'
import Offers from '../components/Offers'
import PersonHero from '../components/PersonHero'
import ServicesGrid from '../components/ServicesGrid'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Law</title>
        <meta name="description" content="Generated by create next app" />
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
        

      </main>
    </>
  )
}

export default Home
