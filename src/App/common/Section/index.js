import { Wrapper, SectionHeading, SectionHeader } from "./styled";
import AdditionalButtons from "../../features/tasks/AdditionalButtons";

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
        <AdditionalButtons
          additionalContent={additionalContent}
          tasks={tasks}
          setAllTasksDone={setAllTasksDone}
          setIsDoneTasksHidden={setIsDoneTasksHidden}
          isDoneTasksHidden={isDoneTasksHidden}
        />
      </SectionHeader>
      {content}
    </Wrapper>
  );
};

export default Section;
