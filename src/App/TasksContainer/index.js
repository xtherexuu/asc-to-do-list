import { Wrapper, Button, TaskContent, Task } from "./styled";

const TasksContainer = ({
  tasks,
  removeTask,
  changeTaskStatus,
  isDoneTasksHidden,
}) => {
  return (
    <Wrapper>
      {tasks.map((task) => (
        <Task
          key={task.key}
          isHidden={isDoneTasksHidden && task.done ? true : false}
        >
          <Button
            onClick={() => {
              changeTaskStatus(task.key);
            }}
            changeTaskStatus
          >
            {task.done ? "✔" : ""}
          </Button>
          <TaskContent isDone={task.done}>{task.taskContent}</TaskContent>
          <Button
            onClick={() => {
              removeTask(task.key);
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
