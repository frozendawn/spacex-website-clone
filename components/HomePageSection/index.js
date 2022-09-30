import Link from "next/link";
import styles from "./homePageSection.module.css";

const HomePageSection = ({ h4Text, h2Text, btnText, backgroundImage }) => {
  return (
    <section
      className={styles["section-wrapper"]}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles["section-content"]}>
        <div className={styles["section-content-left"]}>
          {h4Text ? <h4>{h4Text}</h4> : null}
          {h2Text ? <h2>{h2Text}</h2> : null}
          <Link href="#">
            <a className={styles["button"]}>{btnText}</a>
          </Link>
        </div>
        <div className={styles["arrow-pointing-down"]}>
          <svg width="30px" height="20px">
            <path
              stroke="#ffffff"
              fill="none"
              strokeWidth="2px"
              d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HomePageSection;
