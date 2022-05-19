import styles from "./FeaturedProject.module.css";
import GithubIcon from "@assets/icons/github.svg";
import LinkIcon from "@assets/icons/link.svg";
import { motion } from "framer-motion";
import Image from "next/image";

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
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
        <div className={styles.externals}>
          <a href={repo} target="_blank" rel="noreferrer" aria-label="Github">
            <GithubIcon alt="Github" />
          </a>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            aria-label="Link Icon"
          >
            <LinkIcon />
          </a>
        </div>
      </div>
      <div className={styles.image}>
        <a href={link ? link : repo} target="_blank" rel="noreferrer">
          <Image src={image} alt="Featured project" width={350} height={200} />
        </a>
      </div>
    </motion.div>
  );
}
