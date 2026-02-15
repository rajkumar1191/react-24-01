import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  toggleTask,
  deleteTask,
  fetchTasks,
} from "../store/taskSlice";

const TasksViaRedux = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.tasks);

  const [input, setInput] = useState("");

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    dispatch(addTask(input));
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
        {list.map((task) => (
          <li key={task.id}>
            {task.title} {task.completed ? "Completed" : "Pending"}
            <button onClick={() => dispatch(deleteTask(task.id))}>
              Delete
            </button>
            <button onClick={() => dispatch(toggleTask(task.id))}>
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksViaRedux;
