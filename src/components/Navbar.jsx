import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/add">Add New Task</Link>
      <Link to="/tasks">Task List</Link>
    </nav>
  );
};

export default NavBar;
