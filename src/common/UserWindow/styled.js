import styled from "styled-components";
import { NavLink } from "react-router-dom";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const UserForm = styled.form`
  display: grid;
  justify-self: center;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 1fr auto auto;
  grid-gap: 20px;
  max-width: 600px;
  max-height: 400px;
  width: 100%;
  height: 100%;
  padding: 40px;
  margin: 0 auto;
  margin-top: 50px;
`;

export const InputName = styled.p``;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.silverChalice};
  border-radius: 5px;
  max-height: 36px;

`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.cornflowerBlue};
  color: ${({ theme }) => theme.colors.alabaster};
  cursor: pointer;
  grid-column: 1 / 3;
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
  grid-column: 1 / 3;
  justify-self: center;
  text-align: center;
`;

export const StyledNavLink = styled(NavLink)`
  cursor: pointer;

  &:hover {

  }
`;
