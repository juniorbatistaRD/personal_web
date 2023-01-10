import NormalProject from "@components/NormalProject/NormalProject";
import styles from "./OtherWork.module.css";
import { useTranslations } from "next-intl";

export default function OtherWork() {
  const t = useTranslations("OtherWork");

  const works = [
    {
      name: "Valorant Pro Scene Simulator",
      link: "https://valorantsimulator.com/",
      description:
        "This site allows you to select from a range of VCT teams and pit them against each other in a simulated match. Choose your favorite team and see how they stack up against the competition. With accurate team stats and realistic match simulation.",
      tags: ["React", "AI", "Typescript"],
    },
    {
      name: "Baseball-PHP-Simulator",
      repo: "https://github.com/juniorbatistadev/Baseball-PHP-Simulator",
      description: t("BaseballDes"),
      tags: ["PHP", "Simulation", "Math"],
    },
    {
      name: t("PersonalWeb"),
      repo: "https://github.com/juniorbatistadev/personal_web",
      description: t("PersonalWebDes"),
      tags: ["Next.js", "Static Website", "Vercel"],
    },

    {
      name: "Wedding Site Next.js",
      repo: "https://github.com/juniorbatistadev/mandjwedding",
      link: "https://www.madelineandjunior.info/",
      description:
        "Wedding site fully designed and developed by me. Includes livestream, RSVP, Google Maps and more.",
      tags: ["Next.js", "Calendar", "Typescript"],
    },
    {
      name: t("WeddingRegistry"),
      repo: "https://github.com/juniorbatistadev/wedding-web",

      description: t("WeddingRegistryDes"),
      tags: ["Next.js", "Google Sheets API", "Javascript"],
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
