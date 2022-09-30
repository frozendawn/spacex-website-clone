import styles from "./index.module.css";
import Header from "../components/Header";
import Link from "next/link";
import HomePageSection from "../components/HomePageSection";
import Footer from "../components/Footer/Footer";
import { sections } from "../data/sections";

export default function Home() {
  return (
    <div className={styles["wrapper"]}>
      <Header />
      {
        sections.map((section, idx) => {
          return (
            <HomePageSection
              key={idx}
              h2Text={section.h2Text}
              h4Text={section.h4Text}
              btnText={section.btnText}
              backgroundImage={section.backgroundImage}
            />
          );
        })
      }
      <Footer/>
    </div>
  );
}


// Initial section structure before I split it to components.

      {/* <section className={styles["section-1"]}>
        <div className={styles["section-content"]}>
          <div className={styles["section-content-left"]}>
            <h4>recent launch</h4>
            <h2>starlink mission</h2>
            <Link href="#">
              <a className={styles["button"]}>Rewatch</a>
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
      </section> */}
      {/* <section className={styles["section-2"]}>
      <div className={styles["section-content"]}>
          <div className={styles["section-content-left"]}>
            <h2>spacex + t-mobile update</h2>
            <Link href="#">
              <a className={styles["button"]}>learn more</a>
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
      <section className={styles["section-3"]}>
      <div className={styles["section-content"]}>
          <div className={styles["section-content-left"]}>
            <h2>starship update</h2>
            <Link href="#">
              <a className={styles["button"]}>learn more</a>
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
      <section className={styles["section-4"]}>
      <div className={styles["section-content"]}>
          <div className={styles["section-content-left"]}>
            <h2>STARSHIP TO LAND NASA ASTRONAUTS ON THE MOON</h2>
            <Link href="#">
              <a className={styles["button"]}>learn more</a>
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
      </section> */}
