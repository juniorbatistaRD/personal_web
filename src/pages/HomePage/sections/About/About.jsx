import SectionTitle from "@components/SectionTitle/SectionTitle";
import Image from "next/image";
import styles from "./About.module.css";
import image from "@assets/images/profile.jpg";

export default function About() {
  return (
    <section className={styles.container} id="about">
      <SectionTitle number="01." title="About Me" />
      <div className={styles.inner}>
        <div className={styles.text}>
          <p>
            Hello! My name is Junior and I enjoy building cool stuff for web.
            I've been interested on web development since I was fourteen when
            using HTML &amp; CSS felt like magic!
          </p>

          <p>
            To become the developer I wanted to be I enrolled in Institute Of
            Technology Of the Americas (ITLA), one of the most respected tech
            university in the Dominican Republic, for the dregree of Software
            Development.
          </p>

          <p>
            After that I had the chance to work with multiple companies while
            being a freelancer.
          </p>

          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className={styles.list}>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>WordPress</li>
          </ul>
        </div>
        <div>
          <div>
            <Image
              src={image}
              width={350}
              height={350}
              className={styles.profile}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
