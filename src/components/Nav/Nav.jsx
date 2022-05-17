import styles from "./Nav.module.css";
import Icon from "@assets/icons/logo.svg";
import Button from "@components/Button/Button";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Nav() {
  const t = useTranslations("Nav");

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -20 },
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <Icon width={60} height={60} />
        </div>
        <nav className={styles.nav}>
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={list}
            className={styles.menu}
          >
            <motion.li variants={item}>
              <span className={styles.number}>01.</span>
              <a href="#about">{t("about")}</a>
            </motion.li>
            <motion.li variants={item}>
              <span className={styles.number}>02.</span>
              <a href="#experience">{t("experience")}</a>
            </motion.li>
            <motion.li variants={item}>
              <span className={styles.number}>03.</span>
              <a href="#work">{t("work")}</a>
            </motion.li>
            <motion.li variants={item}>
              <span className={styles.number}>04.</span>
              <a href="#contact">{t("contact")}</a>
            </motion.li>
            <motion.li variants={item}>
              <Button link="/resume.pdf" target="_blank">
                {t("resume")}
              </Button>
            </motion.li>
          </motion.ul>
        </nav>
      </div>
    </header>
  );
}
