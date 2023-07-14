import styled, { keyframes, css } from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as PreviousIcon} from "./images/previousIcon.svg";
import { ReactComponent as NextIcon} from "./images/nextIcon.svg";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOutAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    display: none;
  }
`;

export const MainBannerWrapper = styled.div`
  display: grid;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.alabaster};

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
  opacity: 0;
  animation: reveal 1s ease-in-out 0.5s forwards;

  @keyframes reveal {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  opacity: ${props => (props.second ? 0 : 1)};
  animation: ${props =>
    props.second
      ? css`
          ${fadeInAnimation} 1s forwards
        `
      : css`
          ${fadeOutAnimation} 1s ease-in-out
        `};
  animation-fill-mode: both;
  &.fade-in {
    opacity: 1;
    animation: ${fadeInAnimation} 1s forwards;
  }
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

// export const IconWrapper = styled.div`
//   position: relative;
//   max-width: 1368px;
//   margin: 0 auto;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   justify-content: space-between;

//   @media (max-width: ${mobileBP}px) {

//   }
// `;

export const StyledIconPrevious = styled(PreviousIcon)`
  position: absolute;
  width: 100px;
  height: 50px;
  align-self: center;
  justify-self: start;
  cursor: pointer;
`;

export const StyledIconNext = styled(NextIcon)`
  position: absolute;
  width: 100px;
  height: 50px;
  align-self: center;
  justify-self: end;
  cursor: pointer;
`;