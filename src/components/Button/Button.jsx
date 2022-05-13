import styles from "./Button.module.css";

export default function Button({ text, children }) {
  return <button className={styles.button}>{children}</button>;
}
