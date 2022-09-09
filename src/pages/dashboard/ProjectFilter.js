import styles from "./Dashboard.module.css";

const filterList = [
  "all",
  "mine",
  "development",
  "design",
  "marketing",
  "sales",
];

export default function ProjectFilter({ currentFilter, changeFilter }) {
  const handleClick = (newFilter) => {
    console.log(newFilter);
    changeFilter(newFilter);
  };

  return (
    <div className={styles["project-filter"]}>
      <nav>
        {filterList.map((f) => (
          <button
            key={f}
            onClick={() => handleClick(f)}
            className={currentFilter === f ? styles.active : ""}
          >
            {f}
          </button>
        ))}
      </nav>
    </div>
  );
}
