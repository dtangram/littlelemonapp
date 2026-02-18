import clsx from "clsx";
import styles from "./underConstruction.module.css";

const UnderConstruction = ({ containerClassName }) => {
  return (
    <main className={clsx("container", containerClassName)}>
      <h1 className={styles.underConstruction}>Under Construction</h1>
    </main>
  );
};

export default UnderConstruction;