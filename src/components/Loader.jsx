import styles from "styles/Loader.module.css";

const Loader = () => {
  return (
    <>
      <section className={styles.loader}>
        <div className={styles.loader_spin}></div>
      </section>
    </>
  );
};

export default Loader;
