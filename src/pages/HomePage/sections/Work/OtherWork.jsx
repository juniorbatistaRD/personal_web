import NormalProject from "@components/NormalProject/NormalProject";
import styles from "./OtherWork.module.css";
import { useTranslations } from "next-intl";

export default function OtherWork() {
  const t = useTranslations("OtherWork");

  const works = [
    {
      name: "Baseball-PHP-Simulator",
      repo: "https://github.com/juniorbatistadev/Baseball-PHP-Simulator",
      description: t("BaseballDes"),
      tags: ["PHP", "Simulation", "Math"],
    },
    {
      name: "Quiz-App",
      repo: "https://github.com/juniorbatistadev/simple-quiz",
      description: t("QuizAppDes"),
      tags: ["Javascript", "Quiz", "Game"],
    },
    {
      name: "Node.js Api",
      repo: "https://github.com/juniorbatistadev/api-node",
      description: t("NodeApiDes"),
      tags: ["Node.js", "Javascript", "Express", "Mongoose"],
    },
    {
      name: t("PersonalWeb"),
      repo: "https://github.com/juniorbatistadev/personal_web",
      description: t("PersonalWebDes"),
      tags: ["Next.js", "Static Website", "Vercel"],
    },
    {
      name: t("WeddingRegistry"),
      repo: "https://github.com/juniorbatistadev/wedding-web",

      description: t("WeddingRegistryDes"),
      tags: ["Next.js", "Google Sheets API", "Javascript"],
    },
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.header}>{t("title")}</h2>
      <ul className={styles.list}>
        {works.map((work, index) => (
          <NormalProject
            key={index}
            name={work.name}
            description={work.description}
            repo={work.repo}
            link={work.link}
            tags={work.tags}
          />
        ))}
      </ul>
    </section>
  );
}
