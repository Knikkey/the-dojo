import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import styles from "./Signup.module.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName, thumbnail);
  };

  const handleFileChange = (e) => {
    setThumbnail(null);

    let selected = e.target.files[0];
    console.log(selected);

    if (!selected) {
      setThumbnailError("Please select a file");
      return;
    }
    if (!selected.type.includes("image")) {
      setThumbnailError("File must be an image");
      return;
    }
    if (selected.size > 100000) {
      setThumbnailError("Image file size must be less than 100kb");
      return;
    }

    setThumbnailError(null);
    setThumbnail(selected);
    console.log("Thumbnail updated!");
  };

  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit} className={styles["auth-form"]}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
        <label htmlFor="displayName">Display Name:</label>
        <input
          type="text"
          id="displayName"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        ></input>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
        <label htmlFor="thumbnail"></label>
        <input
          required
          type="file"
          id="thumbnail"
          onChange={handleFileChange}
        ></input>
        {thumbnailError && <div className="error">{thumbnailError}</div>}
        {!isPending && (
          <button type="submit" className="btn">
            Sign up
          </button>
        )}
        {isPending && (
          <button disabled type="submit" className="btn">
            Loading...
          </button>
        )}
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}
