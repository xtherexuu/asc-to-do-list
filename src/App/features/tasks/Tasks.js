import { Wrapper, Heading } from "./styled";
import { ThemeProvider } from "styled-components";
import theme from "../../../Utils/themes/theme";
import Section from "../../common/Section";
import GlobalStyles from "../../GlobalStyles";
import Form from "./Form";
import TasksContainer from "./TasksContainer";
function Tasks() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Heading>Lista zadań</Heading>
        <Section content={<Form />} heading="Dodaj nowe zadanie" />
        <Section
          content={<TasksContainer />}
          heading="Lista zadań"
          additionalContent={true}
        />
      </Wrapper>
    </ThemeProvider>
  );
}

export default Tasks;
