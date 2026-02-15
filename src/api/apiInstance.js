import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  console.log("request sent", config.url);
  return config;
});

// axiosInstance.interceptors.response.use((response) => {
//   (response,
//     (error) => {
//       console.log(error.response?.data || error.message);
//       return Promise.reject(error);
//     });
// });

export default axiosInstance;
