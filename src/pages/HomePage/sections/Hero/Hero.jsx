import Button from "@components/Button/Button";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.container}>
      <h1 className={styles.pre}>Hi, my name is</h1>
      <h2 className={styles.name}>Junior Batista</h2>
      <h3 className={styles.slogan}>I build things for the web.</h3>
      <p className={styles.text}>
        I'm a frontend developer that enjoys the process of writing
        high-standard code. I find the challenge of problem-solving fun and
        rewarding. It motivates me to see a project come together and perform
        its purpose perfectly.
      </p>
      <Button className={styles.action}>Get in touch</Button>
    </section>
  );
}
