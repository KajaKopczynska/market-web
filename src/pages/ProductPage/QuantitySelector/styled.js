import styled from "styled-components";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const QuantityContainer = styled.div`
  margin-bottom: 30px;

  @media (max-width: ${mobileBP}px) {
    margin-bottom: 10px;
  }
`;

export const QuantityLabel = styled.label`
  margin-right: 12px;
  font-size: 18px;

  @media (max-width: ${mobileBP}px) {
    font-size: 14px;
  }
`;

export const QuantitySelect = styled.select`
  padding: 6px;
  border-radius: 5px;
  font-size: 18px;
  width: 100px;

  @media (max-width: ${mobileBP}px) {
    padding: 4px;
    font-size: 14px;
  }
`;
