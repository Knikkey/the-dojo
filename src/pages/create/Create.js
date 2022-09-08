import Select from "react-select";
import { useFirestore } from "../../hooks/useFirestore";
import { useEffect, useState } from "react";
import { useCollection } from "../../hooks/useCollection";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useHistory } from "react-router-dom";

import styles from "./Create.module.css";

const categories = [
  { value: "development", label: "Development" },
  { value: "design", label: "Design" },
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
];

export default function Create() {
  const { documents } = useCollection("users");
  const { user } = useAuthContext();
  const { addDocument, response } = useFirestore("projects");
  const history = useHistory();

  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [formError, setFormError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(null);

    if (!category) {
      setFormError("Please select a project category");
      return;
    }

    if (assignedUsers.length < 1) {
      setFormError("Please assign the project to at least 1 user.");
      return;
    }

    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };

    const assignedUsersList = assignedUsers.map((user) => {
      return {
        displayName: user.value.displayName,
        photoURL: user.value.photoURL,
        id: user.value.id,
      };
    });

    const project = {
      name,
      details,
      category,
      dueDate: timestamp.fromDate(new Date(dueDate)),
      assignedUsersList,
      comments: [],
      createdBy,
    };

    addDocument(project);
  };

  useEffect(() => {
    if (response.success) {
      history.push("/");
    }
  }, [response.success, history]);

  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(options);
    }
  }, [documents]);

  return (
    <div className={styles["create-form"]}>
      <h2 className="page-title">Create a new project</h2>
      <form onSubmit={handleSubmit}>
        {/* name */}
        <label htmlFor="projectName">Project Name:</label>
        <input
          required
          id="projectName"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
        {/* details */}
        <label htmlFor="projectName">Project Details:</label>
        <textarea
          required
          id="projectDetails"
          type="text"
          onChange={(e) => setDetails(e.target.value)}
          value={details}
        ></textarea>
        {/* due date */}
        <label htmlFor="dueDate">Set due date:</label>
        <input
          required
          id="dueDate"
          type="date"
          onChange={(e) => setDueDate(e.target.value)}
          value={dueDate}
        ></input>
        {/* category */}
        <label htmlFor="category">Project Category:</label>
        <Select
          id="category"
          options={categories}
          onChange={(option) => setCategory(option.value)}
        />
        {/* assign */}
        <label htmlFor="assign">Assign to:</label>
        <Select
          id="assign"
          options={users}
          onChange={(option) => setAssignedUsers(option)}
          isMulti
        />
        <button className="btn">Add Project</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
}
