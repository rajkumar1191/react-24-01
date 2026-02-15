import React, { useState } from "react";
import { useTasks } from "../hooks/useTasks";

const TaskViaAPI = () => {
  const { tasks, loading, error, addTask, deleteTask } = useTasks();

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    addTask(input);
    setInput("");
  };

  return (
    <div>
      <h2>Add a New Task</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Task Name"
        />
        <button type="submit">Add Task</button>
      </form>
      {loading && <p>Loading....</p>}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}{" "}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskViaAPI;
