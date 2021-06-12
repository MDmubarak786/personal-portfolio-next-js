import PropTypes from "prop-types";
import styles from "../styles/home.module.css";
import Typical from "./Typical";
import Image from "next/image";
import Link from "next/link";
// import blurimage from './assets/blur.png'
const Home = (props) => {
  const redirectHandler = (value) => {
    window.location.href = "#" + value;
  };
  return (
    <div id="home" className={styles.homeDiv}>
      <div className={styles.centerPart}>
        <h1 style={{ fontSize: "1.875rem", fontWeight: "400" }}>
          Hi, I'm Mohammed Mubarak
        </h1>
        <h3>Frontend Developer</h3>
        <p>
          Through constant practice & learning, I produce aesthetic software to
          an extremely high standard.
        </p>
        <p style={{ fontSize: "18px" }}>
          {/* Typical is a component for typing style */}
          <Typical />
        </p>
        <div className={styles.scrollDown}>
          <h1 onClick={() => redirectHandler("about")}>
            &darr; scroll down &darr;
          </h1>
        </div>
      </div>

      <div className={styles.box}>
        <div>
          <div className={styles.imagePosition}>
            {/* this place for add our image on blob that for this component  */}
            {/* <Image
              src="/muba.png"
              alt="Picture of the author" 
              width={530}
              height={530}
            /> */}
          </div>
          <svg
            width="554px"
            height="654px"
            viewBox="0 0 160 190"
            xmlns="http://www.w3.org/2000/svg"
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
