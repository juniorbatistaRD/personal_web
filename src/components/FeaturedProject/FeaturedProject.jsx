import styles from "./FeaturedProject.module.css";
import GithubIcon from "@assets/icons/github.svg";
import LinkIcon from "@assets/icons/link.svg";

export default function FeaturedProject({
  name,
  image,
  description,
  tags,
  repo,
  link,
  side,
}) {
  return (
    <div className={styles.container}>
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
    </div>
  );
}
