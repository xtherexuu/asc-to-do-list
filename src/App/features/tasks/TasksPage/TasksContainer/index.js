import { Wrapper, Button, TaskContent, Task, StyledLink } from "./styled";
import { useSelector } from "react-redux";
import {
  selectTasks,
  selectTasksByQuery,
  selectIsDoneTasksHidden,
  removeTask,
  toggleTaskDone,
} from "../../tasksSlice";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";

const TasksContainer = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get(searchQueryParamName);

  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const isDoneTasksHidden = useSelector(selectIsDoneTasksHidden);

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
          <TaskContent isDone={task.done}>
            <StyledLink to={`/zadania/${task.id}`}>{task.taskContent}</StyledLink>
          </TaskContent>
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
