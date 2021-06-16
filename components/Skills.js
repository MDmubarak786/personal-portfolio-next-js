import PropTypes from "prop-types";
import styles from "../styles/skills.module.css";
import Image from "next/image";
const Skills = (props) => {
  return (
    <div id="skills" className={styles.skillsDiv}>
      <h2 className={styles.Backpack}>My Backpack</h2>
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
      <h2 className={styles.AboutHead}>About me</h2>
      <p className={styles.aboutPara}>
        Hello, I am a 20 year old programmer and final year student. I'm
        studying B.Tech in Information Technology at SKCT in Coimbatore. I enjoy
        programming a lot. I've created projects, websites etc. I'm a self
        taught programmer and very passionate and dedicated to my work. and I
        have been programming for ~1 year and still learning new technologies
        every day, mostly focusing on React, Next JS and design.I have acquired
        the skills necessary to build great, modern and premium websites.
      </p>
    </div>
  );
};

Skills.propTypes = {};

export default Skills;
