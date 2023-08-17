import styled from "styled-components";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1368px;
  margin: auto;
`;

export const LoadingAnimation = styled.div`
  border: 12px solid ${({ theme }) => theme.colors.concrete};
  border-top: 12px solid ${({ theme }) => theme.colors.cornflowerBlue};
  width: 91px;
  height: 91px;
  margin: 40px;
  border-radius: 50%;
  align-self: center;
  animation: spin 1s linear infinite;
  transition: 0.5s;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: ${mobileBP}px) {
    width: 65px;
    height: 65px;
  }

`;