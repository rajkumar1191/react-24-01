import React from "react";
import { TaskContext } from "../context/TaskContext";

const Tasks = ({ task, deleteTask, toggleTask }) => {
  // console.log(tasks);

  return (
    <div>
      Task {task.name} {task.completed ? "(Completed)" : "(Pending)"}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button onClick={() => toggleTask(task.id)}>Mark as Completed</button>
    </div>
  );
};

export default React.memo(Tasks);
