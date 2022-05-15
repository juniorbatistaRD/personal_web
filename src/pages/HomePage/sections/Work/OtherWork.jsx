import styles from "./OtherWork.module.css";
import GithubIcon from "@assets/icons/github.svg";
import LinkIcon from "@assets/icons/link.svg";

export default function OtherWork() {
  const works = [
    {
      name: "Baseball-PHP-Simulator",
      repo: "https://github.com/juniorbatistaRD/Baseball-PHP-Simulator",
      description: "A baseball simulation engine built using PHP.",
      tags: ["PHP", "Simulation", "Math"],
    },
    {
      name: "Quiz-App",
      repo: "https://github.com/juniorbatistaRD/simple-quiz",
      description:
        "A quiz app that can receive an array of questions and validate the answers.",
      tags: ["Javascript", "Quiz", "Game"],
    },
    {
      name: "Node.js Api",
      repo: "https://github.com/juniorbatistaRD/api-node",
      description:
        "A Node.js api for a social app with endpoints for posting, adding friends, commenting, chatting and more.",
      tags: ["Node.js", "Javascript", "Express", "Mongoose"],
    },
    {
      name: "Personal Web Site",
      link: "#asd",
      repo: "https://github.com/juniorbatistaRD/personal_web",

      description: "The repo for this website.",
      tags: ["Next.js", "Static Website", "Vercel"],
    },
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.header}>Other Projects</h2>
      <ul className={styles.list}>
        {works.map((work) => (
          <li>
            <div className={styles.icons}>
              <svg
                version="1.1"
                viewBox="0 0 512 512"
                className={styles.folder}
              >
                <g>
                  <path d="m490.6,158.7h-62.6v-38.7c0-5.8-4.7-10.4-10.4-10.4h-223.2l-26.9-56.1c-1.7-3.6-5.4-5.9-9.4-5.9h-136.7c-5.8,0-10.4,4.7-10.4,10.4v396.2c0.3,8.7 8.3,10.7 10.4,10.4h396.2c4.8,0 8.9-3.2 10.1-7.8l73-285c1.5-3.7-0.9-12.9-10.1-13.1zm-458.7-90.4h119.6l26.9,56.1c1.7,3.6 5.4,5.9 9.4,5.9h219.4v28.3h-312.8c-4.8,0-8.9,3.2-10.1,7.8l-52.4,204.9v-303zm377.6,375.4h-374.6l67.6-264.1h374.6l-67.6,264.1z" />
                </g>
              </svg>
              <div className={styles.links}>
                {work.repo && (
                  <a href={work.repo} target="_blank">
                    <GithubIcon />
                  </a>
                )}
                {work.link && (
                  <a href={work.link} target="_blank">
                    <LinkIcon />
                  </a>
                )}
              </div>
            </div>
            <p className={styles.workname}>{work.name}</p>
            <p className={styles.description}>{work.description}</p>
            <ul className={styles.tags}>
              {work.tags.map((tag) => (
                <li>{tag}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
