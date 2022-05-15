import styles from "./OtherWork.module.css";

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
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z" />
                    </svg>
                  </a>
                )}
                {work.link && (
                  <a href={work.link} target="_blank">
                    <svg viewBox="0 0 24 24">
                      <path d="M18,10.82a1,1,0,0,0-1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8A1,1,0,0,1,5,7h7.18a1,1,0,0,0,0-2H5A3,3,0,0,0,2,8V19a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3V11.82A1,1,0,0,0,18,10.82Zm3.92-8.2a1,1,0,0,0-.54-.54A1,1,0,0,0,21,2H15a1,1,0,0,0,0,2h3.59L8.29,14.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L20,5.41V9a1,1,0,0,0,2,0V3A1,1,0,0,0,21.92,2.62Z" />
                    </svg>
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
