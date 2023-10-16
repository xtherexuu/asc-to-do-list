import { Wrapper, StyledNavLink, List, ListItem } from "./styled";

export default () => {
  return (
    <Wrapper>
      <List>
        <ListItem>
          <StyledNavLink activeClassName="active" to="/zadania">
            Zadania
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink activeClassName="active" to="/author">
            O Autorze
          </StyledNavLink>
        </ListItem>
      </List>
    </Wrapper>
  );
};
