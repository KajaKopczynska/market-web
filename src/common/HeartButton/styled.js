import styled, { css } from "styled-components";
import { ReactComponent as ClipboardIcon } from "./ClipboardIcon.svg";
import { ReactComponent as ClipboardIconHover } from "./ClipboardIconHover.svg";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const ProductButtonWrapper = styled.div`
  margin: 12px 0 0 0;
  display: grid;
  align-items: center;
  height: 25px;

  ${({ productPage }) =>
    productPage &&
    css`

      @media (max-width: ${mobileBP}px) {

      }
    `}
`;

export const StyledClipboardIcon = styled(ClipboardIcon)`
  cursor: pointer;
  position: relative;
  flex-shrink: 0;
  width: 26px;
  transition: transform 0.3s ease-in-out, opacity 0.8s;
  opacity: ${({ isHovered }) => (isHovered ? 0 : 1)};
  justify-self: end;

  &.hovered {
        opacity: 0;
    }
`;

export const StyledClipboardIconHover = styled(ClipboardIconHover)`
  cursor: pointer;
  position: absolute;
  flex-shrink: 0;
  width: 26px;
  transition: transform 0.3s ease-in-out, opacity 0.8s;
  opacity: ${({ isHovered }) => (isHovered ? 0 : 1)};
  justify-self: end;

  &.hovered {
        opacity: 0;
    }
`;