import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const StyledMenu = styled.div`
  background-color: ${({ theme }) => theme.colors.cornflowerBlue};
  color: ${({ theme }) => theme.colors.mineShaft};
  display: flex;
  align-items: center;
  width: 100%; 
`;

export const MenuWrapper = styled.div`
  max-width: 1368px;
  margin: auto;
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: auto auto;
  width: 100%; 

  @media (max-width: ${mobileBP}px) {
    grid-template-columns: auto;
    justify-content: center;
  }
`;

export const MenuItem = styled.div`
  color: ${({ theme }) => theme.colors.alabaster};
  border: none;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 2;
  display: grid;
  grid-template-columns: auto auto;
  white-space: nowrap;

  @media (max-width: ${mobileBP}px) {
    grid-template-columns: auto;
    justify-content: center;
    font-size: 12px;
    line-height: 1.3;
    padding: 4px;
  }

  ${({hideOnMobile}) =>
    hideOnMobile &&
    css`
      @media (max-width: ${mobileBP}px) {
        display: none;
      }
    `}
`;

export const MenuLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  padding: 0 30px 0 0;

  @media (max-width: ${mobileBP}px) {
    padding: 0px;
    display: grid;
    justify-content: center;
  }
`;