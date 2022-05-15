import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
  return (
    <div className={styles.container}>
      <span className={styles.activeLanguage}>English</span>
      <span className={styles.language}>Español</span>
    </div>
  );
}
