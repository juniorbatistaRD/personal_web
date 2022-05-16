import Button from "@components/Button/Button";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero() {
  const fadeUp = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 70 },
  };

  const t = useTranslations("Hero");

  return (
    <section className={styles.container}>
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 0.9 }}
        className={styles.pre}
      >
        {t("name")}
      </motion.h1>
      <motion.h2
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 1.1 }}
        className={styles.name}
      >
        Junior Batista
      </motion.h2>
      <motion.h3
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.4, delay: 1.2 }}
        className={styles.slogan}
      >
        {t("slogan")}
      </motion.h3>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.4, delay: 1.3 }}
        className={styles.text}
      >
        {t("summary")}
      </motion.p>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        <Button className={styles.action} link="#contact">
          {t("callToAction")}
        </Button>
      </motion.div>
    </section>
  );
}
