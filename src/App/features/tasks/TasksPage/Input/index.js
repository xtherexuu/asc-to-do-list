import styled from "styled-components";

export default styled.input`
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
