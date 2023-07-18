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
