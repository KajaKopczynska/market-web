import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as StyledDangerIcon } from "./DangerIcon.svg"

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const Wrapper = styled.div`
  margin: 80px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.5s;

  @media (max-width: ${mobileBP}px) {
    margin: 20px 0;
    scale:85%;
  }
`;

export const DangerIcon = styled(StyledDangerIcon)`
  margin: 14px;
  width: 100px;
  height: 100px;
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.doveGray};
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  text-align: center;
`;

export const Content = styled.div`
  color: ${({ theme }) => theme.colors.doveGray};
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  text-align: center;
`;

export const Button = styled(NavLink)`
  color: ${({ theme }) => theme.colors.alabaster};
  background: ${({ theme }) => theme.colors.cornflowerBlue};
  border: none;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 24px;
  padding: 16px 24px;
  gap: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  transition: background-color 0.2s, color 0.2s, border 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.cornflowerBlue};
    background-color: ${({ theme }) => theme.colors.blizzardBlue};
  }
`;