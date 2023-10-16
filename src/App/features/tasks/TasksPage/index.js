import { Wrapper, Heading } from "../styled";
import Section from "../../../common/Section";
import Form from "../TasksPage/Form";
import TasksContainer from "../TasksPage/TasksContainer";
import Search from "./Search";
function TasksPage() {
  return (
    <Wrapper>
      <Heading>Lista zadań</Heading>
      <Section content={<Form />} heading="Dodaj nowe zadanie" />
      <Section content={<Search />} heading="Wyszukaj zadanie" />
      <Section
        content={<TasksContainer />}
        heading="Lista zadań"
        additionalContent={true}
      />
    </Wrapper>
  );
}

export default TasksPage;
