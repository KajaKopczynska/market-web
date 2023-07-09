import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const MainBannerWrapper = styled.div`
  display: grid;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${mobileBP}px) {

}
`;

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
  position: relative;
  max-width: 1368px;
  margin: 0 auto;
  animation: reveal 1s ease-in-out 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes reveal {
    100% {
      opacity: 1;
    }
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
`;

export const MainBannerContent = styled.div`
  top: 65%;
  left: 5%;
  position: absolute;
  font-size: 14px;
  padding: 13px 33px;

  @media (max-width: ${mobileBP}px) {
    padding: 6px;
    top: 55%;
    left: 0;
  }
`;


export const BannerLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
  text-decoration: none;
  display: grid;
  align-items: center;
  white-space: nowrap;

  font-size: 14px;
  padding: 13px 33px;
  border-radius: 25px;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: ${mobileBP}px) {
    font-size: 10px;
    padding: 6px 15px;
  }
`;