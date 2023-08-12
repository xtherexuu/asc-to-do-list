import { Wrapper, Input, Button } from "./styled";
import { useState, useRef } from "react";

const Form = ({ tasks, setTasks, addNewTask }) => {
  const [inputValue, setInputValue] = useState("");
  const inputElement = useRef();

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(inputValue.trim());
    setInputValue((value) => (value = ""));
    inputElement.current.focus();
  };

  return (
    <Wrapper onSubmit={onFormSubmit}>
      <Input
        placeholder="Co jest do zrobienia?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ref={inputElement}
      />
      <Button>Dodaj Zadanie</Button>
    </Wrapper>
  );
};

export default Form;
