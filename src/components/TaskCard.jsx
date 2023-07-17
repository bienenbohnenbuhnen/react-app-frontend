import { useParams, useNavigate } from "react-router-dom";
import AddDeleteTask from "./AddDeleteTask";
import axios from "axios";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
const API_URL = "http://localhost:5005";

// We are deconstructing the props object directly in the parentheses of the function
function TaskCard({ title, description, _id, refreshProject }) {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const handleDelete = (e) => {
    e.preventDefault();

    axios
      .delete(`${API_URL}/api/tasks/${_id}`)
      .then(() => {
        refreshProject();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="TaskCard card">
      <h3>{title}</h3>
      <h4>Description:</h4>
      <p>{description}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TaskCard;
