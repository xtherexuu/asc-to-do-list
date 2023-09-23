import { Button } from "./styled";

const Buttons = ({
  additionalContent,
  tasks,
  isDoneTasksHidden,
  setAllTasksDone,
  setIsDoneTasksHidden,
}) =>
  additionalContent && tasks.length ? (
    <>
      <Button
        onClick={() => {
          setIsDoneTasksHidden((value) => (value = !value));
        }}
        additionalContent
      >
        {isDoneTasksHidden ? "Pokaż ukończone" : "Ukryj ukończone"}
      </Button>
      <Button
        onClick={() => {
          setAllTasksDone();
        }}
        disabled={tasks.every((task) => task.done === true) ? true : false}
        additionalContent
      >
        Ukończ wszystkie
      </Button>
    </>
  ) : null;

export default Buttons;
