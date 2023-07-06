import styled from "styled-components";
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
    width: 275px;
  }
`;

export const SearchIcon = styled(IconSearch)`
  flex-shrink: 0;
  width: 22px;
  margin: 10px 10px 10px 5px;

  @media (max-width: ${mobileBP}px) {
  width: 17px;
  height: 17px;
  }
`;