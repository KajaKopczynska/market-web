import styled from "styled-components";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.cornflowerBlue};
  color: ${({ theme }) => theme.colors.alabaster};
  display: grid;
  justify-content: center;
  padding: 12px;
  font-size: 14px;
  /* box-shadow: 0px 0px 3px 2px #e0e0e0; */
  /* width: 100%; */

  @media (max-width: ${mobileBP}px) {
    padding: 8px;
    font-size: 10px;
  }
`;

export const FooterSection = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 10px;

  :not(:first-child) {
    border-top: 1px solid ${({ theme }) => theme.colors.alabaster};
  }
  @media (max-width: ${mobileBP}px) {
    padding: 6px;

  }
`;

export const FooterIcon = styled.img`
  margin: 20px;
  width: 150px;

  @media (max-width: ${mobileBP}px) {
    margin: 10px;
    width: 50px;
  }
`;

export const NewsletterWrapper = styled.div`
    display: grid;
    grid-template-columns: 180px 1fr 2fr;
    grid-gap: 20px;
    justify-content: center;
    align-items: center;



  @media (max-width: ${mobileBP}px) {
    grid-template-columns: 75px 1fr;

  }
`;






export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
`;

export const Input = styled.input`
  height: 30px;
  width: 100%;
  padding: 6px 19px 6px 19px;
  border: none;
  border-radius: 5px;

  &::placeholder {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray};;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: ${mobileBP}px) {
    width: 275px;
  }
`;

export const InputButton = styled.span`
  flex-shrink: 0;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.cornflowerBlue};
  margin: 5px;
  border-radius: 5px;

  @media (max-width: ${mobileBP}px) {
  /* width: 17px;
  height: 17px; */
  }
`;