import styled from "styled-components";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const QuantityLabel = styled.label`
  margin-right: 12px;
  font-size: 18px;
`;

export const QuantitySelect = styled.select`
  padding: 6px;
  border-radius: 5px;
  font-size: 18px;
  width: 100px;
`;
