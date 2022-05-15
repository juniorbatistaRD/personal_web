import FeaturedProject from "@components/FeaturedProject/FeaturedProject";
import SectionTitle from "@components/SectionTitle/SectionTitle";
import styles from "./Work.module.css";
import genteUniImg from "@assets/images/genteuni.png";
import hohImg from "@assets/images/hoh.jpg";
import bookhubImg from "@assets/images/bookhub.png";
import OtherWork from "./OtherWork";

export default function Work() {
  return (
    <section className={styles.container} id="work">
      <SectionTitle number="03." title="Some Things I’ve Built" />
      <div className={styles.content}>
        <FeaturedProject
          name="GenteUni - Social Network"
          description="A fully developed social network targerted for college students in Latin America, the web app includes fully complete posting, following, commenting system. With multiple other features as schools ranking, social login and job posting."
          tags={["Next.js", "Parse Server", "Javascript", "Social Network"]}
          repo="https://github.com/juniorbatistaRD/genteitla"
          link="https://genteuni-next.vercel.app/"
          image={genteUniImg.src}
        />
        <FeaturedProject
          name="Bookhub - Mobile App"
          description="BookHub is a simple and minimalist app to keep track of the books you read. The app is is built as a PWA and then convert into a android app. The app is avalaible to download in Google Play."
          tags={["React", "PWA", "Mobile App", "Framer Motion", "Firebase"]}
          repo="https://github.com/juniorbatistaRD/bookhub"
          link="https://play.google.com/store/apps/details?id=com.bookhub.twa&hl=en"
          image={bookhubImg.src}
        />
        <FeaturedProject
          name="Homes of Hope Tracker"
          description="A web app to track houses built by an NGO called Homes of Hope, this help them to keep track of where houses are built so they can come back and follow up with the families. "
          tags={["React", "Google Maps API", "Dashboard", "Formik", "Firebase"]}
          repo="https://github.com/juniorbatistaRD/hoh-dashboard"
          link="https://ywamsanpedro.org/hohtracker"
          image={hohImg.src}
        />
        <OtherWork />
      </div>
    </section>
  );
}
