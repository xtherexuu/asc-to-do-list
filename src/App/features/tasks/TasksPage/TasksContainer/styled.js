import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: teal;
`;

export const Button = styled.button`
  cursor: pointer;
  color: white;
  font-size: 1.5rem;
  border: none;
  transition: background-color 0.5s, color 0.5s;
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
  @media (max-width: ${({ theme }) => theme.breakpoints.smallpc}) {
    font-size: 1.25rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallmobile}) {
    font-size: 1rem;
  }
`;

export const Wrapper = styled.ul`
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
  ${({ isHidden }) =>
    isHidden &&
    css`
      display: none;
    `}
`;
export const TaskContent = styled.p`
  font-size: 1.5rem;
  word-break: break-word;
  margin: 0;
  ${({ isDone }) =>
    isDone &&
    css`
      text-decoration: line-through;
      text-decoration-color: teal;
    `}
  @media(max-width: ${({ theme }) => theme.breakpoints.smallpc}) {
    font-size: 1.25rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallmobile}) {
    font-size: 1rem;
  }
`;
