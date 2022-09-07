import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

import styles from "./Navbar.module.css";
import Temple from "../assets/temple.svg";

export default function Navbar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <div className={styles.navbar}>
      <ul>
        <li className={styles.logo}>
          <Link to="/">
            <img src={Temple} alt="dojo icon" />
            <span>The Dojo</span>
          </Link>
        </li>
        {!user && (
          <li>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </li>
        )}
        {user && (
          <li>
            {!isPending && (
              <button className="btn" onClick={logout}>
                Logout
              </button>
            )}
            {isPending && (
              <button disabled className="btn" onClick={logout}>
                Logging out...
              </button>
            )}
          </li>
        )}
      </ul>
    </div>
  );
}
