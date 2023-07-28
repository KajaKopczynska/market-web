import styled from "styled-components";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const ProductListWrapper = styled.div`
  display: grid;
  grid-gap: 50px;
  justify-content: center;
  grid-template-columns: repeat(5, 1fr);
  margin-bottom: 50px;

  @media (max-width: ${mobileBP}px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`;