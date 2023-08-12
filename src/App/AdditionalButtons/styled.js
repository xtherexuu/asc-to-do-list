import styled, { css } from "styled-components";

export const Button = styled.button`
  color: white;
  background-color: teal;
  font-size: 1.5rem;
  padding: 11px;
  border: none;
  margin: 0 25px 25px 25px;
  transition: background-color 0.5s, color 0.5s;
  &:hover {
    background-color: hsl(180, 100%, 35%);
  }
  &:disabled {
    color: gray;
    &:hover {
      color: gray;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallpc}) {
    font-size: 1.25rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallmobile}) {
    font-size: 1rem;
  }
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
`;
