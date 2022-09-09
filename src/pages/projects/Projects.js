import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import ProjectComments from "./ProjectComments";

import styles from "./Projects.module.css";
import ProjectSummary from "./ProjectSummary";

export default function Projects() {
  const { id } = useParams();
  const { error, document } = useDocument("projects", id);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!document) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className={styles["project-details"]}>
      <ProjectSummary project={document} />
      <ProjectComments project={document} />
    </div>
  );
}
