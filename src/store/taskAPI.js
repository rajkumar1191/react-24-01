import axiosInstance from "../api/apiInstance";

export const fetchTasksAPI = async () => {
  const response = await axiosInstance.get("/todos?_limit=5");
  console.log(response)
  return response.data;
};