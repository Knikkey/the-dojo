import userEvent from "@testing-library/user-event";
import { useCollection } from "../hooks/useCollection";
import Avatar from "./Avatar";

import styles from "./OnlineUsers.module.css";

export default function OnlineUsers() {
  const { error, documents } = useCollection("users");

  return (
    <div className={styles["user-list"]}>
      <h2>All Users</h2>
      {error && <div className="error">{error}</div>}
      {documents &&
        documents.map((doc) => {
          return (
            <div key={doc.id} className={styles["user-list-item"]}>
              {doc.online && <span className={styles["online-user"]}></span>}
              <span>{doc.displayName} </span>
              <Avatar src={doc.photoURL} />
            </div>
          );
        })}
    </div>
  );
}
