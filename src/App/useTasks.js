import { useEffect, useState } from "react";

const useTasks = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [isDoneTasksHidden, setIsDoneTasksHidden] = useState(!!JSON.parse(localStorage.getItem("isDoneTasksHidden")));

  const addNewTask = (inputValue) => {
    if (inputValue === "") {
      return;
    } else {
      const newTask = {
        taskContent: inputValue,
        done: false,
        key: tasks.length ? tasks[tasks.length - 1].key + 1 : 1,
      };

      setTasks((tasks) => (tasks = [...tasks, newTask]));
    }
  };

  const removeTask = (key) => {
    setTasks(tasks => tasks = tasks.filter((task) => task.key !== key));
  }

  const changeTaskStatus = (key) => {
    setTasks(tasks => tasks = [...tasks.map(task => task.key === key ? {taskContent: task.taskContent, key: task.key, done: !task.done} : task)])
  }

  const setAllTasksDone = () => {
    setTasks(tasks => tasks = [...tasks.map(task => task = {taskContent: task.taskContent, key: task.key, done: true})])
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

  useEffect(() => {
    localStorage.setItem("isDoneTasksHidden", JSON.stringify(isDoneTasksHidden))
  }, [isDoneTasksHidden])

  return [tasks, setTasks, addNewTask, removeTask, changeTaskStatus, setAllTasksDone, isDoneTasksHidden, setIsDoneTasksHidden];
};

export default useTasks;
