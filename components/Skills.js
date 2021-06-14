import PropTypes from "prop-types";
import styles from "../styles/skills.module.css";
import Html5 from "../svg/Icons/Html5";
import Css3 from "../svg/Icons/Css3";
import Js from "../svg/Icons/Js";
import Nodejs from "../svg/Icons/Nodejs";
import Mysql from "../svg/Icons/Mysql";
import Reactjs from "../svg/Icons/Reactjs";
import Java from "../svg/Icons/Java";
import Image from 'next/image'
const About = (props) => {
  return (
    <div id="about" className={styles.skillsDiv}>
      <h1> I'm Skills</h1>
      <div style={{ height: "100px", width: "auto" }}>
        {/*  display: "flex"  */}
        {/* <Html5 />
        <Css3 />
        <Js />
        <Nodejs />
        <Mysql />
        <Reactjs />
        <Java /> */}
        <Image src="/html5.svg" alt="html" height={100} width={100} />
        <Image src="/css3.svg" alt="html" height={100} width={100} />
        <Image src="/js.svg" alt="html" height={100} width={100} />
        <Image src="/nodejs.svg" alt="html" height={100} width={100} />
        <Image src="/mysql.svg" alt="html" height={100} width={100} />
        <Image src="/react.svg" alt="html" height={100} width={100} />
        <Image src="/java.svg" alt="html" height={100} width={100} />
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;
