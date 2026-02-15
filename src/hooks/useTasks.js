import { useCallback, useEffect, useState } from "react";
import { createTasks, deleteTasks, getTasks } from "../api/taskService";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTask = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch tasks");
    } finally {
      setLoading(false);
    }
  }, []);

  const addTask = useCallback(async (title) => {
    try {
      setLoading(true);
      const data = await createTasks({
        title,
        completed: false,
      });
      setTasks((prev) => [...prev, data]);
    } catch (err) {
      console.error(err);
      setError("Failed to create tasks");
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteTask = useCallback(async (id) => {
    try {
      setLoading(true);
      await deleteTasks();
      setTasks((prev) => prev.filter((task) => task.id != id));
    } catch (err) {
      console.error(err);
      setError("Failed to delete tasks");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTask();
  }, [fetchTask]);

  return {
    tasks,
    loading,
    error,
    addTask,
    deleteTask,
  };
};
