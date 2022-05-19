import Nav from "@components/Nav/Nav";
import Hero from "./sections/Hero/Hero";
import styles from "./HomePage.module.css";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import Work from "./sections/Work/Work";
import Contact from "./sections/Contact/Contact";
import Footer from "@components/Footer/Footer";

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
        <Footer />
      </main>
    </div>
  );
}
