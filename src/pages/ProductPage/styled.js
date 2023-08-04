import styled from "styled-components";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const ProductPageWrapper = styled.div`
  background: ${({ theme }) => theme.colors.alabaster};
  color: ${({ theme }) => theme.colors.mineShaft};
  padding: 40px;
  margin: 64px 0 64px 0;
  box-shadow: 0px 0px 3px 2px #e0e0e0;
  display: grid;
  grid-column-gap: 40px;
  grid-template-columns: minmax(114px, 312px) auto;
  grid-template-areas:
    "im in1"
    "im in2"
    "d d";
  opacity: 0;
  animation: reveal 0.7s ease-in-out 0.25s;
  animation-fill-mode: forwards;

  @keyframes reveal {
        100% {
          opacity: 1;
        }
      }

  @media (max-width: ${mobileBP}px) {
    grid-template-columns: auto 1fr;
    grid-column-gap: 10px;
    margin-top: 0px;
    padding: 16px;
    grid-template-areas:
    "im in1"
    "in2 in2"
    "d d";
  }
`;

export const Image = styled.img`
  margin-bottom: 20px;
  grid-area: im;


  @media (max-width: ${mobileBP}px) {
    height: 169px;
    margin-bottom: 0;
  }
`;

export const Info1 = styled.div`
  display: grid;
  grid-template-rows: 70px auto auto;
  grid-area: in1;
  
  @media (max-width: ${mobileBP}px) {
    grid-template-rows: auto auto auto;
    margin: 0 0 0 8px;
    gap: 4px;
  }
`;

export const Info2 = styled.div`
  grid-area: in2;

  @media (max-width: ${mobileBP}px) {
    display: grid;
    grid-gap: 4px;
    margin: 0;

  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.mineShaft};
  font-size: 36px;
  font-weight: 600;
  margin: 16px 0 0;
  line-height: 1.2;

  @media (max-width: ${mobileBP}px) {
    margin: 0;
    font-size: 16px;
  }
`;

export const Subtitle = styled.p`
  font-size: 22px;
  font-weight: 400;
  margin: 10px 0 10px 0;
  line-height: 1;

  @media (max-width: ${mobileBP}px) {
    color: ${({ theme }) => theme.colors.waterloo};
    margin: 0;
    font-size: 16px;
  }
`;

export const Details = styled.div`
   display: grid;
   grid-gap: 4px;

  @media (max-width: ${mobileBP}px) {
    font-size: 14px;
  }
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.stormGray};
  margin-right: 10px;

  @media (max-width: ${mobileBP}px) {
    margin-right: 4px;
    /* display: none; */
  }
`;

export const Price = styled.div`
  font-size: 26px;
  margin: 30px 0 30px 0;
  font-weight: 600;

  @media (max-width: ${mobileBP}px) {
    font-size: 20px;
    margin: 10px 0 10px 0;
  }
`;

export const Summary = styled.div`
  grid-area: d;
  line-height: 1.5;

  @media (max-width: ${mobileBP}px) {
    font-size: 14px;
  }
`;

export const SummaryTitle = styled.h3`
  margin-bottom: 12px;

  @media (max-width: ${mobileBP}px) {
    margin-bottom: 8px;
    font-size: 16px;
  }
`;
