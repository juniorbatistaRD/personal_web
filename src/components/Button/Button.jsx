import styles from "./Button.module.css";

export default function Button({ className, children, link, ...props }) {
  const classnames = [styles.button, className].join(" ");

  return (
    <a className={classnames} href={link} {...props}>
      {children}
    </a>
  );
}
