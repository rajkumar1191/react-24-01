// import { useEffect, useId, useMemo, useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/Navbar";
import Login from "./components/Login";
import TaskDetail from "./components/TaskDetail";
import ProtectedRoute from "./components/ProtectedRoute";
import TaskViaAPI from "./components/TasksViaAPI";
import TasksViaRedux from "./components/TasksViaRedux";

const App = () => {
  // const title = "Your Tasks";
  // let taskList = [
  //   {
  //     id: 1,
  //     name: "Complete the project documentation",
  //     completed: false,
  //   },
  //   {
  //     id: 2,
  //     name: "Review pull requests",
  //     completed: false,
  //   },
  //   {
  //     id: 3,
  //     name: "Prepare for the team meeting",
  //     completed: false,
  //   },
  // ];

  // const [tasks, setTasks] = useState(taskList);
  // const id = useId();

  // console.log("Generated ID:", id);
  // useEffect(() => {
  //   // fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
  //   //   .then((response) => response.json())
  //   //   .then((data) => {
  //   //     const fetchedTasks = data.map((item) => ({
  //   //       id: item.id,
  //   //       name: item.title,
  //   //       completed: item.completed,
  //   //     }));
  //   //     setTasks(fetchedTasks);
  //   //   })
  //   //   .catch((error) => console.error("Error fetching tasks:", error));
  //   console.log("Current tasks:", tasks);
  // }, [tasks]);

  // const handleAddTask = useCallback((task) => {
  //   console.log("Adding task:", task);

  //   setTasks((prevTasks) => [...prevTasks, task]);
  //   console.log("Updated task list:", taskList);
  // }, []);

  // const deleteTask = (index) => {
  //   setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  // };

  // const markTask = useCallback((index) => {
  //   setTasks((prevTasks) =>
  //     prevTasks.map((task, i) =>
  //       i === index ? { ...task, completed: true } : task,
  //     ),
  //   );
  // }, []);

  // const completedCount = useMemo(() => {
  //   console.log("Calculating completed count");
  //   return tasks.filter((t) => t.completed).length;
  // }, [tasks]);

  // const handleCompletedCount = () => {
  //   console.log("Calculating completed count");
  //   setTasks((prevTasks) => [...prevTasks]);
  // };

  return (
    // <div>
    //   <h1>Task Manager</h1>
    //   <p>Manage your tasks efficiently!</p>
    //   <AddTask addTask={handleAddTask} />
    //   <button onClick={() => handleCompletedCount()}>Click</button>
    //   <h3>Total Task: {tasks.length}</h3>
    //   <h3>Completed Task: {completedCount}</h3>
    //   <TaskList
    //     title={title}
    //     tasks={tasks}
    //     deleteTask={deleteTask}
    //     markTask={markTask}
    //   />
    // </div>
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/tasksbyapi" element={<TaskViaAPI />} />
        <Route path="/tasksbyredux" element={<TasksViaRedux />} />
        <Route path="/task/:id" element={<TaskDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;
