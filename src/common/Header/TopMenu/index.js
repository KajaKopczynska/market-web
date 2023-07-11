import { MenuItem, MenuLink, MenuWrapper, StyledMenu } from "./styled";

export const TopMenu = () => (
  <StyledMenu>
    <MenuWrapper>
      <MenuItem>
        <MenuLink href="mailto: bookshop@bookshop.com">bookshop@bookshop.com</MenuLink>
        <MenuLink href="tel: +48 123(456)789">+48 123 456 789</MenuLink>
      </MenuItem>
      <MenuItem hideOnMobile>
        Free Shipping from all orders over $50
      </MenuItem>
    </MenuWrapper>
  </StyledMenu>
);