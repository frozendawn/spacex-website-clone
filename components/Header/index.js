import Link from "next/link";
import Navigation from "../Navigation";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div id={styles.header}>
      <Navigation />
      
      <Link href="#">
      <a className={styles['shop-link']}>shop</a>
      </Link>
      <button id={styles.hamburger}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </button>
    </div>
  )
}

export default Header