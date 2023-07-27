import styled from "styled-components";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const SectionTitle = styled.h2`
  display: grid;
  justify-content: center;
  color: ${({ theme }) => theme.colors.doveGray};
  font-size: 35px;
  font-weight: normal;
  margin: 50px 0 30px 0;

  @media (max-width: ${mobileBP}px) {
    font-size: 26px;
    margin: 30px 0 6px 0;
  }
`;