import { Wrapper, SectionHeading, SectionHeader } from "./styled";
import AdditionalButtons from "../../features/tasks/AdditionalButtons";

const Section = ({
  content,
  heading,
  additionalContent,
}) => {
  return (
    <Wrapper>
      <SectionHeader>
        <SectionHeading>{heading}</SectionHeading>
        <AdditionalButtons
          additionalContent={additionalContent}
        />
      </SectionHeader>
      {content}
    </Wrapper>
  );
};

export default Section;
