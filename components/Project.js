import styles from "../styles/projects.module.css";
const Project = () => {
  return (
    <div id="project" className={styles.project}>
      <h1 className={styles.projectName}>Projects</h1>
      <div className={styles.mainBox}>
        <div className={styles.box1}>
          <h1>Name</h1>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea delectus
            maiores quaerat at ex dolore et blanditiis itaque, rem deserunt
            illum. Sequi suscipit similique, eum blanditiis est excepturi cumque
            sint.
          </h5>
          <footer className={styles.footerArea}>
            <button className={styles.footerButton}>View Code</button>
            <button className={styles.footerButton}>Video</button>
          </footer>
        </div>
        <div className={styles.box1}>Box 2</div>
        <div className={styles.box1}>Box 3</div>
        <div className={styles.box1}>Box 3</div>
        <div className={styles.box1}>Box 2</div>
        <div className={styles.box1}>Box 3</div>
        <div className={styles.box1}>Box 3</div>
        <div className={styles.box1}>Box 3</div>
        <div className={styles.box1}>Box 2</div>
        <div className={styles.box1}>Box 3</div>
        <div className={styles.box1}>Box 3</div>
      </div>
    </div>
  );
};

export default Project;
