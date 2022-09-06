import DashboardIcon from "../assets/dashboard_icon.svg";
import AddIcon from "../assets/add_icon.svg";

import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles["sidebar-content"]}>
        <div className={styles.user}>
          <p>Hey, User!</p>
        </div>
        <nav className={styles.links}>
          <ul>
            <li>
              <NavLink to="/">
                <img src={DashboardIcon} alt="dashboard icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img src={AddIcon} alt="add project icon" />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
