import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledMenu = styled.nav`
  color: ${({ theme }) => theme.colors.mineShaft};
  margin: 0;
  display: flex;
  justify-content: center;
  gap: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const MenuItem = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.mineShaft};
  text-decoration: none;
  padding: 8px 8px 2px 8px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.mineShaft};
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`;
