import styled from "styled-components";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const Title = styled.h2`
  display: grid;
  justify-content: center;
  color: ${({ theme }) => theme.colors.doveGray};
  font-size: 35px;
  font-weight: normal;
  margin: 50px 0 10px 0;

  @media (max-width: ${mobileBP}px) {
    font-size: 26px;
    margin: 30px 0 6px 0;
  }
`;

export const CategoryListWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: ${mobileBP}px) {
    grid-template-columns: 1fr;
  }
`;