import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./homePageSection.module.css";

const HomePageSection = ({ h4Text, h2Text, btnText, backgroundImage }) => {
  const myRef = useRef();

  useEffect(() => {
    // Triggering sectionContentFadeUp css animation once a given section enters user viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.children) {
              // I'm converting the HTML list to Array so I can use the array methods.
              const convertedChildren = Array.from(entry.target.children);
              convertedChildren.forEach((child) => {
                let animationDuration;

                switch (child.tagName) {
                  case "H2":
                    animationDuration = "0.4s";
                    break;
                  case "A":
                    animationDuration = "0.6s";
                    break;
                  default:
                    animationDuration = "0s";
                }
                child.style.animationDelay = animationDuration;
                child.classList.add(styles["triggerAnimation"]);
              });
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      }
    );
    observer.observe(myRef.current);
  }, []);

  return (
    <section
      className={styles["section-wrapper"]}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles["section-content"]}>
        <div className={styles["section-content-left"]} ref={myRef}>
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
