import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    isDoneTasksHidden: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    removeTask: (state, { payload: id }) => {
      state.tasks = state.tasks.filter((e) => e.id !== id);
    },
    toggleTaskDone: (state, { payload: id }) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      });
    },
    toggleHideDone: (state) => {
      state.isDoneTasksHidden = !state.isDoneTasksHidden;
    },
    toggleAllTasksDone: ({ tasks }) => {
      tasks.forEach((e) => (e.done = true));
    },
    fetchExampleTasks: () => {},
    setTasksListToExampleTasksList: (state, {payload: exampleTasks}) => {
      state.tasks = [...exampleTasks];
    }
  },
});

export const {
  addTask,
  toggleHideDone,
  removeTask,
  toggleTaskDone,
  toggleAllTasksDone,
  fetchExampleTasks,
  setTasksListToExampleTasksList,
} = tasksSlice.actions;
export const selectTasksState = (state) => state.tasks;
export default tasksSlice.reducer;
