import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.nav`
  background-color: teal;
  display: flex;
  justify-content: center;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  &.active {
    font-weight: bold;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListItem = styled.li`
  list-style-type: none;
  list-style-position: inside;
  margin: 0 20px;
`;
