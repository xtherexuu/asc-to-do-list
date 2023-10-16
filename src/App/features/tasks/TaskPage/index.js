import { Wrapper, Heading } from "../styled";
import Section from "../../../common/Section";
import { useParams } from "react-router-dom";
import { getTaskById } from "../tasksSlice";
import { useSelector } from "react-redux";
import { Paragraph } from "./styled";

export default () => {
  const { id } = useParams();

  const task = useSelector((state) => getTaskById(state, id));

  return (
    <Wrapper>
      <Heading>Szczegóły zadania</Heading>
      <Section
        content={
          task ? (
            <Paragraph>
              <strong>Ukończone: </strong>
              {task.done ? "Tak" : "Nie"}
            </Paragraph>
          ) : null
        }
        heading={task?.taskContent || "Nie znaleziono zadania 😥"}
      />
    </Wrapper>
  );
};
