import Head from "next/head";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Mohammed Mubarak | Personal Portfolio</title>
        <meta name="description" content="Mohammed Mubarak" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {/* <Header /> */}
        <Landing />
        <Footer />
      </div>
    </div>
  );
}
