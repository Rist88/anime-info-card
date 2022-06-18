import type { NextPage } from "next";
import Head from "next/head";
import Info from "../components/Info";
import About from "../components/About";
import Footer from "../components/Footer";
import Interests from "../components/Interests";

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Gojo Satoru</title>
        <meta name="description" content="Gojo Satoru info card" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
};

export default Home;
