import styled, { keyframes } from "styled-components";
import { ReactComponent as ToolsIcon } from "./toolsIcon.svg";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SectionSubtitle = styled.h2`
  display: grid;
  justify-content: center;
  color: ${({ theme }) => theme.colors.doveGray};
  font-size: 30px;
  font-weight: normal;
  margin: 30px 0 30px 0;

  @media (max-width: ${mobileBP}px) {
    font-size: 20px;
    margin: 20px 0 6px 0;
  }
`;

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 90px;

  @media (max-width: ${mobileBP}px) {
    margin: 35px;
  }
`;

export const StyledToolsIcon = styled(ToolsIcon)`
  animation: ${rotate360} 5s linear infinite;

  @media (max-width: ${mobileBP}px) {
    height: 100px;
  }
`;
