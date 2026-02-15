import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTasksAPI } from "./taskAPI";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  return await fetchTasksAPI();
});

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    addTask: (state, action) => {
      state.list.push({
        id: Date.now(),
        title: action.payload,
        completed: false,
      });
    },
    toggleTask: (state, action) => {
      const task = state.list.find((t) => t.id == action.payload);
      if (task) task.completed = !task.completed;
    },
    deleteTask: (state, action) => {
      state.list = state.list.filter((task) => task.id != action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch";
      });
  },
});


export const { addTask, toggleTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
