import PropTypes from "prop-types";
import styles from "../styles/home.module.css";
import Typical from "./Typical";
const Home = (props) => {
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
        <p>
          {/* Typical is a component for typing style */}
          <Typical />
        </p>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
