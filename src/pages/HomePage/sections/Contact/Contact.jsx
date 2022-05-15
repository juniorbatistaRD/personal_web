import SectionTitle from "@components/SectionTitle/SectionTitle";
import Image from "next/image";
import styles from "./Contact.module.css";
import image from "@assets/images/profile.jpg";
import Button from "@components/Button/Button";

export default function Contact() {
  return (
    <section className={styles.container} id="Contact">
      <h2 className={styles.pre}>04. What Now?</h2>
      <h2 className={styles.title}>Get In Touch</h2>
      <p className={styles.text}>
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <Button className={styles.button}>Say Hi</Button>
    </section>
  );
}
