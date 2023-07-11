import styled from "styled-components";
import { NavLink } from "react-router-dom";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const StyledMenu = styled.div`
  background-color: ${({ theme }) => theme.colors.cornflowerBlue};
  color: ${({ theme }) => theme.colors.mineShaft};
  display: flex;
  align-items: center;
  width: 100%; 
`;

export const MenuWrapper = styled.div`
  max-width: 1368px;
  margin: auto;
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: auto auto;
  width: 100%; 
`;

export const MenuItem = styled.div`
  color: ${({ theme }) => theme.colors.alabaster};
  border: none;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 1.3;
  display: grid;
  grid-template-columns: auto auto;


  @media (max-width: ${mobileBP}px) {

  }
`;

export const MenuLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  padding: 0 30px 0 0;
  line-height: 2;

`;

// export const StyledNavLink = styled(NavLink)`
//   color: ${({ theme }) => theme.colors.mineShaft};
//   text-decoration: none;
//   padding: 8px 8px 2px 8px;
//   position: relative;

//   &:hover {
//     color: ${({ theme }) => theme.colors.cornflowerBlue};
//   }

//   @media (max-width: ${mobileBP}px) {
//     padding: 0;
//     margin: 4px 10px 2px 10px;
//   }

//   &::after {
//     content: '';
//     position: absolute;
//     bottom: 0;
//     left: 50%;
//     transform: translateX(-50%);
//     width: 0;
//     height: 1px;
//     background-color: ${({ theme }) => theme.colors.cornflowerBlue};
//     transition: width 0.3s;
//   }

//   &:hover::after {
//     width: 100%;
//   }
// `;
