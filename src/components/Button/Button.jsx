import styles from "./Button.module.css";

export default function Button({ className, children }) {
  const classnames = [styles.button, className].join(" ");

  return <button className={classnames}>{children}</button>;
}
