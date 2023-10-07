import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: grid;
    grid-template-columns: 1fr;
    ${({ hidden }) =>
      hidden &&
      css`
        display: none;
      `}
  }
  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Button = styled.button`
  color: white;
  background-color: teal;
  font-size: 1.35rem;
  border: none;
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
      &:hover {
        background-color: transparent;
        color: hsl(180, 100%, 35%);
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-bottom: 25px;
      }
    `}
`;
