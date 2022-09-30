import Link from "next/link";
import Navigation from "../Navigation";
import Image from "next/image";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div id={styles.header}>
      <div className={styles["header-items-inner"]}>
        <div className={styles["logo-wrapper"]}>
          <Link href="#">
            <a className={styles["logo-link"]}>
              <Image
                src="/images/logo.svg"
                width={1920}
                height={1080}
                alt="logo"
              />
            </a>
          </Link>
        </div>
        <Navigation />
      </div>

      <div className={styles["header-items-right"]}>
        <Link href="#">
          <a className={styles["shop-link"]}>shop</a>
        </Link>
        <button id={styles.hamburger}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </button>
      </div>
    </div>
  );
};

export default Header;
