import React from "react";
import { TaskContext } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

const Tasks = ({ task, deleteTask, toggleTask }) => {
  // console.log(tasks);

  const navigate = useNavigate();

  const handleDetails = (id) => {
    navigate(`/task/${id}`);
  };

  return (
    <div>
      Task {task.name} {task.completed ? "(Completed)" : "(Pending)"}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button onClick={() => toggleTask(task.id)}>Mark as Completed</button>
      <button onClick={() => handleDetails(task.id)}>View Details</button>
    </div>
  );
};

export default React.memo(Tasks);
