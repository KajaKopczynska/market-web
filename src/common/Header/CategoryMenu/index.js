import { MenuItem, StyledMenu, StyledNavLink } from "./styled";

export const CategoryMenu = () => (
  <StyledMenu>
    <MenuItem>
      <StyledNavLink>Books</StyledNavLink>
    </MenuItem>
    <MenuItem>
      <StyledNavLink>Audiobooks</StyledNavLink>
    </MenuItem>
    <MenuItem>
      <StyledNavLink>Music</StyledNavLink>
    </MenuItem>
    <MenuItem>
      <StyledNavLink>Games</StyledNavLink>
    </MenuItem>
  </StyledMenu>
);