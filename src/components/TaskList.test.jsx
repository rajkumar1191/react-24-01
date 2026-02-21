import { render, screen } from "@testing-library/react";

import TaskList from "./TaskList";
import { TaskContext } from "../context/TaskContext";
import { describe, expect, test, vi } from "vitest";

vi.mock("./Tasks", () => ({
  default: ({ task }) => <li>{task.title}</li>,
}));

describe("TaskList Component", () => {
  test("renders task list with tasks", () => {
    const mockTasks = [
      { id: 1, title: "Task 1", completed: false },
      { id: 2, title: "Task 2", completed: true },
    ];
    render(
      <TaskContext.Provider
        value={{ tasks: mockTasks, toggleTask: () => {}, deleteTask: () => {} }}
      >
        <TaskList title="My Tasks" />
      </TaskContext.Provider>,
    );
    expect(screen.getByText("My Tasks")).toBeInTheDocument();
    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
  });

  test("renders 'No task found' when task list is empty", () => {
    render(
      <TaskContext.Provider
        value={{ tasks: [], toggleTask: () => {}, deleteTask: () => {} }}
      >
        <TaskList title="My Tasks" />
      </TaskContext.Provider>,
    );
    expect(screen.getByText("No task found")).toBeInTheDocument();
  });
});
