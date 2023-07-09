import styled from "styled-components";
import { NavLink } from "react-router-dom";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const StyledMenu = styled.nav`
  color: ${({ theme }) => theme.colors.mineShaft};
  margin: 0;
  display: flex;
  justify-content: center;
`;

export const MenuItem = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-weight: 300;
  display: grid;
  justify-self: center;
  margin: 0 16px 0 16px;

  @media (max-width: ${mobileBP}px) {
    padding: 0;
    margin: 0;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.mineShaft};
  text-decoration: none;
  padding: 8px 8px 2px 8px;
  position: relative;

  @media (max-width: ${mobileBP}px) {
    padding: 6px 16px 2px 0;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0.5px;
    background-color: ${({ theme }) => theme.colors.mineShaft};
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`;
