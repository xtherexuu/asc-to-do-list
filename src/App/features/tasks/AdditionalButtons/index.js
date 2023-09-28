import { Button } from "./styled";
import { toggleHideDone, toggleAllTasksDone } from "../tasksSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SelectTasks } from "../tasksSlice";

const Buttons = ({ additionalContent }) => {
  const { tasks, isDoneTasksHidden } = useSelector(SelectTasks);
  const dispatch = useDispatch();

  return additionalContent && tasks.length ? (
    <>
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
    </>
  ) : null;
};

export default Buttons;
