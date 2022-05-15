import styles from "./SectionTitle.module.css";

export default function SectionTitle({ title, number }) {
  return (
    <div className={styles.container}>
      <span className={styles.number}>{number}</span>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}
