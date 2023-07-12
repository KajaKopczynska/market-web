import styled from "styled-components";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;


export const styleIcon = Icon => styled(Icon)`
    height: auto;
    @media (max-width: ${mobileBP}px) {
        width: 32px;
    }
`;

export const List = styled.ul`
    margin-top: 56px;
    margin-bottom: 0;
    display: flex;
    list-style: none;
    padding: 0;
    @media (max-width: ${mobileBP}px) {
        margin-top:40px;
    }
`;

export const Item = styled.li`
    &:not(:last-child) {
        margin-right: 24px;
        @media (max-width: ${mobileBP}px) {
            margin-right: 16px;
        }
    }
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.alabaster};
    transition: color 0.3s;
    &:hover {

    }
`;