import {
  Wrapper,
  SectionHeading,
  Form,
  Input,
  Button,
  TasksContainer,
  Task,
  TaskContent,
  SectionHeader,
} from "./styled";

import tasks from "../tasks";

const Section = ({ content, heading, additionalContent }) => {
  return (
    <Wrapper>
      <SectionHeader>
        <SectionHeading>{heading}</SectionHeading>
        {additionalContent ? (
          <>
            <Button additionalContent>Ukryj ukończone</Button>
            <Button additionalContent>Ukończ wszystkie</Button>
          </>
        ) : null}
      </SectionHeader>

      {content === "form" ? (
        <Form>
          <Input placeholder="Co jest do zrobienia?" />
          <Button>Dodaj Zadanie</Button>
        </Form>
      ) : (
        <TasksContainer>
          {tasks.map((task) => (
            <Task>
              <Button changeTaskStatus>{task.done ? "✔" : ""}</Button>
              <TaskContent isDone={task.done}>{task.taskContent}</TaskContent>
              <Button deleteTask>🗑</Button>
            </Task>
          ))}
        </TasksContainer>
      )}
    </Wrapper>
  );
};

export default Section;
