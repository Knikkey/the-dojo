import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import Temple from "../assets/temple.svg";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul>
        <li className={styles.logo}>
          <Link to="/">
            <img src={Temple} alt="dojo icon" />
            <span>The Dojo</span>
          </Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <button className="btn">Logout</button>
        </li>
      </ul>
    </div>
  );
}
