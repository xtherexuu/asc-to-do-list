const localStorageKey = "tasks";

export const getTasksFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey)) || [];

export const saveTasksInLocalStorage = (tasks) =>
  localStorage.setItem(localStorageKey, JSON.stringify(tasks));
