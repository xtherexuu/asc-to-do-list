import styled, { css } from "styled-components";

export const Button = styled.button`
  color: teal;
  cursor: pointer;
  background-color: transparent;

  font-size: 1.35rem;
  border: none;
  transition: background-color 0.5s, color 0.5s;
  &:hover {
    color: hsl(180, 100%, 35%);
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
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 25px;
  }
`;
