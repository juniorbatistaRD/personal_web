import styles from "./Footer.module.css";
import { motion } from "framer-motion";
import Socials from "@components/Socials/Socials";
import LanguageSwitcher from "@components/LanguageSwitcher/LanguageSwitcher";
import { useTranslations } from "next-intl";

export default function Footer({ className }) {
  const t = useTranslations("common");
  const classnames = [styles.footer, className].join(" ");

  return (
    <footer className={classnames}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.9 }}
      >
        <Socials />
        <LanguageSwitcher />
      </motion.div>
      <p className={styles.credits}>{t("built")}</p>
    </footer>
  );
}
