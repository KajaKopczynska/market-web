import { MenuItem, StyledMenu, StyledNavLink } from "./styled";

export const CategoryMenu = () => (
  <StyledMenu>
    <MenuItem>
      <StyledNavLink>Książki</StyledNavLink>
    </MenuItem>
    <MenuItem>
      <StyledNavLink>Audiobooki</StyledNavLink>
    </MenuItem>
    <MenuItem>
      <StyledNavLink>Muzyka</StyledNavLink>
    </MenuItem>
    <MenuItem>
      <StyledNavLink>Gry</StyledNavLink>
    </MenuItem>
  </StyledMenu>
);