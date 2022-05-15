import Image from "next/image";
import styles from "./Nav.module.css";
import icon from "@assets/icons/logo.svg";
import Button from "@components/Button/Button";

export default function Nav() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image src={icon} width={60} height={60} />
        </div>
        <ul className={styles.menu}>
          <li>
            <span className={styles.number}>01.</span>
            <a href="#about">About</a>
          </li>
          <li>
            <span className={styles.number}>02.</span>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <span className={styles.number}>03.</span>
            <a href="#work">Work</a>
          </li>
          <li>
            <span className={styles.number}>04.</span>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <Button>Resume</Button>
      </nav>
    </header>
  );
}
