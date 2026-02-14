import React, {
  useReducer,
  useMemo,
  useCallback,
} from "react";
import { TaskContext } from "./TaskContext";

const initialState = {
  tasks: [],
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      console.log("add task", action.payload)
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: true } : task,
        ),
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const addTask = useCallback((taskName) => {
    dispatch({
      type: "ADD_TASK",
      payload: {
        id: Date.now(),
        name: taskName,
        completed: false,
      },
    });
  }, []);

  const deleteTask = useCallback((id) => {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  }, []);

  const toggleTask = useCallback((id) => {
    dispatch({
      type: "TOGGLE_TASK",
      payload: id,
    });
  }, []);

  const value = useMemo(() => {
    return {
      tasks: state.tasks,
      addTask,
      toggleTask,
      deleteTask,
    };
  }, [state.tasks, addTask, deleteTask, toggleTask]);

  return (
    <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
  )
};
