import styles from "./Contact.module.css";
import Button from "@components/Button/Button";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className={styles.container}
      id="contact"
    >
      <h2 className={styles.pre}>04. {t("title")}</h2>
      <h2 className={styles.title}>{t("GetInTouch")}</h2>
      <p className={styles.text}>{t("text")}</p>
      <Button
        className={styles.button}
        link="mailto:juniorabc77@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        {t("button")}
      </Button>
    </motion.section>
  );
}
