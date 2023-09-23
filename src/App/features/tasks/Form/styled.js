import styled, { css } from "styled-components";

export const Wrapper = styled.form`
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
