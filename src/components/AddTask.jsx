import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");
  return (
    <div>
      <h2>Add a New Task</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          addTask(taskName);
          setTaskName("");
        }}
      >
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task Name"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
