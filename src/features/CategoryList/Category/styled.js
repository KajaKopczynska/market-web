import styled from "styled-components";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-size: 22px;
`;

export const Title = styled.h3`
    color: ${({ theme }) => theme.colors.doveGray};
    font-weight: normal;

    @media (max-width: ${mobileBP}px) {
      font-size: 22px;
      margin: 15px 0 15px 0;
  }
`;