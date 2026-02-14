import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Tasks from "./Tasks";

const TaskList = ({ title }) => {
  // console.log(tasks);
  const { tasks, toggleTask, deleteTask } = useContext(TaskContext);

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
    </div>
  );
};

export default React.memo(TaskList);
