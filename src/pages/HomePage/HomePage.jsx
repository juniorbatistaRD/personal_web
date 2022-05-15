import Nav from "@components/Nav/nav";
import Hero from "./sections/Hero/Hero";
import styles from "./HomePage.module.css";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import Work from "./sections/Work/Work";
import Contact from "./sections/Contact/Contact";

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
      </main>
    </div>
  );
}
