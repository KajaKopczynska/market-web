import styled from "styled-components";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const CategoryListWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: ${mobileBP}px) {
    grid-template-columns: 1fr;
  }
`;