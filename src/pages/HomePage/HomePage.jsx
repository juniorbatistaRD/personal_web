import Nav from "@components/Nav/nav";
import Hero from "./sections/Hero/Hero";
import styles from "./HomePage.module.css";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import Work from "./sections/Work/Work";
import Contact from "./sections/Contact/Contact";
import LanguageSwitcher from "@components/LanguageSwitcher/LanguageSwitcher";
import Socials from "@components/Socials/Socials";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("common");

  return (
    <div>
      <Nav />
      <main className={styles.content}>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.9 }}
        >
          <Socials />
          <LanguageSwitcher />
        </motion.div>
        <footer className={styles.footer}>
          <p className={styles.credits}>{t("built")}</p>
        </footer>
      </main>
    </div>
  );
}
