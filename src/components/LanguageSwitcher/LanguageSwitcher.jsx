import { useRouter } from "next/router";
import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
  const { locale, pathname, asPath, query, push } = useRouter();

  const handleChange = (nextLocale) => {
    push({ pathname, query }, asPath, { locale: nextLocale });
  };

  console.log(locale);
  return (
    <div className={styles.container}>
      <span
        onClick={() => handleChange("en")}
        className={locale === "en" ? styles.activeLanguage : styles.language}
      >
        English
      </span>
      <span
        onClick={() => handleChange("es")}
        className={locale === "es" ? styles.activeLanguage : styles.language}
      >
        Español
      </span>
    </div>
  );
}
