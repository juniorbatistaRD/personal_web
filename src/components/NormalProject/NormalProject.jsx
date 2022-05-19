import styles from "./NormalProject.module.css";
import GithubIcon from "@assets/icons/github.svg";
import LinkIcon from "@assets/icons/link.svg";
import FolderIcon from "@assets/icons/folder.svg";
import { motion } from "framer-motion";

export default function NormalProject({ name, description, tags, repo, link }) {
  //needs work
  // const handleClick = (e) => {
  //   e.stopPropagation();
  //   if (repo || link) {
  //     window.open(repo ? repo : link, "_blank").focus();
  //   }
  // };

  return (
    <motion.li
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        transition: { duration: 0.2 },
      }}
      transition={{ duration: 1 }}
      // onClick={handleClick}
      className={styles.container}
    >
      <div className={styles.icons}>
        <FolderIcon className={styles.folder} />
        <div className={styles.links}>
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              aria-label="Github Icon"
            >
              <GithubIcon />
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              aria-label="Link Icon"
            >
              <LinkIcon />
            </a>
          )}
        </div>
      </div>
      <p className={styles.workname}>{name}</p>
      <p className={styles.description}>{description}</p>
      <ul className={styles.tags}>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </motion.li>
  );
}
