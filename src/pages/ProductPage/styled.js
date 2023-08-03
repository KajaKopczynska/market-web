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
    "image information"
    "image information"
    "description description";
  opacity: 0;
  animation: reveal 0.7s ease-in-out 0.25s;
  animation-fill-mode: forwards;

  @keyframes reveal {
        100% {
          opacity: 1;
        }
      }

  @media (max-width: ${mobileBP}px) {
    /* grid-template-columns: auto 1fr;
    grid-column-gap: 16px;
    margin-top: 0px;
    padding: 16px;

    grid-template-areas:
    "image information"
    "image information"
    "description description"; */
  }
`;

export const Image = styled.img`
  /* height: 434px; */
  /* width: 292px; */
  margin-bottom: 20px;
  grid-area: image;


  @media (max-width: ${mobileBP}px) {
    /* width: 114px; */
    height: 169px;
  }
`;

export const Information = styled.div`
  grid-area: information;

  @media (max-width: ${mobileBP}px) {
    justify-content: start;
    margin: 0 0 0 8px;
    gap: 4px;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.smoke};
  font-size: 36px;
  font-weight: 600;
  line-height: 1.3;
  margin: 16px 0 0;

  @media (max-width: ${mobileBP}px) {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const Subtitle = styled.p`
  font-size: 22px;
  font-weight: 400;

  @media (max-width: ${mobileBP}px) {
    color: ${({ theme }) => theme.colors.waterloo};
    margin: 0;
    font-size: 13px;
  }
`;

export const Details = styled.div`
   display: grid;
   grid-gap: 10px;

  @media (max-width: ${mobileBP}px) {

  }
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.stormGray};
  margin-right: 10px;

  @media (max-width: ${mobileBP}px) {
    display: none;
  }
`;

export const Price = styled.div`
  font-size: 26px;
  margin: 30px 0 30px 0;
  font-weight: 600;

  @media (max-width: ${mobileBP}px) {

  }
`;



export const Summary = styled.div`
  grid-area: description;
  line-height: 1.5;

  @media (max-width: ${mobileBP}px) {

  }
`;

export const SummaryTitle = styled.h3`
  margin-bottom: 12px;


  @media (max-width: ${mobileBP}px) {

  }
`;
