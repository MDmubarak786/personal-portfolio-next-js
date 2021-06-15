import Head from "next/head";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Skills from "../components/Skills";
export default function Index() {
  return (
    <>
      <Head>
        <title>Mohammed Mubarak | Personal Portfolio</title>
        <meta name="description" content="Mohammed Mubarak" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Akronim&family=Paprika&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Home />
      <Skills />
      <Footer />
    </>
  );
}
