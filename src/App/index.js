import { Wrapper, Heading } from "./styled";
import { ThemeProvider } from "styled-components";
import theme from "../Utils/themes/theme";
import Section from "./Section";
function App() {
  return (
    <ThemeProvider theme={theme}>
    <Wrapper>
      <Heading>Lista zadań</Heading>
      <Section content="form" heading="Dodaj nowe zadanie" />
      <Section content="tasks" heading="Lista zadań" additionalContent={true}/>
    </Wrapper>
    </ThemeProvider>
  );
}

export default App;
