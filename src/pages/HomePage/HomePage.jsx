import Nav from "@components/Nav/nav";
import Hero from "./sections/Hero/Hero";
import styles from "./HomePage.module.css";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import Work from "./sections/Work/Work";
import Contact from "./sections/Contact/Contact";
import LanguageSwitcher from "@components/LanguageSwitcher/LanguageSwitcher";
import Socials from "@components/Socials/Socials";

export default function HomePage() {
  return (
    <div>
      <Nav />
      <main className={styles.content}>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />
        <Socials />
        <LanguageSwitcher />
        <footer className={styles.footer}>
          <p className={styles.credits}>Built by Junior Batista</p>
        </footer>
      </main>
    </div>
  );
}
