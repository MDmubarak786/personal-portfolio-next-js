import Image from "next/image";
import styles from "../styles/contact.module.css";
const Contact = () => {
  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.main}>
        <div className={styles.left}>
          <h2 className={styles.contactHead}>Contact</h2>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/scooby_doo.mk/"
                target="_blank"
              >
                <Image src="/instagram.svg" alt="html" height={60} width={60} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/MMubarakoo7" target="_blank">
                <Image src="/twitter.svg" alt="html" height={60} width={60} />
              </a>
            </li>
            <li>
              <a href="https://github.com/MDmubarak786" target="_blank">
                <Image src="/github.svg" alt="html" height={60} width={60} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mohammed-mubarak/"
                target="_blank"
              >
                <Image src="/linkedin.svg" alt="html" height={60} width={60} />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCS2LnbR7nR1ylerD7TZYrlQ"
                target="_blank"
              >
                <Image src="/youtube.svg" alt="html" height={77} width={77} />
              </a>
            </li>
          </ul>
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
    
            <Image src="/side.svg" alt="html" height={650} width={650} />
     
        </div>
      </div>
    </div>
  );
};

export default Contact;
