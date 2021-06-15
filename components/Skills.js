import PropTypes from "prop-types";
import styles from "../styles/skills.module.css";
import Image from "next/image";
const About = (props) => {
  return (
    <div id="about" className={styles.skillsDiv}>
      <h1>My Backpack</h1>
      <ul>
        <li title="HTML5">
          <Image src="/html5.svg" alt="html" height={100} width={100} />
        </li>
        <li>
          <Image src="/css3.svg" alt="html" height={100} width={100} />
        </li>
        <li>
          <Image src="/js.svg" alt="html" height={100} width={100} />
        </li>
        <li>
          <Image src="/mongodb.svg" alt="html" height={100} width={100} />
        </li>
        <li>
          <Image src="/express.svg" alt="html" height={100} width={100} />
        </li>
        <li>
          <Image src="/react.svg" alt="html" height={100} width={100} />
        </li>
        <li>
          <Image src="/nodejs.svg" alt="html" height={100} width={100} />
        </li>
        <li>
          <Image src="/next.svg" alt="html" height={100} width={100} />
        </li>
        <li>
          <Image src="/mysql.svg" alt="html" height={100} width={100} />
        </li>
        <li>
          <Image src="/styled.svg" alt="html" height={100} width={100} />
        </li>
      </ul>
    </div>
  );
};

About.propTypes = {};

export default About;
