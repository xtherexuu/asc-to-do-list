import { Wrapper, Input, Button } from "./styled";
import { useState, useRef } from "react";

const Form = ({tasks, setTasks, addNewTask}) => {
  const [inputValue, setInputValue] = useState("");
  const InputElement = useRef();

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(inputValue.trim());
    setInputValue((value) => (value = ""));
    InputElement.current.focus();
  };

  return (
    <Wrapper onSubmit={onFormSubmit}>
      <Input
        placeholder="Co jest do zrobienia?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ref={InputElement}
      />
      <Button>Dodaj Zadanie</Button>
    </Wrapper>
  );
};

export default Form;
