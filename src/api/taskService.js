import axiosInstance from "./apiInstance";

export const getTasks = async () => {
  const response = await axiosInstance.get("/todos?_limit=5");
  console.log(response)
  return response.data;
};

export const createTasks = async (task) => {
  const response = await axiosInstance.post("/todos", task);
  return response.data;
};

export const deleteTasks = async (id) => {
  const response = await axiosInstance.delete(`/todos/${id}`);
  return response.data;
};
