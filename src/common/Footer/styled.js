import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.cornflowerBlue};
  color: ${({ theme }) => theme.colors.alabaster};
  display: flex;
  align-items: center;
  width: 100%; 

  @media (max-width: ${mobileBP}px) {
    padding: 8px;
    font-size: 10px;
  }
`;

export const FooterWrapper = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: auto;
  font-size: 14px;
  width: 100%; 
`;

export const FooterSection = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr;
  margin: auto;
  padding: 10px;
  width: 100%;

  :not(:first-child) {
    border-top: 1px solid ${({ theme }) => theme.colors.alabaster};
  }
  
  @media (max-width: ${mobileBP}px) {
    padding: 6px;
  }
`;

// Footer Part 1

export const FooterIcon = styled.img`
  margin: 20px;
  width: 150px;

  @media (max-width: ${mobileBP}px) {
    margin: 0;
    width: 50px;
  }
`;

export const NewsletterWrapper = styled.div`
    max-width: 1368px;
    display: grid;
    grid-template-columns: 180px 1fr 2fr;
    grid-gap: 20px;
    justify-content: center;
    align-items: center;

  @media (max-width: ${mobileBP}px) {
    grid-template-columns: 60px 1fr;
    grid-gap: 10px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;

  @media (max-width: ${mobileBP}px) {
    grid-column-end: span 2;
  }
`;

export const Input = styled.input`
  height: 30px;
  width: 100%;
  padding: 6px 19px 6px 19px;
  border: none;
  border-radius: 5px;

  &::placeholder {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray};;
  }

  &:focus {
    outline: none;
  }
`;

export const InputButton = styled.span`
  flex-shrink: 0;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.cornflowerBlue};
  margin: 5px;
  border-radius: 5px;
  transition: background-color 0.2s, color 0.2s, border 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.cornflowerBlue};
    background-color: ${({ theme }) => theme.colors.blizzardBlue};
  }

  @media (max-width: ${mobileBP}px) {
    padding: 6px;
  }
`;

// Footer Part 2

export const FooterInfo = styled.div`
  max-width: 1368px;
  width: 100%;
  margin: auto;
  justify-content: space-between;
  align-items: start;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: ${mobileBP}px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 28px;
  }
`;

export const FooterInfoElement = styled.div`
  display: grid;
  justify-content: center;

  @media (max-width: ${mobileBP}px) {
    justify-content: start;
  }
`;

export const FooterInfoTitle = styled.h4`
  font-size: 20px;
  margin: 10px 0;

  @media (max-width: ${mobileBP}px) {
    font-size: 18px;
    margin: 6px 0;
  }
`;

export const FooterInfoContent = styled.div`
  line-height: 1.5;
  padding: 12px 0;
  font-size: 16px;

  @media (max-width: ${mobileBP}px) {
    font-size: 14px;
    padding: 0;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.alabaster};
  display: grid;
  padding: 6px 0;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.mineShaft};
  }

  @media (max-width: ${mobileBP}px) {
    padding: 4px 0;
  }

  ${({contactInfo}) =>
    contactInfo &&
    css`
      margin-top: 10px;

      @media (max-width: ${mobileBP}px) {
        margin-top: 0;
      }
    `}
`;