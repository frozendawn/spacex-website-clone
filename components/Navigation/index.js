import Link from "next/link";
import styles from "./navigation.module.css";

const Navigation = () => {
  return (
      <ul className={styles["nav-list"]}>
        <li>
          <Link href="#">falcon 9</Link>
        </li>
        <li>
          <Link href="#">falcon heavy</Link>
        </li>
        <li>
          <Link href="#">dragon</Link>
        </li>
        <li>
          <Link href="#">starship</Link>
        </li>
        <li>
          <Link href="#">human spacelight</Link>
        </li>
        <li>
          <Link href="#">rideshare</Link>
        </li>
        <li>
          <Link href="#">starlink</Link>
        </li>
      </ul>
  );
};

export default Navigation;
