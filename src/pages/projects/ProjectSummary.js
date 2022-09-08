import Avatar from "../../components/Avatar";

import styles from "./Projects.module.css";

export default function ProjectSummary({ project }) {
  return (
    <div>
      <div className={styles["project-summary"]}>
        <h2 className="page-title">{project.name}</h2>
        <p>Project due by {project.dueDate.toDate().toDateString()}</p>
        <p className={styles.details}>{project.details}</p>
        <h4>Project is assigned to:</h4>
        <div className={styles["assigned-users"]}>
          {project.assignedUsersList.map((user) => (
            <div key={user.id}>
              <Avatar src={user.photoURL} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
