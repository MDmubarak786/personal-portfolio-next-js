import Image from "next/image";
import styles from "../styles/contact.module.css";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const Contact = () => {
  const instagram = "https://www.instagram.com/scooby_doo.mk/";
  const twitter = "https://twitter.com/MMubarakoo7";
  const github = "https://github.com/MDmubarak786";
  const linkedin = "https://www.linkedin.com/in/mohammed-mubarak/";
  const youtube = "https://www.youtube.com/channel/UCS2LnbR7nR1ylerD7TZYrlQ/";
  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.main}>
        <div className={styles.left}>
          <h2 className={styles.contactHead}>Contact</h2>
          <div className={styles.iconList}>
            <a href={github} target="_blank">
              <FaGithub />
            </a>
            <a href={linkedin} target="_blank">
              <FaLinkedin />
            </a>
            <a href={instagram} target="_blank">
              <FaInstagram />
            </a>
            <a href={twitter} target="_blank">
              <FaTwitter />
            </a>
            <a href={youtube} target="_blank">
              <FaYoutube />
            </a>
          </div>
          <div>
            <h2 className={styles.email}>Email</h2>
            <p className={styles.emailadd}>mohammedmubarakmk@gmail.com</p>
          </div>
          <div>
            <h2 className={styles.mobile}>Mobile</h2>
            <p className={styles.mobilenum}>+91 7904100495</p>
          </div>
        </div>

        <div className={styles.right}>
          <Image
            src="/side.svg"
            alt="html"
            height={650}
            width={650}
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
