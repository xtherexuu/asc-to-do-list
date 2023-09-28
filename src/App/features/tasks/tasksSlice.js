import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [{ taskContent: "elo", done: false, id: 1 }],
    isDoneTasksHidden: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((e) => e.id !== payload);
    },
    toggleTaskDone: (state, { payload }) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === payload) {
          return { ...task, done: !task.done };
        }
        return task;
      });
    },
    toggleHideDone: (state) => {
      state.isDoneTasksHidden = !state.isDoneTasksHidden;
    },
    toggleAllTasksDone: ({ tasks }) => {
      tasks.every((e) => (e.done = true));
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  removeTask,
  toggleTaskDone,
  toggleAllTasksDone,
} = tasksSlice.actions;
export const SelectTasks = (state) => state.tasks;
export default tasksSlice.reducer;
