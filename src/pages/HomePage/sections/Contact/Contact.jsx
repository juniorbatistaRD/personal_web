import styles from "./Contact.module.css";
import Button from "@components/Button/Button";

export default function Contact() {
  return (
    <section className={styles.container} id="contact">
      <h2 className={styles.pre}>04. What Now?</h2>
      <h2 className={styles.title}>Get In Touch</h2>
      <p className={styles.text}>
        I’m always looking for new opportunities so my inbox is always open.
        Even if you just have a question or just want to say hi, go ahead. I’ll
        make sure to get back to you!
      </p>
      <Button className={styles.button}>
        Email me at juniorabc77@gmail.com
      </Button>
    </section>
  );
}
