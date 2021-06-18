import Head from "next/head";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Project from "../components/Project";

export default function Index() {
  return (
    <>
      <Head>
        <title>Mohammed Mubarak | Personal Portfolio</title>
        <meta name="description" content="Mohammed Mubarak" />
        <meta name="theme-color" content="#9d4edd" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Akronim&family=Paprika&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </Head>
      <Home />
      <Skills />
      <Contact />
      <Project />
      <Footer />
    </>
  );
}
