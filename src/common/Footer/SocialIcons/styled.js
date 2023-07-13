import styled from "styled-components";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;


export const styleIcon = Icon => styled(Icon)`
    height: auto;
    width: 26px;

    @media (max-width: ${mobileBP}px) {
        width: 20px;
    }
`;

export const List = styled.ul`
    margin-top: 12px;
    margin-bottom: 0;
    display: flex;
    list-style: none;
    padding: 0;

    @media (max-width: ${mobileBP}px) {
        margin-top: 6px;
    }
`;

export const Item = styled.li`
    margin-right: 24px;

    @media (max-width: ${mobileBP}px) {
        margin-right: 16px;
    }

`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.alabaster};
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.mineShaft};
    }
`;