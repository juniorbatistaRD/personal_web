import styles from "./MobileMenu.module.css";
import { useTranslations } from "next-intl";
import Button from "@components/Button/Button";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useState } from "react";
import LanguageSwitcher from "@components/LanguageSwitcher/LanguageSwitcher";

export default function MobileMenu() {
  const t = useTranslations("Nav");
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();

  const handleMenuClick = () => {
    setIsOpen((prev) => !prev);

    controls.start((bar) => {
      let animation;

      switch (bar) {
        case "top":
          animation = {
            y: !isOpen ? 4 : 0,
            rotate: !isOpen ? -50 : 0,
          };
          break;
        case "middle":
          animation = {
            rotate: !isOpen ? 50 : 0,
          };

          break;
        case "bottom":
          animation = {
            opacity: !isOpen ? 0 : 1,
          };
          break;

        default:
          animation = {
            rotate: 0,
          };
      }

      return animation;
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.topIcon} onClick={handleMenuClick}>
        <svg
          width="32"
          height="32"
          version="1.1"
          viewBox="0 0 16.933 16.933"
          className={styles.menuIcon}
        >
          <g
            fill="none"
            stroke="#75daff"
            strokeLinecap="round"
            strokeWidth="1.432"
          >
            <motion.path
              animate={controls}
              custom={"top"}
              d="m2.8093 4.3447 12.895 0.039495"
            />

            <motion.path
              custom={"middle"}
              animate={controls}
              d="m2.8093 8.2448 12.895 0.039495"
            />
            <motion.path
              custom={"bottom"}
              animate={controls}
              d="m6.9563 12.145 8.7481 0.0395"
            />
          </g>
        </svg>
      </div>
      <AnimatePresence>
        {" "}
        {isOpen && (
          <motion.div
            className={styles.asideContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0 }}
          >
            <motion.aside
              className={styles.mobileNav}
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              transition={{ ease: "easeOut", duration: 0.3 }}
              exit={{ x: 300 }}
            >
              <nav>
                <ul className={styles.menu}>
                  <li>
                    <span className={styles.number}>01.</span>
                    <a href="/#about">{t("about")}</a>
                  </li>
                  <li>
                    <span className={styles.number}>02.</span>
                    <a href="/#experience">{t("experience")}</a>
                  </li>
                  <li>
                    <span className={styles.number}>03.</span>
                    <a href="/#work">{t("work")}</a>
                  </li>
                  <li>
                    <span className={styles.number}>04.</span>
                    <a href="/#contact">{t("contact")}</a>
                  </li>
                  <li>
                    <Button link="/resume.pdf" target="_blank">
                      {t("resume")}
                    </Button>
                  </li>
                </ul>
              </nav>
              <LanguageSwitcher mobile={true} />
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
