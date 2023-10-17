import { Wrapper, SectionHeading, SectionHeader } from "./styled";

const Section = ({ content, heading, additionalContent }) => {
  return (
    <Wrapper>
      <SectionHeader>
        <SectionHeading>{heading}</SectionHeading>
        {additionalContent ? additionalContent.map((e) => e) : null}
      </SectionHeader>
      {content}
    </Wrapper>
  );
};

export default Section;
