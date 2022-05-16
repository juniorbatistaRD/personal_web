import Job from "@components/Job/Job";
import SectionTitle from "@components/SectionTitle/SectionTitle";
import { motion } from "framer-motion";
import styles from "./Experience.module.css";
import { useTranslations } from "next-intl";

export default function Experience() {
  const t = useTranslations("Experience");

  return (
    <motion.section
      className={styles.container}
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <SectionTitle number="02." title={t("title")} />
      <div className={styles.experiences}>
        <div className={styles.line}></div>
        <div>
          <Job
            position={t("FrontEndDev")}
            place={{ name: "BRINF LLC", website: "https://brinf.net/" }}
            dates={t("FrontEndDevDates")}
            description={t("FrontEndDevDes")}
          />
          <Job
            position={t("BackEndTeacher")}
            place={{ name: "ITLA", website: "https://www.itla.edu.do/" }}
            dates={t("BackEndTeacherDates")}
            description={t("BackEndTeacherDes")}
          />
          <Job
            position={t("WebMaster")}
            place={{
              name: t("YWAMSP"),
              website: "https://ywamsanpedro.org",
            }}
            dates="2017"
            description={t("WebMasterDes")}
          />
        </div>
      </div>
    </motion.section>
  );
}
