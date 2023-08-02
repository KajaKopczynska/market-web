import styled from "styled-components";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const Title = styled.h1`

  @media (max-width: ${mobileBP}px) {

  }
`;