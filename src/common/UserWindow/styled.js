import styled from "styled-components";
import { NavLink } from "react-router-dom";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const UserForm = styled.form`
  display: grid;
  justify-self: center;
  grid-gap: 20px;
  max-width: 600px;
  width: 100%;
  padding: 60px 40px 100px 40px;
  margin: 0 auto;

  @media (max-width: ${mobileBP}px) {
    padding: 20px 15px 0 15px;
    /* grid-template-rows: auto 1px; */
    grid-gap: 6px;
  }
`;

export const FormTitle = styled.h1`
  display: grid;
  justify-items: center;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.mineShaft};
  margin: 0;

  @media (max-width: ${mobileBP}px) {
    font-size: 22px;
  }
`;

export const InputWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 6px;
  width: 100%;
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.silverChalice};
  border-radius: 5px;
  height: 36px;
  width: 100%;
  padding: 20px;
  margin: 5px;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0px 0px 0px 1px ${({ theme }) => theme.colors.silverChalice};
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.cornflowerBlue};
  color: ${({ theme }) => theme.colors.alabaster};
  cursor: pointer;
  border: none;
  padding: 10px;
  border-radius: 5px;
  width: 175px;
  justify-self: center;
  transition: background-color 0.2s, color 0.2s, border 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.cornflowerBlue};
    background-color: ${({ theme }) => theme.colors.blizzardBlue};
  }

  @media (max-width: ${mobileBP}px) {
    padding: 6px;
  }
`;

export const Paragraph = styled.p`
  justify-self: center;
  text-align: center;

  @media (max-width: ${mobileBP}px) {
    font-size: 14px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.cornflowerBlue};

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.silverChalice};
  }
`;
