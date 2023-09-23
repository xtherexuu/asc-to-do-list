import { Wrapper, Heading } from "./styled";
import { ThemeProvider } from "styled-components";
import theme from "../../../Utils/themes/theme";
import Section from "../../common/Section";
import GlobalStyles from "../../GlobalStyles";
import Form from "./Form";
import TasksContainer from "../../common/TasksContainer";
import useTasks from "../../useTasks";
function Tasks() {
  const [
    tasks,
    setTasks,
    addNewTask,
    removeTask,
    changeTaskStatus,
    setAllTasksDone,
    isDoneTasksHidden,
    setIsDoneTasksHidden,
  ] = useTasks();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Heading>Lista zadań</Heading>
        <Section
          content={
            <Form tasks={tasks} setTasks={setTasks} addNewTask={addNewTask} />
          }
          heading="Dodaj nowe zadanie"
        />
        <Section
          content={
            <TasksContainer
              tasks={tasks}
              removeTask={removeTask}
              changeTaskStatus={changeTaskStatus}
              isDoneTasksHidden={isDoneTasksHidden}
            />
          }
          heading="Lista zadań"
          additionalContent={true}
          setAllTasksDone={setAllTasksDone}
          setIsDoneTasksHidden={setIsDoneTasksHidden}
          isDoneTasksHidden={isDoneTasksHidden}
          tasks={tasks}
        />
      </Wrapper>
    </ThemeProvider>
  );
}

export default Tasks;
