import styled from "styled-components";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export const Title = styled.h3`
    color: ${({ theme }) => theme.colors.doveGray};
`;