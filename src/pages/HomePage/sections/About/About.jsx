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
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML
            &amp; CSS!
          </p>

          <p>
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </p>

          <p>
            I also recently launched a course that covers everything you need to
            build a web app with the Spotify API using Node & React.
          </p>

          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className={styles.list}>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Eleventy</li>
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
