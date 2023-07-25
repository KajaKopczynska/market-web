import styled from "styled-components";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const Title = styled.h2`
  display: grid;
  justify-content: center;
  color: ${({ theme }) => theme.colors.doveGray};
  font-size: 35px;
  font-weight: normal;
  margin: 30px;

@media (max-width: ${mobileBP}px) {

  }
`;

export const CategoryListWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;

@media (max-width: ${mobileBP}px) {

  }
`;