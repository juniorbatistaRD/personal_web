import styles from "./Job.module.css";

export default function Job({ position, place, dates, list, description }) {
  return (
    <div className={styles.container}>
      <p>
        <span className={styles.position}> {position} </span>
        <span className={styles.place}>@ {place.name} </span>
      </p>
      <p className={styles.dates}>{dates}</p>
      <p className={styles.list}>{description}</p>
      {/* <ul className={styles.list}>
        {list.map((text) => (
          <li>{text}</li>
        ))}
      </ul> */}
    </div>
  );
}
