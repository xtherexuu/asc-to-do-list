import {
  selectIsDoneTasksHidden,
  toggleHideDone,
  toggleAllTasksDone,
  fetchExampleTasks,
  selectTasks,
  selectIsExampleTasksLoading,
} from "../tasksSlice";
import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Heading } from "../styled";
import Section from "../../../common/Section";
import Form from "../TasksPage/Form";
import TasksContainer from "../TasksPage/TasksContainer";
import Search from "./Search";
import AdditionalButton from "./AdditionalButton";

function TasksPage() {
  const isDoneTasksHidden = useSelector(selectIsDoneTasksHidden);
  const tasks = useSelector(selectTasks);
  const isExampleTasksLoading = useSelector(selectIsExampleTasksLoading);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Heading>Lista zadań</Heading>
      <Section
        content={<Form />}
        heading="Dodaj nowe zadanie"
        additionalContent={[
          <AdditionalButton
            key="fetchExampleTasks"
            content={
              isExampleTasksLoading
                ? "Ładowanie..."
                : "Pobierz przykładowe zadania"
            }
            isDisabled={isExampleTasksLoading}
            onClickAction={() => dispatch(fetchExampleTasks())}
          />,
        ]}
      />
      <Section content={<Search />} heading="Wyszukaj zadanie" />
      <Section
        content={<TasksContainer />}
        heading="Lista zadań"
        additionalContent={
          tasks.length
            ? [
                <AdditionalButton
                  key="toggleHidden"
                  content={
                    isDoneTasksHidden ? "Pokaż ukończone" : "Ukryj ukończone"
                  }
                  isDisabled={false}
                  onClickAction={() => dispatch(toggleHideDone())}
                />,
                <AdditionalButton
                  key="doneAll"
                  content={"Ukończ wszystkie"}
                  isDisabled={tasks.every((task) => task.done) ? true : false}
                  onClickAction={() => dispatch(toggleAllTasksDone())}
                />,
              ]
            : null
        }
      />
    </Wrapper>
  );
}

export default TasksPage;
