import { Wrapper, SectionHeading, SectionHeader, Button } from "./styled";

const Section = ({
  tasks,
  content,
  heading,
  additionalContent,
  setAllTasksDone,
  setIsDoneTasksHidden,
  isDoneTasksHidden,
}) => {
  return (
    <Wrapper>
      <SectionHeader>
        <SectionHeading>{heading}</SectionHeading>
        {additionalContent && tasks.length ? (
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
              disabled={
                tasks.every((task) => task.done === true) ? true : false
              }
              additionalContent
            >
              Ukończ wszystkie
            </Button>
          </>
        ) : null}
      </SectionHeader>
      {content}
    </Wrapper>
  );
};

export default Section;
