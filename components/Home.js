import PropTypes from "prop-types";
import styles from "../styles/home.module.css";
import Typical from "./Typical";
import Image from "next/image";
import Link from "next/link";
import blobstyles from "../styles/blobanimi.module.css";

// import blurimage from './assets/blur.png'
const Home = (props) => {
  const redirectHandler = (value) => {
    window.location.href = "#" + value;
  };
  return (
    <div id="home" className={styles.homeDiv}>
      <div
        className={blobstyles.blob}
        style={{
          height: "630px",
          width: "500px",
          backgroundColor: "rgb(255, 0, 102)",
        }}
      ></div>
      <div
        className={blobstyles.blob}
        style={{
          height: "130px",
          width: "200px",
          position: "absolute",
          left: "600px",
          top: "200px",
          backgroundColor: "red",
        }}
      ></div>
      <div
        className={blobstyles.blob}
        style={{
          height: "150px",
          width: "400px",
          position: "absolute",
          left: "950px",
          top: "0px",
          backgroundColor: "#fed845",
          opacity: "0.47",
        }}
      ></div>
      <div
        className={blobstyles.blob}
        style={{
          height: "130px",
          width: "200px",
          position: "absolute",
          left: "900px",
          top: "500px",
          backgroundColor: "#a062fe",
          opacity: "0.12",
        }}
      ></div>
      <div
        className={blobstyles.blob}
        style={{
          height: "80px",
          width: "90px",
          position: "absolute",
          bottom: "100px",
          left: "500px",
          backgroundColor: "pink",
          opacity: "0.6",
        }}
      ></div>

      <div className={styles.centerPart}>
        <h1>
          Hi, I'm
          <h1>Mohammed Mubarak</h1>
        </h1>
        <h3>Frontend Developer</h3>
        <h6>
          Through constant practice & learning. A web developer and programmer
          living in Coimbatore, India. I am currently looking out for
          interesting opportunities.
        </h6>
        <p style={{ fontSize: "18px" }}>
          {/* Typical is a component for typing style */}
          {/* <Typical /> */}
        </p>
        <div className={styles.scrollDown}>
          <h4 onClick={() => redirectHandler("about")}>
            &darr; scroll down &darr;
          </h4>
        </div>
      </div>
      <div className={styles.box}>
        <div>
          <div className={styles.imagePosition}>
            {/* this place for add our image on blob that for this component  */}
            <Image
              src="/muba.png"
              alt="Picture of the author"
              width={620}
              height={600}
            />
          </div>
          <svg
            width="554px"
            height="654px"
            viewBox="0 0 160 190"
            xmlns="http://www.w3.org/2000/svg"
            // opacity= "0.2"
          >
            <path
              fill="#FF0066"
              d="M54.3,-21.4C61.8,5.4,53.4,33.7,34.2,47.8C15,61.9,-15,61.9,-32.4,48.3C-49.9,34.8,-54.8,7.7,-47.3,-19.1C-39.8,-45.9,-19.9,-72.4,1.7,-72.9C23.4,-73.5,46.8,-48.1,54.3,-21.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
