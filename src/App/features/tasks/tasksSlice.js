import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    isDoneTasksHidden: false,
    isExampleTasksLoading: false,
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
    setTasksListToExampleTasksList: (state, { payload: exampleTasks }) => {
      state.tasks = [...exampleTasks];
    },
    setIsExampleTasksLoading: (state, {payload}) => {
      state.isExampleTasksLoading = payload;
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
  setIsExampleTasksLoading,
} = tasksSlice.actions;

export const selectTasksState = (state) => state.tasks;

export const selectTasks = (state) => selectTasksState(state).tasks;

export const selectIsDoneTasksHidden = (state) =>
  selectTasksState(state).isDoneTasksHidden;

export const selectIsExampleTasksLoading = (state) =>
  selectTasksState(state).isExampleTasksLoading;

export const getTaskById = (state, taskId) =>
  selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
  const tasks = selectTasks(state);

  if (!query || query.trim() === "") {
    return tasks;
  }

  return tasks.filter(({ taskContent }) =>
    taskContent.toUpperCase().includes(query.trim().toUpperCase())
  );
};

export default tasksSlice.reducer;
