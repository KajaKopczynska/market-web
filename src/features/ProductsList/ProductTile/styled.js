import styled from "styled-components";
import { Link } from "react-router-dom";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const TileWrapper = styled(Link)`
  color: ${({ theme }) => theme.colors.doveGray};
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  /* transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1); */
  padding: 16px;
  text-decoration: none;
  background: linear-gradient(
    to bottom, 
    ${({ theme }) => theme.colors.white} 20%, 
    ${({ theme }) => theme.colors.concrete} 50%
  );
  position: relative;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s ease-in-out;
  }

  @media (max-width: ${mobileBP}px) {
    grid-template-columns: auto 1fr;
    padding: 12px;
  }
`;

export const Image = styled.img`
  width: 100%;
  transform: scale(1);
  transition: transform 0.2s ease-in-out;

  ${TileWrapper}:hover & {
    transform: scale(1.05);
  }
`;

export const Informations = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-rows: auto 1fr 1fr;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.mineShaft};
  font-weight: 500;
  font-size: 18px;
  line-height: 1.3;
  margin: 16px 0 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: ${mobileBP}px) {
    margin: 0 0 0 8px;
    font-size: 16px;
  }
`;

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  margin: 0;

  @media (max-width: ${mobileBP}px) {
    margin: 0 0 0 8px;
    font-size: 12px;
  }
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.colors.mineShaft};
  font-weight: 400;
  font-size: 18px;
  margin: 0;

  @media (max-width: ${mobileBP}px) {
    margin: 0 0 0 8px;
    font-size: 12px;
  }
`;

export const ProductLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-size: 22px;
`;

export const ProductButton = styled.div`
  margin: 16px 0 0 0;
  padding: 6px;
  transition: background-color 0.2s ease-in-out, color 0.5s ease-in-out;
  display: grid;
  grid-template-columns: 30px auto;
  align-items: center;
  border-radius: 5px;

  ${TileWrapper}:hover & {
    background-color: ${({ theme }) => theme.colors.cornflowerBlue};
    color: ${({ theme }) => theme.colors.alabaster};
  }
`;

export const AdditionalText = styled.span`
  display: inline-block;
  margin-left: 8px;
  opacity: 0;
  transform: scaleY(0);
  transition: opacity 0.2s ease-in-out, transform 0.3s ease-in-out;

  ${TileWrapper}:hover & {
    opacity: 1;
    transform: scaleY(1);
  }
`;


