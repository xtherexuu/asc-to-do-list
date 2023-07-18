import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  background-color: white;
  margin-bottom: 12.5px;
`;

export const SectionHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-gap: 20px;
  margin-bottom: 25px;
  padding-right: 20px;
  border-bottom: 2px solid #dddd;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`;

export const SectionHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  padding: 25px;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.smallpc}) {
    font-size: 2rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallmobile}) {
    font-size: 1.75rem;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;
export const Input = styled.input`
  border: 2px solid #dddd;
  padding: 10px;
  font-size: 1.5rem;
  margin: 0 0 25px 25px;
  @media (max-width: ${({ theme }) => theme.breakpoints.smallpc}) {
    font-size: 1.25rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-right: 25px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallmobile}) {
    font-size: 1rem;
  }
`;
export const Button = styled.button`
  color: white;
  background-color: teal;
  font-size: 1.5rem;
  padding: 11px;
  border: none;
  margin: 0 25px 25px 25px;
  &:hover {
    background-color: hsl(180, 100%, 35%);
  }
  transition: background-color 0.5s, color 0.5s;
  ${({ additionalContent }) =>
    additionalContent &&
    css`
      background-color: transparent;
      color: teal;
      margin: 0;
      padding: 0;
      &:hover {
        background-color: transparent;
        color: hsl(180, 100%, 35%);
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-bottom: 25px;
      }
    `}
  ${({ changeTaskStatus }) =>
    changeTaskStatus &&
    css`
      background-color: green;
      width: 40px;
      height: 40px;
      margin: 0;
      padding: 0;
      &:hover {
        background-color: hsl(120, 100%, 35%);
      }
    `}
  ${({ deleteTask }) =>
    deleteTask &&
    css`
      background-color: hsl(0, 100%, 45%);
      width: 40px;
      height: 40px;
      margin: 0;
      padding: 0;
      &:hover {
        background-color: hsl(0, 100%, 60%);
      }
    `}
    @media(max-width: ${({ theme }) => theme.breakpoints.smallpc}) {
    font-size: 1.25rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallmobile}) {
    font-size: 1rem;
  }
`;
export const TasksContainer = styled.ul`
  list-style-type: none;
  list-style-position: inside;
  padding: 0 25px 12.5px;
`;
export const Task = styled.li`
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  align-items: center;
  margin-bottom: 12.5px;
  padding: 0 0 12.5px;
  border-bottom: 2px solid #dddd;
  grid-gap: 12.5px;
`;
export const TaskContent = styled.p`
  font-size: 1.5rem;
  word-break: break-word;
  margin: 0;
  ${({ isDone }) =>
    isDone &&
    css`
      text-decoration: line-through;
    `}
  @media(max-width: ${({ theme }) => theme.breakpoints.smallpc}) {
    font-size: 1.25rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallmobile}) {
    font-size: 1rem;
  }
`;
