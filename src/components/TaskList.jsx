import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Tasks from "./Tasks";

const TaskList = ({ title }) => {
  const { tasks, toggleTask, deleteTask } = useContext(TaskContext);
  console.log("tasks",tasks)
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {tasks.map((task, index) => (
          <Tasks
            key={index}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
          />
        ))}
      </ul>
      {tasks.length == 0 && <h3>No task found</h3>}
    </div>
  );
};

export default React.memo(TaskList);
