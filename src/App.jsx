import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

const App = () => {
  const title = "Your Tasks";
  let taskList = [
    {
      id: 1,
      name: "Complete the project documentation",
      completed: false,
    },
    {
      id: 2,
      name: "Review pull requests",
      completed: false,
    },
    {
      id: 3,
      name: "Prepare for the team meeting",
      completed: false,
    },
  ];

  const [tasks, setTasks] = useState(taskList);

  const handleAddTask = (task) => {
    console.log("Adding task:", task);

    setTasks((prevTasks) => [...prevTasks, task]);
    console.log("Updated task list:", taskList);
  };

  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const markTask = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: true } : task,
      ),
    );
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <p>Manage your tasks efficiently!</p>
      <AddTask addTask={handleAddTask} />
      <TaskList
        title={title}
        tasks={tasks}
        deleteTask={deleteTask}
        markTask={markTask}
      />
    </div>
  );
};

export default App;
