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
    background: ${({ theme }) => theme.colors.alabaster};
    padding: 16px;
    height: 132px;
  }
`;

export const TitleLink = styled(Link)`
  color: ${({ theme }) => theme.colors.mineShaft};
  text-decoration: none;
  display: flex;
  gap: 12px;
  align-items: center;

  @media (max-width: ${mobileBP}px) {
    gap: 8px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1368px;
  margin: auto;
  display: grid;
  gap: 16px;
  grid-template-columns: auto minmax(205px, 432px);

  @media (max-width: ${mobileBP}px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const NavigationWrapper = styled.div`
  display: flex;
  gap: 80px;

  @media (max-width: ${mobileBP}px) {
    justify-content: space-between;
    gap: 20px;
  }
`;

export const StyledBookIcon = styled(BookIcon)`
  flex-shrink: 0;
  width: 50px;

  @media (max-width: ${mobileBP}px) {
  width: 17px;
  height: 17px;
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
    gap: 12px;
    margin-left: 30px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.mineShaft};
  background: none;
  font-size: 10px;
  font-weight: 400;
  margin: 13.5px 6px;
  text-decoration: none;
  display: grid;
  justify-items: center;
  transition: background-color .2s,color .2s,border .2s;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.doveGray};
    /* border-bottom: 1px solid ${({ theme }) => theme.colors.black}; */
  }

  &.active {
    /* border-bottom: 1px solid ${({ theme }) => theme.colors.black}; */
  }

  @media (max-width: ${mobileBP}px) {
    font-size: 12px;
    padding: 8px 12px;
  }
`;

export const StyledUserAccountIcon = styled(UserAccountIcon)`
  flex-shrink: 0;
  width: 20px;

  @media (max-width: ${mobileBP}px) {
  width: 17px;
  height: 17px;
}
`;

export const StyledClipboardIcon = styled(ClipboardIcon)`
  flex-shrink: 0;
  width: 20px;

  @media (max-width: ${mobileBP}px) {
  width: 17px;
  height: 17px;
}
`;

export const StyledBasketIcon = styled(BasketIcon)`
  flex-shrink: 0;
  width: 20px;

  @media (max-width: ${mobileBP}px) {
  width: 17px;
  height: 17px;

}
`;