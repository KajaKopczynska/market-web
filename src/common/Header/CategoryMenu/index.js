import { MenuItem, StyledMenu, StyledNavLink } from "./styled";

export const CategoryMenu = () => (
  <StyledMenu>
    <MenuItem>
      <StyledNavLink to="/books">Books</StyledNavLink>
    </MenuItem>
    <MenuItem>
      <StyledNavLink to="/audiobooks">Audiobooks</StyledNavLink>
    </MenuItem>
    <MenuItem>
      <StyledNavLink to="/music">Music</StyledNavLink>
    </MenuItem>
    <MenuItem>
      <StyledNavLink to="/games">Games</StyledNavLink>
    </MenuItem>
  </StyledMenu>
);