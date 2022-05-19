import styles from "./Socials.module.css";
import GithubIcon from "@assets/icons/github.svg";
import LinkedinIcon from "@assets/icons/linkedin.svg";
import TwitterIcon from "@assets/icons/twitter.svg";
import InstagramIcon from "@assets/icons/instagram.svg";

export default function Socials() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li>
          <a
            href="https://github.com/juniorbatistadev"
            target="_blank"
            rel="noreferrer"
            aria-label="Github Icon"
          >
            <GithubIcon />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/juniorbatistadev/"
            target="_blank"
            rel="noreferrer"
            aria-label="Linkedin"
          >
            <LinkedinIcon />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/juniorbatistard"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/juniorthedev"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <TwitterIcon />
          </a>
        </li>
      </ul>
    </div>
  );
}
