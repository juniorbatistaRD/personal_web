import Job from "@components/Job/Job";
import SectionTitle from "@components/SectionTitle/SectionTitle";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section className={styles.container} id="experience">
      <div></div>
      <SectionTitle number="02." title="Where I've Worked" />
      <div className={styles.experiences}>
        <div className={styles.line}></div>
        <div>
          <Job
            position="Frontend Web Developer"
            place={{ name: "BRINF LLC", website: "https://brinf.net/" }}
            dates="Jan 2021 - Apr 2021"
            description="Worked with a team of a other developer and designer together with a project manager to create modern web apps for clients. Developed the core features of the app, refined code, and improved processes, producing smoother operations and enhancing user engagement"
          />
          <Job
            position="Back End Development Teacher"
            place={{ name: "ITLA", website: "https://www.itla.edu.do/" }}
            dates="Aug 2018 - Dec 2018"
            description="Taught two web development classes ( Backend Development with PHP and SQL and Web Development with ASP.net). I planned the class schedule, homework and final project and graded the students."
          />
          <Job
            position="Webmaster"
            place={{
              name: "YWAM San Pedro",
              website: "https://ywamsanpedro.org",
            }}
            dates="2017"
            description="Monitored website functionality across leading web browsers and mobile applications, and ensured compatibility with major operating systems. Researched market trends to keep up with best practices in SEO, social media promotion, search analytics, and web hosting."
          />
        </div>
      </div>
    </section>
  );
}
