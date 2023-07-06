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
  padding: 23px 16px;
  height: 94px;
  box-shadow: 0px 0px 3px 2px #e0e0e0;

  @media (max-width: ${mobileBP}px) {
    padding: 16px;
    height: 132px;
  }
`;

export const TitleLink = styled(Link)`
  color: ${({ theme }) => theme.colors.mineShaft};
  text-decoration: none;
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 12px;
  align-items: center;
  white-space: nowrap;

  @media (max-width: ${mobileBP}px) {
    grid-template-columns: 20px 1fr;
    grid-template-columns: auto;
  }
`;

export const Wrapper = styled.div`
  max-width: 1368px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  grid-template-columns: auto minmax(205px, 432px);

  @media (max-width: ${mobileBP}px) {
    grid-template-columns: 20px 20px;
    flex-wrap: wrap;
    justify-content: center; /* zmienione */
    gap: 14px;
    align-items: center;
  }
`;

export const NavigationWrapper = styled.div`
  display: grid;
  gap: 80px;

  @media (max-width: ${mobileBP}px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const StyledBookIcon = styled(BookIcon)`
  flex-shrink: 0;
  width: 50px;

  @media (max-width: ${mobileBP}px) {
    width: 26px;
    height: 26px;
    justify-self: center;
  }
`;

export const TittleText = styled.div`
  font-size: 24px;
  font-weight: 500;
  flex-shrink: 0;

  @media (max-width: ${mobileBP}px) {
    font-size: 13px;
  }
`;

export const Navigation = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 16px;

  @media (max-width: ${mobileBP}px) {
    gap: 0;
    justify-content: center;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.mineShaft};
  background: none;
  font-size: 12px;
  font-weight: 400;
  margin: 13.5px 6px;
  text-decoration: none;
  display: grid;
  justify-items: center;
  transition: background-color 0.2s, color 0.2s, border 0.2s;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.doveGray};
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

export const StyledUserAccountIcon = styled(UserAccountIcon)`
  flex-shrink: 0;
  width: 26px;
  transition: transform 0.3s ease-in-out;

  :hover {
    transform: scale(1.1);
  }

  @media (max-width: ${mobileBP}px) {
    width: 17px;
    height: 17px;
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
    width: 17px;
    height: 17px;
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
    width: 17px;
    height: 17px;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${mobileBP}px) {
    order: 3;
  }
`;