import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/add">Add New Task</Link>
      <Link to="/tasks">Task List</Link>
      <Link to="/tasksbyapi">Task By API</Link>
      <Link to="/tasksbyredux">Task By Redux</Link>
    </nav>
  );
};

export default NavBar;
