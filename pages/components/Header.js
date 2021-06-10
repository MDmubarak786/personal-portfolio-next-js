import React from "react";

import styles from "../../styles/header.module.css";
export default function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.headingName}>
        MK<span>.</span>
      </h1>
      <ul className={styles.navlist}>
        <li>Home</li>
        <li>About</li>
        <li>Resume</li>
        <li>Projects</li>
      </ul>
      <button className={styles.contact} onClick={() => console.log("Contact")}>
        Contact
      </button>
    </div>
  );
}
