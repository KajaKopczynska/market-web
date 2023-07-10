import styled from "styled-components";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const ServicesBannerWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.alabaster};
  box-shadow: 0px 4px 6px #e0e0e0;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 1368px;
  margin: 0 auto;

  @media (max-width: ${mobileBP}px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 40x 40px 40px;
  }
`;

export const ServicesIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;

  @media (max-width: ${mobileBP}px) {
    justify-content: start;
    margin: 0;
  }
`;

export const ServicesIcon = styled.img`
  margin: 20px;

  @media (max-width: ${mobileBP}px) {
    margin: 10px;
    width: 20px;
  }
`;

export const ServicesTitle = styled.h6`
  font-size: 14px;
  padding: 10px 0 6px 6px;
  margin: 0;
  white-space: nowrap;

  @media (max-width: ${mobileBP}px) {
    font-size: 10px;
    padding: 6px 0 3px 3px;
  }
`;

export const ServicesText = styled.p`
  font-size: 14px;
  padding: 0 0 10px 6px;
  margin: 0;

  @media (max-width: ${mobileBP}px) {
    font-size: 10px;
    padding: 0 0 6px 3px;
  }
`;