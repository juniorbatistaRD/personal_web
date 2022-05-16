import styles from "./FeaturedProject.module.css";
import GithubIcon from "@assets/icons/github.svg";
import LinkIcon from "@assets/icons/link.svg";
import { motion } from "framer-motion";

export default function FeaturedProject({
  name,
  image,
  description,
  tags,
  repo,
  link,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={styles.container}
    >
      <div className={styles.content}>
        <p className={styles.topHeader}>Featured Project</p>
        <p className={styles.name}>{name}</p>
        <p className={styles.description}>{description}</p>
        <ul className={styles.tags}>
          {tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
        <div className={styles.externals}>
          <a href={repo} target="_blank">
            <GithubIcon />
          </a>
          <a href={link} target="_blank">
            <LinkIcon />
          </a>
        </div>
      </div>
      <div className={styles.image}>
        <a href={link ? link : repo} target="_blank">
          <img src={image} />
        </a>
      </div>
    </motion.div>
  );
}
