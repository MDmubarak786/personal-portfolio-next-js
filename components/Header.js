import React from "react";
import styles from "../styles/header.module.css";

export default function Header() {
  const changeHandler = (value) => {
    window.location.href = "#" + value;
  };

  return (
    <div className={styles.header}>
      <h1 className={styles.headingName}>
        MK<span>.</span>
      </h1>
      <ul className={styles.navlist}>
        <li onClick={() => changeHandler("home")}>Home</li>
        <li onClick={() => changeHandler("skills")}>Skills</li>
        <li onClick={() => changeHandler("contact")}>Contact</li>
        <li onClick={() => changeHandler("project")}>Projects</li>
      </ul>
      <button
        className={styles.contact}
        onClick={() => changeHandler("contact")}
      >
        Hire Me
      </button>
    </div>
  );
}
