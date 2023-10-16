import { Wrapper, Button } from "./styled";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../../tasksSlice";
import Input from "../Input";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const inputElement = useRef();

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) {
      setInputValue((value) => (value = ""));
      inputElement.current.focus();
    } else {
      dispatch(
        addTask({
          taskContent: inputValue.trim(),
          done: false,
          id: nanoid(),
        })
      );
      setInputValue((value) => (value = ""));
      inputElement.current.focus();
    }
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
