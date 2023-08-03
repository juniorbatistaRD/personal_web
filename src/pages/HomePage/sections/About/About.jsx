import SectionTitle from "@components/SectionTitle/SectionTitle";import Image from "next/image";
import styles from "./About.module.css";
import image from "@assets/images/profile.jpeg";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  return (
    <section className={styles.container} id="about">
      <SectionTitle number="01." title={t("about")} />
      <div className={styles.inner}>
        <div className={styles.text}>
          <p>{t("p1")}</p>

          <p>{t("p2")}</p>

          <p>{t("p3")}</p>

          <p>{t("p4")}</p>
          <ul className={styles.list}>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Node.js/Express</li>
            <li>WordPress</li>
          </ul>
        </div>
        <div className={styles.imageContainer}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className={styles.wrap}
          >
            <Image
              alt="Profile Picture of Junior Batista"
              src={image}
              width={350}
              height={350}
              className={styles.profile}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
