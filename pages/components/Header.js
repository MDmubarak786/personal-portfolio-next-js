import React from "react";
import { useRouter } from 'next/router';
import styles from "../../styles/header.module.css";
export default function Header() {
  const router = useRouter();

  const changeHandler = (value) => {
    router.push('/' + value);
  }

  return (
    <div className={styles.header}>
      <h1 className={styles.headingName}>
        MK<span>.</span>
      </h1>
      <ul className={styles.navlist}>
        <li onClick={() => changeHandler('home')}>Home</li>
        <li onClick={() => changeHandler('about')}>About</li>
        <li>Resume</li>
        <li>Projects</li>
      </ul>
      <button className={styles.contact} onClick={() => console.log("Contact")}>
        Contact
      </button>
    </div>
  );
}

