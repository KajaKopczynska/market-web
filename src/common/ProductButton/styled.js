import styled, { css } from "styled-components";
import { TileWrapper } from "../../features/ProductsList/ProductTile/styled";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const ProductButtonWrapper = styled.div`
  margin: 12px 0 0 0;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  display: grid;
  grid-template-columns: 40px auto;
  align-items: center;
  border-radius: 5px;
  height: 35px;

 ${TileWrapper}:hover & {
    background-color: ${({ theme }) => theme.colors.cornflowerBlue};
    color: ${({ theme }) => theme.colors.alabaster};
    box-shadow: 0px 0px 0px 5px ${({ theme }) => theme.colors.cornflowerBlue};
  }

  &:hover {
    /* color: red; */
    /* background-color: red; */
    box-shadow: 0px 0px 0px 5px ${({ theme }) => theme.colors.cornflowerBlue};
  }

  ${({ productPage }) =>
    productPage &&
    css`
      background-color: ${({ theme }) => theme.colors.cornflowerBlue};
      color: ${({ theme }) => theme.colors.alabaster};
      box-shadow: 0px 0px 0px 5px ${({ theme }) => theme.colors.cornflowerBlue};
      margin-left: 6px;
      width: 200px;

      &:hover {
        color: ${({ theme }) => theme.colors.doveGray};
        background-color: ${({ theme }) => theme.colors.blizzardBlue};
        box-shadow: 0px 0px 0px 5px ${({ theme }) => theme.colors.blizzardBlue};
        cursor: pointer;

      @media (max-width: ${mobileBP}px) {

      }
    `}

  @media (max-width: ${mobileBP}px) {
    background-color: ${({ theme }) => theme.colors.cornflowerBlue};
    color: ${({ theme }) => theme.colors.alabaster};
    box-shadow: 0px 0px 0px 3px ${({ theme }) => theme.colors.cornflowerBlue};
    height: 25px;
    justify-items: center;
  }
`;

export const AdditionalText = styled.span`
  display: inline-block;
  margin-left: 8px;
  opacity: 0;
  transform: scaleY(0);
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;

  ${TileWrapper}:hover & {
    opacity: 1;
    transform: scaleY(1);
  }

  ${({ productPage }) =>
    productPage &&
    css`
      opacity: 1;
      transform: scaleY(1);
      @media (max-width: ${mobileBP}px) {

      }
    `}

  @media (max-width: ${mobileBP}px) {
  opacity: 1;
  transform: scaleY(1);
  font-size: 14px;
  }
`;