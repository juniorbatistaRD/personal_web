import FeaturedProject from "@components/FeaturedProject/FeaturedProject";import SectionTitle from "@components/SectionTitle/SectionTitle";
import styles from "./Work.module.css";
import genteUniImg from "@assets/images/genteuni.png";
import hohImg from "@assets/images/hoh.jpg";
import bookhubImg from "@assets/images/bookhub.png";
import OtherWork from "./OtherWork";
import { useTranslations } from "next-intl";

export default function Work() {
  const t = useTranslations("Work");

  return (
    <section className={styles.container} id="work">
      <SectionTitle number="03." title={t("title")} />
      <div className={styles.content}>
        <FeaturedProject
          name={t("GenteUni")}
          description={t("GenteUniDes")}
          tags={["Next.js", "Parse Server", "Formik", "Social Network"]}
          repo="https://github.com/juniorbatistadev/Unikob-public-version"
          link="https://unikob.com"
          image={genteUniImg.src}
        />
        <FeaturedProject
          name={t("BookHub")}
          description={t("BookHubDes")}
          tags={[
            "React Native",
            "PWA",
            "Mobile App",
            "Framer Motion",
            "Firebase",
          ]}
          repo="https://github.com/juniorbatistadev/bookhub-app"
          link="https://play.google.com/store/apps/details?id=dev.juniorbatista.bookhub&hl=en"
          image={bookhubImg.src}
        />
        <FeaturedProject
          name={t("HOH")}
          description={t("HOHDes")}
          tags={["React", "Google Maps API", "Dashboard", "Formik", "Firebase"]}
          repo="https://github.com/juniorbatistaRD/hoh-dashboard"
          link="https://ywamsanpedro.org/hohtracker"
          image={hohImg.src}
        />
        <OtherWork />
      </div>
    </section>
  );
}
