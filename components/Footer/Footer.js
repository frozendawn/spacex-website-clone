import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div id={styles.footer}>
      <ul className={styles["footer-navigation"]}>
        <li>
          <span>spacex &#169; 2022</span>
        </li>
        <li>
          <Link href="#">Twitter</Link>
        </li>
        <li>
          <Link href="#">youtube</Link>
        </li>
        <li>
          <Link href="#">instagram</Link>
        </li>
        <li>
          <Link href="#">flickr</Link>
        </li>
        <li>
          <Link href="#">Linkedin</Link>
        </li>
        <li>
          <Link href="#">Privacy Policy</Link>
        </li>
        <li>
          <Link href="#">Suppliers</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
