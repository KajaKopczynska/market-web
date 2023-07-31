import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const TileWrapper = styled(Link)`
  color: ${({ theme }) => theme.colors.doveGray};
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  justify-items: center;
  padding: 16px;
  text-decoration: none;
  background: linear-gradient(
    to bottom, 
    ${({ theme }) => theme.colors.white} 20%, 
    ${({ theme }) => theme.colors.concrete} 50%
  );
  position: relative;
  font-size: 22px;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s ease-in-out;
  }

  @media (max-width: ${mobileBP}px) {
    padding: 12px;
    grid-gap: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

export const Image = styled.img`
  width: 80%;
  transform: scale(1);
  transition: transform 0.2s ease-in-out;

  ${TileWrapper}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: ${mobileBP}px) {
    /* width: 90%; */
    /* padding: 5px; */
  }
`;

export const TextWrapper = styled.div`
  display: grid;

  @media (max-width: ${mobileBP}px) {

  }
`;

export const Title = styled.h3`
    color: ${({ theme }) => theme.colors.doveGray};
    font-weight: normal;

    @media (max-width: ${mobileBP}px) {
      font-size: 22px;
      margin: 15px 0 15px 0;
  }
`;