import Nav from "@components/Nav/Nav";
import styles from "./NoFound.module.css";
import NoFoundIcon from "@assets/icons/nofound.svg";
import Footer from "@components/Footer/Footer";
import { useTranslations } from "next-intl";
import Button from "@components/Button/Button";

export default function NoFound() {
  const t = useTranslations("NoFound");
  const tc = useTranslations("common");

  return (
    <div>
      <Nav />
      <main className={styles.content}>
        <section className={styles.section}>
          <NoFoundIcon className={styles.icon} />
          <h1 className={styles.header}>{t("header")}</h1>
          <p className={styles.text}>{t("text")}</p>
          <Button link={"/"} className={styles.button}>
            {tc("goHome")}
          </Button>
        </section>
        <Footer className={styles.footer} />
      </main>
    </div>
  );
}
