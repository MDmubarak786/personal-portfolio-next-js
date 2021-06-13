import Head from "next/head";
import Footer from "../components/Footer";
import Home from "../components/Home";
import About from "../components/About";
export default function Index() {
  return (
    <div>
      <Head>
        <title>Mohammed Mubarak | Personal Portfolio</title>
        <meta name="description" content="Mohammed Mubarak" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Paprika&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <Home />
        <About />
        <Footer />
      </div>
    </div>
  );
}
