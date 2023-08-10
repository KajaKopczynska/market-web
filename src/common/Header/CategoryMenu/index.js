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
      <StyledNavLink to="/cooming-soon">Music</StyledNavLink>
    </MenuItem>
    <MenuItem>
      <StyledNavLink to="/cooming-soon">Games</StyledNavLink>
    </MenuItem>
  </StyledMenu>
);