import React from "react";
import Image from "next/image";
import styles from "../styles/blobanimi.module.css";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <h1>
        made with love by MK,"center this part \& we will design this part
        later"
      </h1>
      {/* <svg
        width="454px"
        height="454px"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FF0066"
          d="M54.3,-21.4C61.8,5.4,53.4,33.7,34.2,47.8C15,61.9,-15,61.9,-32.4,48.3C-49.9,34.8,-54.8,7.7,-47.3,-19.1C-39.8,-45.9,-19.9,-72.4,1.7,-72.9C23.4,-73.5,46.8,-48.1,54.3,-21.4Z"
          transform="translate(100 100)"
        />
      </svg> */}
      {/* <div className={styles.blob}></div> */}
      {/* caveEffect */}
      <div className={styles.caveEffect}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1536 450"
          fill="none"
        >
          <path
            stroke="#121417"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeWidth="200"
            d="M100 356l43.049-217 43.049 237 43.049-339 43.049 169 43.048-29 43.049 138 43.049-257 43.049 228 43.049-140 43.049-17 43.049 121 43.049 70 43.049-263 43.048 114 43.049 210 44.534-312 43.049 141 43.048 140 43.049-166 40.817-88 43.05 48 45.28 219 43.05-319 43.05 253 43.05-163 43.05 13 43.04 15 43.05 154 43.05-61 43.05 158L1436 92"
          ></path>
          <path
            stroke=" #6147C6"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeWidth="130"
            d="M100 356l43.049-217 43.049 237 43.049-339 43.049 169 43.048-29 43.049 138 43.049-257 43.049 228 43.049-140 43.049-17 43.049 121 43.049 70 43.049-263 43.048 114 43.049 210 44.534-312 43.049 141 43.048 140 43.049-166 40.817-88 43.05 48 45.28 219 43.05-319 43.05 253 43.05-163 43.05 13 43.04 15 43.05 154 43.05-61 43.05 158L1436 92"
          ></path>
        </svg>
      </div>
    </div>
  );
}
