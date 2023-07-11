import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as BookIcon } from "./icons/BookIcon.svg";
import { ReactComponent as UserAccountIcon } from "./icons/UserAccountIcon.svg";
import { ReactComponent as ClipboardIcon } from "./icons/ClipboardIcon.svg";
import { ReactComponent as BasketIcon } from "./icons/BasketIcon.svg";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.alabaster};
  color: ${({ theme }) => theme.colors.black};
  /* padding: 16px; */
  height: auto;
  box-shadow: 0px 0px 3px 2px #e0e0e0;
  width: 100%;

  @media (max-width: ${mobileBP}px) {
    /* padding: 8px; */
    height: 160px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1368px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 10px;
  justify-content: center;

  @media (max-width: ${mobileBP}px) {
    grid-template-columns: 1fr;
    grid-template-rows: 50px 45px 30px;
    align-items: center;
    grid-gap: 6px;
  }
`;

export const TitleLink = styled(Link)`
  color: ${({ theme }) => theme.colors.mineShaft};
  text-decoration: none;
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-gap: 12px;
  align-items: center;
  white-space: nowrap;

  @media (max-width: ${mobileBP}px) {
    grid-gap: 6px;
    justify-self: start;
  }
`;

export const NavigationWrapper = styled.div`
  display: grid;
  grid-gap: 80px;

  @media (max-width: ${mobileBP}px) {
    grid-row-start: 1;
    grid-column-start: 2;
    grid-gap: 20px;
    /* justify-content: end; */
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: ${mobileBP}px) {
    grid-row-start: 2;
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;

export const CategoryMenuWrapper = styled.div`
   grid-column-start: 2;

  @media (max-width: ${mobileBP}px) {
   grid-row-start: 3;
   grid-column-start: 1;
   grid-column-end: 3;
  }
`;

export const StyledBookIcon = styled(BookIcon)`
  flex-shrink: 0;
  width: 50px;
  color: ${({ theme }) => theme.colors.cornflowerBlue};

  @media (max-width: ${mobileBP}px) {
    width: 26px;
    height: 26px;
    justify-self: center;
  }
`;

export const TitleText = styled.div`
  color: ${({ theme }) => theme.colors.mineShaft};
  font-size: 24px;
  font-weight: 500;
  flex-shrink: 0;

  @media (max-width: ${mobileBP}px) {
    font-size: 18px;
    white-space: nowrap;
    justify-self: center;
  }
`;

export const Navigation = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  grid-gap: 16px;
  justify-content: end;

  @media (max-width: ${mobileBP}px) {
    grid-gap: 0;
    justify-content: center;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.mineShaft};
  background: none;
  font-size: 12px;
  font-weight: 300;
  margin: 13.5px 6px;
  text-decoration: none;
  display: grid;
  justify-items: center;
  transition: background-color 0.2s, color 0.2s, border 0.2s;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.cornflowerBlue};
  }

  &.active {
    /* border-bottom: 1px solid ${({ theme }) => theme.colors.black}; */
  }

  @media (max-width: ${mobileBP}px) {
    font-size: 12px;
    padding: 8px 8px;
    margin: 0;
  }
`;

export const NavLinkText = styled.span`

  @media (max-width: ${mobileBP}px) {
    display: none;
  }
`;

export const StyledUserAccountIcon = styled(UserAccountIcon)`
  flex-shrink: 0;
  width: 26px;
  transition: transform 0.3s ease-in-out;

  :hover {
    transform: scale(1.1);
  }

  @media (max-width: ${mobileBP}px) {
    width: 30px;
    height: 30px;
  }
`;

export const StyledClipboardIcon = styled(ClipboardIcon)`
  flex-shrink: 0;
  width: 26px;
  transition: transform 0.3s ease-in-out;

  :hover {
    transform: scale(1.1);
  }

  @media (max-width: ${mobileBP}px) {
    width: 30px;
    height: 30px;
  }
`;

export const StyledBasketIcon = styled(BasketIcon)`
  flex-shrink: 0;
  width: 26px;
  transition: transform 0.3s ease-in-out;

  :hover {
    transform: scale(1.1);
  }

  @media (max-width: ${mobileBP}px) {
    width: 30px;
    height: 30px;
  }
`;

