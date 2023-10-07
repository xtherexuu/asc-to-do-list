import { Button, Wrapper } from "./styled";
import {
  toggleHideDone,
  toggleAllTasksDone,
  fetchExampleTasks,
} from "../tasksSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectTasksState } from "../tasksSlice";

const Buttons = ({ additionalContent }) => {
  const { tasks, isDoneTasksHidden } = useSelector(selectTasksState);
  const dispatch = useDispatch();

  return additionalContent ? (
    <>
      <Button
        onClick={() => {
          dispatch(fetchExampleTasks());
        }}
        additionalContent
      >
        Pobierz przykładowe zadania
      </Button>
      <Wrapper hidden={!tasks.length}>
        <Button
          onClick={() => {
            dispatch(toggleHideDone());
          }}
          additionalContent
        >
          {isDoneTasksHidden ? "Pokaż ukończone" : "Ukryj ukończone"}
        </Button>
        <Button
          onClick={() => {
            dispatch(toggleAllTasksDone());
          }}
          disabled={tasks.every((task) => task.done === true) ? true : false}
          additionalContent
        >
          Ukończ wszystkie
        </Button>
      </Wrapper>
    </>
  ) : null;
};

export default Buttons;
