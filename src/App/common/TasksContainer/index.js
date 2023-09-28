import { Wrapper, Button, TaskContent, Task } from "./styled";
import { useSelector } from "react-redux";
import {
  SelectTasks,
  removeTask,
  toggleTaskDone,
} from "../../features/tasks/tasksSlice";
import { useDispatch } from "react-redux";
const TasksContainer = () => {
  const { tasks, isDoneTasksHidden } = useSelector(SelectTasks);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      {tasks.map((task) => (
        <Task
          key={task.id}
          isHidden={isDoneTasksHidden && task.done ? true : false}
        >
          <Button
            onClick={() => {
              dispatch(toggleTaskDone(task.id));
            }}
            changeTaskStatus
          >
            {task.done ? "✔" : ""}
          </Button>
          <TaskContent isDone={task.done}>{task.taskContent}</TaskContent>
          <Button
            onClick={() => {
              dispatch(removeTask(task.id));
            }}
            deleteTask
          >
            🗑
          </Button>
        </Task>
      ))}
    </Wrapper>
  );
};

export default TasksContainer;
