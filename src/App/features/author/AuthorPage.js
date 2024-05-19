import { Wrapper } from "../tasks/styled";
import { Heading } from "../tasks/styled";
import Section from "../../common/Section";
import { Paragraph } from "./styled";

export default () => {
  return (
    <Wrapper>
      <Heading>O Autorze</Heading>
      <Section
        content={
          <>
            <Paragraph>
              Cześć!
              <br />
              Nazywam się <strong>Bartosz Załęski</strong> mam{" "}
              <strong>17 lat</strong> i interesuję się programowaniem oraz
              tworzeniem własnego biznesu online. W przyszłości chciałbym
              prowadzić własną firmę, związaną z marketingiem i programowaniem.
            </Paragraph>
          </>
        }
        heading="Bartosz Załęski"
      />
    </Wrapper>
  );
};
