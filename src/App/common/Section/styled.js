import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: white;
  margin-bottom: 12.5px;
`;

export const SectionHeader = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  padding-right: 20px;
  border-bottom: 2px solid #dddd;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const SectionHeading = styled.h2`
  flex-shrink: 0;
  flex-grow: 1;
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
