import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as IconSearch } from "./SearchIcon.svg";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  background-color: ${({ theme }) => theme.colors.white};
  height: 20px;
  width: 500px;
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.silverChalice};
  border-radius: 5px;

  &::placeholder {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray};;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: ${mobileBP}px) {
    width: 100%;
  }
`;


export const StyledSearchLink = styled(Link)`
  color: ${({ theme }) => theme.colors.mineShaft};
  display: grid;
  transition: color 0.2s, border 0.2s, transform 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.cornflowerBlue};
    transform: scale(1.1);
  }
`;

export const SearchIcon = styled(IconSearch)`
  flex-shrink: 0;
  width: 22px;
  margin: 10px 10px 10px 5px;
`;