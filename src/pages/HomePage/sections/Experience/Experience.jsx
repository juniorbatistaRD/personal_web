import Job from "@components/Job/Job";
import SectionTitle from "@components/SectionTitle/SectionTitle";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section className={styles.container} id="experience">
      <SectionTitle number="02." title="Where I've Worked" />
      <div className={styles.experiences}>
        <div className={styles.line}></div>
        <div>
          <Job
            position="Frontend Web Developer"
            place={{ name: "BRINF LLC", website: "https://spoti.com" }}
            dates="Jan 2021 - Apr 2021"
            description="Worked with a team of three designers to build a marketing website and commerce platform for blistabloc, an ambitious startup originating from Northeastern
          Helped solidify a brand direction for blistabloc that spans both packaging and web
          Interfaced with clients on a weekly basis, providing technological expertise"
          />
          <Job
            position="Back End Development Teacher"
            place={{ name: "ITLA", website: "https://spoti.com" }}
            dates="Aug 2018 - Dec 2018"
            description="Engineered and maintained major features of Starry's customer-facing web app using ES6, Handlebars, Backbone, Marionette and CSS
            Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with Starry Station
            Interfaced with user Job designers and other developers to ensure thoughtful and co"
          />
          <Job
            position="Webmaster"
            place={{ name: "YWAM San Pedro", website: "https://spoti.com" }}
            dates="2017"
            description="Worked with a team of three designers to build a marketing website and commerce platform for blistabloc, an ambitious startup originating from Northeastern
          Helped solidify a brand direction for blistabloc that spans both packaging and web
          Interfaced with clients on a weekly basis, providing technological expertise"
          />
        </div>
      </div>
    </section>
  );
}
